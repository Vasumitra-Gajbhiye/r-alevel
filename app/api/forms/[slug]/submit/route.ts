import { confirmationEmail } from "@/lib/emails/confirmationEmail";
import { uploadFileToR2 } from "@/lib/r2Upload";
import { enforceRateLimit } from "@/lib/rateLimit";
import connectDB from "@/libs/mongodb";
import Form from "@/models/Form";
import FormSubmission from "@/models/FormSubmission";
import crypto from "crypto";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_FILES_PER_SUBMISSION = 10;
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED_FILE_MIME_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "application/pdf",
]);
export async function POST(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const rlError = await enforceRateLimit(req, `form-submit:${slug}`, {
    limit: 5, // 5 submissions per 5 minutes per IP per form
    windowSec: 5 * 60,
  });
  if (rlError) return rlError;

  await connectDB();

  // Fetch form definition early (needed for file path structure)
  const form = await Form.findOne({ slug });

  if (!form) {
    return NextResponse.json({ error: "Form not found" }, { status: 404 });
  }

  if (form.status !== "open") {
    return NextResponse.json(
      { error: "This form is currently closed" },
      { status: 400 }
    );
  }

  let body: any = {};
  let uploadedFiles: any[] = [];

  const contentType = req.headers.get("content-type") || "";

  // -------------------------
  // MULTIPART FORM (files)
  // -------------------------
  if (contentType.includes("multipart/form-data")) {
    const formData = await req.formData();
    const responsesRaw = formData.get("responses");
    if (responsesRaw) {
      try {
        body.responses = JSON.parse(responsesRaw.toString());
      } catch {
        return NextResponse.json(
          { error: "Invalid responses JSON" },
          { status: 400 }
        );
      }
    }

    const submissionId = new mongoose.Types.ObjectId().toString();

    const rawFiles = formData.getAll("files");

    if (rawFiles.length > MAX_FILES_PER_SUBMISSION) {
      return NextResponse.json(
        { error: `Too many files. Maximum is ${MAX_FILES_PER_SUBMISSION}.` },
        { status: 400 }
      );
    }

    for (const file of rawFiles) {
      if (!(file instanceof File)) continue;

      if (file.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          {
            error: `File "${
              file.name
            }" is too large. Maximum size is ${Math.floor(
              MAX_FILE_SIZE_BYTES / (1024 * 1024)
            )}MB.`,
          },
          { status: 400 }
        );
      }

      if (!ALLOWED_FILE_MIME_TYPES.has(file.type)) {
        return NextResponse.json(
          {
            error: `File type not allowed for "${file.name}".`,
          },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await file.arrayBuffer());

      const ext = file.name.split(".").pop();
      const safeName = crypto.randomUUID();

      const key = `forms/${slug}/${form?.cycleId}/${submissionId}/${safeName}.${ext}`;

      const uploaded = await uploadFileToR2(buffer, key, file.type);
      uploadedFiles.push({
        originalName: file.name,
        mimeType: file.type,
        size: file.size,
        key,
        url: uploaded.url,
      });
    }

    body.__uploadedFiles = uploadedFiles;
    body.__submissionId = submissionId;
  }
  // -------------------------
  // JSON FORM (no files)
  // -------------------------
  else {
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }
  }

  // 2️⃣ Validate + Normalize responses
  const sanitizedResponses: Record<string, any> = {};

  let submitterName: string | undefined;
  let submitterEmail: string | undefined;

  for (const section of form.sections ?? []) {
    const sectionResponses = body?.responses?.[section.id] || {};
    sanitizedResponses[section.id] = {};

    for (const field of section.fields ?? []) {
      let value = sectionResponses?.[field.id];

      const isOptionField = ["select", "checkbox", "radio"].includes(
        field.type
      );

      // -------------------------
      // REQUIRED CHECK
      // -------------------------
      if (field.required) {
        const isEmpty =
          value === undefined ||
          value === null ||
          value === "" ||
          (Array.isArray(value) && value.length === 0);

        if (isEmpty) {
          return NextResponse.json(
            { error: `Missing required field: ${field.label}` },
            { status: 400 }
          );
        }
      }

      // -------------------------
      // OPTION FIELDS VALIDATION
      // -------------------------
      if (isOptionField) {
        const allowedOptions = field.options || [];

        let valuesArray: string[] = [];

        if (Array.isArray(value)) {
          valuesArray = value;
        } else if (typeof value === "string" && value !== "") {
          valuesArray = [value];
        }

        // Strip invalid options
        valuesArray = valuesArray.filter((v) => {
          if (v.startsWith("__OTHER__:")) return field.allowOther;
          return allowedOptions.includes(v);
        });

        // Radio → single only
        if (field.type === "radio") {
          valuesArray = valuesArray.slice(0, 1);
        }

        // Enforce maxSelections
        if (field.maxSelections !== undefined) {
          valuesArray = valuesArray.slice(0, field.maxSelections);
        }

        // Enforce minSelections
        if (
          field.minSelections !== undefined &&
          valuesArray.length < field.minSelections
        ) {
          return NextResponse.json(
            {
              error: `Minimum ${field.minSelections} selections required for ${field.label}`,
            },
            { status: 400 }
          );
        }

        // Normalize single vs multiple
        if (!field.multiple && field.type !== "checkbox") {
          sanitizedResponses[section.id][field.id] = valuesArray[0] ?? null;
        } else {
          sanitizedResponses[section.id][field.id] = valuesArray;
        }

        continue;
      }

      // -------------------------
      // NON OPTION FIELDS
      // -------------------------
      if (value !== undefined && value !== null && value !== "") {
        sanitizedResponses[section.id][field.id] = value;

        // Auto-detect submitter email
        if (field.type === "email" && !submitterEmail) {
          submitterEmail = value;
        }

        // Auto-detect submitter name
        if (
          field.type === "text" &&
          field.label.toLowerCase().includes("name") &&
          !submitterName
        ) {
          submitterName = value;
        }
      }
    }

    // Remove empty sections
    if (Object.keys(sanitizedResponses[section.id]).length === 0) {
      delete sanitizedResponses[section.id];
    }
  }

  let submission;
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    submission = await FormSubmission.create({
      _id: body.__submissionId ? body.__submissionId : undefined,
      formSlug: slug,
      responses: sanitizedResponses,
      cycleId: form.cycleId,
      formType: form.formType,
      submitterName,
      submitterEmail,
      files: body.__uploadedFiles || [],
      metadata: {
        ip:
          req.headers.get("x-forwarded-for") ??
          req.headers.get("x-real-ip") ??
          undefined,
        userAgent: req.headers.get("user-agent") ?? undefined,
      },
    });
    console.log("created");
    if (submitterEmail) {
      await resend.emails.send({
        from: "r/alevel <application@ralevel.com>", // must match verified domain
        to: submitterEmail,
        subject: `We received your application`,
        html: confirmationEmail({
          name: submitterName,
          formTitle: form.title.replace(/\s+Intake\s+\d+$/i, ""),
        }),
      });
    }
  } catch (err: any) {
    if (err.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          type: "DUPLICATE_SUBMISSION",
          message: "You have already submitted this form for this intake.",
        },
        { status: 409 } // 🔥 better than 400
      );
    }

    console.error(err);

    return NextResponse.json(
      {
        success: false,
        type: "SERVER_ERROR",
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }

  // 4️⃣ Increment response count
  form.responseCount++;
  await form.save();

  return NextResponse.json(
    {
      success: true,
      submissionId: submission._id.toString(),
    },
    { status: 201 }
  );
}

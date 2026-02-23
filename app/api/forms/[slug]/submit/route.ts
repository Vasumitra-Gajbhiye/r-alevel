// app/api/forms/[slug]/submit/route.ts
// import connectDB from "@/libs/mongodb";
// import Form from "@/models/Form";
// import FormSubmission from "@/models/FormSubmission";
// import { NextResponse } from "next/server";

// export async function POST(
//   req: Request,
//   { params }: { params: Promise<{ slug: string }> }
// ) {
//   await connectDB();

//   // 🔑 App Router params must be awaited
//   const { slug } = await params;

//   let body: any;
//   try {
//     body = await req.json();
//   } catch {
//     return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
//   }

//   // 1️⃣ Fetch form definition
//   const form = await Form.findOne({ slug });

//   if (!form) {
//     return NextResponse.json({ error: "Form not found" }, { status: 404 });
//   }

//   console.log(body);
//   if (form.status !== "open") {
//     return NextResponse.json(
//       { error: "This form is currently closed" },
//       { status: 400 }
//     );
//   }

//   // 2️⃣ Validate + Normalize responses safely

//   const sanitizedResponses: Record<string, any> = {};

//   for (const section of form.sections ?? []) {
//     const sectionResponses = body?.responses?.[section.id] || {};

//     sanitizedResponses[section.id] = {};

//     for (const field of section.fields ?? []) {
//       let value = sectionResponses?.[field.id];

//       const isOptionField = ["select", "checkbox", "radio"].includes(
//         field.type
//       );

//       // -------------------------
//       // REQUIRED CHECK
//       // -------------------------
//       if (field.required) {
//         const isEmpty =
//           value === undefined ||
//           value === null ||
//           value === "" ||
//           (Array.isArray(value) && value.length === 0);

//         if (isEmpty) {
//           return NextResponse.json(
//             { error: `Missing required field: ${field.label}` },
//             { status: 400 }
//           );
//         }
//       }

//       // -------------------------
//       // OPTION FIELDS VALIDATION
//       // -------------------------
//       if (isOptionField) {
//         const allowedOptions = field.options || [];

//         let valuesArray: string[] = [];

//         if (Array.isArray(value)) {
//           valuesArray = value;
//         } else if (typeof value === "string" && value !== "") {
//           valuesArray = [value];
//         }

//         // 🔒 Strip invalid options
//         valuesArray = valuesArray.filter((v) => {
//           if (v.startsWith("__OTHER__:")) return field.allowOther;
//           return allowedOptions.includes(v);
//         });

//         // 🔢 Enforce radio
//         if (field.type === "radio") {
//           valuesArray = valuesArray.slice(0, 1);
//         }

//         // 🔢 Enforce maxSelections
//         if (field.maxSelections !== undefined) {
//           valuesArray = valuesArray.slice(0, field.maxSelections);
//         }

//         // 🔢 Enforce minSelections
//         if (
//           field.minSelections !== undefined &&
//           valuesArray.length < field.minSelections
//         ) {
//           return NextResponse.json(
//             {
//               error: `Minimum ${field.minSelections} selections required for ${field.label}`,
//             },
//             { status: 400 }
//           );
//         }

//         // Normalize single vs multiple
//         if (!field.multiple && field.type !== "checkbox") {
//           sanitizedResponses[section.id][field.id] = valuesArray[0] ?? null;
//         } else {
//           sanitizedResponses[section.id][field.id] = valuesArray;
//         }

//         continue;
//       }

//       // -------------------------
//       // NON OPTION FIELDS
//       // -------------------------
//       if (value !== undefined && value !== null && value !== "") {
//         sanitizedResponses[section.id][field.id] = value;
//       }
//     }

//     // remove empty section
//     if (Object.keys(sanitizedResponses[section.id]).length === 0) {
//       delete sanitizedResponses[section.id];
//     }
//   }

//   // 3️⃣ Save submission (schema-agnostic)
//   const submission = await FormSubmission.create({
//     formSlug: slug,
//     responses: sanitizedResponses,
//     cycleId: form.cycleId,
//     formType: form.formType,
//     metadata: {
//       ip:
//         req.headers.get("x-forwarded-for") ??
//         req.headers.get("x-real-ip") ??
//         undefined,
//       userAgent: req.headers.get("user-agent") ?? undefined,
//     },
//   });

//   if (form) {
//     form.responseCount++;
//     await form.save();
//   }

//   return NextResponse.json(
//     {
//       success: true,
//       submissionId: submission._id.toString(),
//     },
//     { status: 201 }
//   );
// }

import { confirmationEmail } from "@/lib/emails/confirmationEmail";
import connectDB from "@/libs/mongodb";
import Form from "@/models/Form";
import FormSubmission from "@/models/FormSubmission";
import { NextResponse } from "next/server";
import { Resend } from "resend";
export async function POST(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  await connectDB();

  const { slug } = await params;

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // 1️⃣ Fetch form definition
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
      formSlug: slug,
      responses: sanitizedResponses,
      cycleId: form.cycleId,
      formType: form.formType,
      submitterName,
      submitterEmail,
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

// app/api/forms/[slug]/submit/route.ts
import connectDB from "@/libs/mongodb";
import Form from "@/models/Form";
import FormSubmission from "@/models/FormSubmission";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  await connectDB();

  // 🔑 App Router params must be awaited
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

  // 2️⃣ Validate required fields (GENERIC & SAFE)
  for (const section of form.sections ?? []) {
    const sectionResponses = body?.[section.id];

    for (const field of section.fields ?? []) {
      if (!field.required) continue;

      const value = sectionResponses?.[field.id];

      const isEmpty =
        value === undefined ||
        value === null ||
        value === "" ||
        (Array.isArray(value) && value.length === 0);

      if (isEmpty) {
        return NextResponse.json(
          {
            error: `Missing required field: ${field.label}`,
          },
          { status: 400 }
        );
      }
    }
  }

  // 3️⃣ Save submission (schema-agnostic)
  const submission = await FormSubmission.create({
    formSlug: slug,
    responses: body,
    metadata: {
      ip:
        req.headers.get("x-forwarded-for") ??
        req.headers.get("x-real-ip") ??
        undefined,
      userAgent: req.headers.get("user-agent") ?? undefined,
    },
  });

  return NextResponse.json(
    {
      success: true,
      submissionId: submission._id.toString(),
    },
    { status: 201 }
  );
}

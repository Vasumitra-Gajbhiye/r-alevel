import connectDB from "@/libs/mongodb";
import Form from "@/models/Form";
import FormSubmission from "@/models/FormSubmission";
import { FormDocument } from "@/types/form";
import { notFound } from "next/navigation";
import AdminFormPageClient from "./pageClient";

export default async function AdminFormPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  await connectDB();

  const form = (await Form.findOne({
    slug: slug,
  }).lean()) as FormDocument | null;

  if (!form) notFound();

  const totalResponses = await FormSubmission.countDocuments({
    formSlug: slug,
  });

  const submissions = await FormSubmission.find(
    { formSlug: slug },
    { responses: 1, createdAt: 1, status: 1 }
  )
    .sort({ createdAt: -1 })
    .lean();

  const plainSubmissions = JSON.parse(JSON.stringify(submissions));

  const plainForm = JSON.parse(JSON.stringify(form));

  return (
    <AdminFormPageClient
      form={plainForm}
      totalResponses={totalResponses}
      submissions={plainSubmissions}
    />
  );
}

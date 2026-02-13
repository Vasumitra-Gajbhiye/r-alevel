import connectDB from "@/libs/mongodb";
import Form from "@/models/Form";
import FormClient from "./formClient";

export default async function AdminFormPage({
  params,
}: {
  params: Promise<{ formType: string }>;
}) {
  const { formType } = await params;
  await connectDB();

  const forms = await Form.find({ formType }).sort({ cycleId: -1 }).lean();

  return (
    <FormClient forms={JSON.parse(JSON.stringify(forms))} formType={formType} />
  );
}

// const form = (await Form.findOne({
//   formType: slug,
// }).lean()) as FormDocument | null;

// if (!form) notFound();

// const totalResponses = await FormSubmission.countDocuments({
//   formSlug: slug,
// });

// const submissions = await FormSubmission.find(
//   { formSlug: slug },
//   { responses: 1, createdAt: 1, status: 1 }
// )
//   .sort({ createdAt: -1 })
//   .lean();

// const plainSubmissions = JSON.parse(JSON.stringify(submissions));

// const plainForm = JSON.parse(JSON.stringify(form));

// return (
//   <AdminFormPageClient
//     form={plainForm}
//     totalResponses={totalResponses}
//     submissions={plainSubmissions}
//   />
// );

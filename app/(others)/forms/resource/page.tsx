import connectDB from "@/libs/mongodb";
import Form from "@/models/Form";
import { notFound } from "next/navigation";
import ResourceFormPageClient from "./pageClient";

export const dynamic = "force-dynamic";

export default async function ResourceFormPage() {
  await connectDB();

  const form = await Form.findOne({ slug: "resource" }).lean();

  if (!form) {
    notFound();
  }

  // serialize for client component
  const plainForm = JSON.parse(JSON.stringify(form));

  return <ResourceFormPageClient />;
}

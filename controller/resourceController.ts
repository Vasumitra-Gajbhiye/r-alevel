import connectDB from "@/lib/mongodb";
import resources2Data from "@/models/resources2Data";
type ResourceMeta = {
  subject: string;
};
export async function getResourceForStaticParams() {
  await connectDB();

  const resourceForStaticParams = await resources2Data
    .find({}, { slug: 1, _id: 0 })
    .lean();
  return resourceForStaticParams;
}

export async function getResourceForGenerateMetadata(slug: string) {
  await connectDB();

  const resourceForGenerateMetadata = await resources2Data
    .findOne({ slug: slug }, { subject: 1, _id: 0 })
    .lean<ResourceMeta>();
  return resourceForGenerateMetadata;
}

export async function getResource(slug: string) {
  await connectDB();

  const resource = await resources2Data.findOne({ slug }).lean();
  return JSON.parse(JSON.stringify(resource));
}

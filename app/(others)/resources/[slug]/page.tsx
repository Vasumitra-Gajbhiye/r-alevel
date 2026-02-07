import { MongoClient } from "mongodb";
import { notFound } from "next/navigation";
import ResourceClient from "./ResourceClient"; // client component in same folder

export const revalidate = 60; // ISR: revalidate every 60s (adjust as needed)

async function getDb() {
  const client = new MongoClient(process.env.MONGODB_URI!);
  if (!client) throw new Error("Missing MONGODB_URI");
  await client.connect();
  return client.db(process.env.MONGODB_DB || "r_alevel");
}

export async function generateStaticParams() {
  const db = await getDb();
  const docs = await db
    .collection("resources2datas")
    .find({}, { projection: { slug: 1 } })
    .toArray();
  return docs.map((d: any) => ({ slug: d.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { params } = props;
  const { slug } = await params;
  const db = await getDb();

  const doc = await db
    .collection("resources2datas")
    .findOne({ slug: slug }, { projection: { subject: 1 } });
  if (!doc) {
    return { title: "Resource not found" };
  }
  return {
    title: `${doc.subject} Resources | r/alevel Repository`,
    description: `A curated collection of ${doc.subject} notes, syllabus, past papers, videos and tools for A-Level.`,
    openGraph: {
      title: `${doc.subject} Resources | r/alevel`,
      description: `Curated ${doc.subject} resources for A-Level students.`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // 👈 MUST AWAIT
  const db = await getDb();
  const resource = await db
    .collection("resources2datas")
    .findOne({ slug: slug });
  if (!resource) {
    console.log("resources not found");
    notFound();
  }

  (resource as any)._id = resource._id.toString();

  // CLEAN THE OBJECT (strip prototypes, ensure it’s serializable)
  const serializable = JSON.parse(JSON.stringify(resource));

  return <ResourceClient resource={serializable} />;
}

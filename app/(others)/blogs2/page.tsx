import getAllBlogs from "@/app/controller/getAllBlogs";
import BlogsClient from "./BlogsClient";

export const revalidate = 60; // optional caching

export default async function BlogsPage() {
  const data = await getAllBlogs(); // ✅ FETCH ON SERVER

  return <BlogsClient data={data} />; // ✅ PASS TO CLIENT
}
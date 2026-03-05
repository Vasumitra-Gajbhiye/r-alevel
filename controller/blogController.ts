import connectDB from "@/lib/mongodb";
import Blog from "@/models/blogsData";

export default async function getBlogs() {
  await connectDB();

  const blogs = await Blog.find({}).sort({ createdAt: -1 }).lean();

  return blogs;
}

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { requireRoles } from "@/lib/requireRoles";
import { slugify } from "@/lib/slugify";
import connectDB from "@/libs/mongodb";
import EditorBlog from "@/models/editorBlogs";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

/* ================= LIST BLOGS ================= */
export async function GET() {
  await connectDB();
  const session = await getServerSession(authOptions);

  // writers see own, admins see all
  requireRoles(session, ["owner", "admin", "writer"]);

  const isAdminLike = session!.userData!.roles.some(
    (r) => r === "admin" || r === "owner"
  );

  const match = isAdminLike
    ? {}
    : { ownerId: new mongoose.Types.ObjectId(session!.userData!.id) };

  const blogs = await EditorBlog.aggregate([
    { $match: match },
    {
      $lookup: {
        from: "userdatas",
        localField: "ownerId",
        foreignField: "_id",
        as: "owner",
      },
    },
    { $unwind: "$owner" },
    {
      $project: {
        title: 1,
        slug: 1,
        updatedAt: 1,
        ownerId: 1,
        ownerName: "$owner.name",
        ownerEmail: "$owner.email",
      },
    },
    { $sort: { updatedAt: -1 } },
  ]);

  return NextResponse.json(blogs);
}

/* ================= CREATE BLOG ================= */
export async function POST() {
  await connectDB();
  const session = await getServerSession(authOptions);

  requireRoles(session, ["owner", "admin", "writer"]);

  const blog = await EditorBlog.create({
    ownerId: new mongoose.Types.ObjectId(session!.userData!.id),
    title: "Untitled document",
    slug: slugify(`Untitled-${Date.now()}`),
    metadata: {
      title: "New Blog",
      author: session?.user?.name || "",
    },
    blocks: [],
  });

  return NextResponse.json(blog, { status: 201 });
}

// app/(others)/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import BlogPostLayout from "./BlogPostLayout";

import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "app/(others)/blogs/posts");

  // Read all filenames in the folder
  const files = fs.readdirSync(postsDir);

  // Filter only `.mdx` files → remove extension → return slug objects
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log(slug);

  try {
    // const Post = require(`../posts/${params.slug}.mdx`).default;

    const { default: Post } = await import(
      `@/app/(others)/blogs/posts/${slug}.mdx`
    );
    const { metadata } = await import(`@/app/(others)/blogs/posts/${slug}.mdx`);

    return (
      <BlogPostLayout metadata={metadata}>
        <Post />
      </BlogPostLayout>
    );
  } catch {
    return notFound();
  }
}

export const dynamicParams = false;



// app/(others)/blogs2/[slug]/page.tsx
import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import BlogPostLayout from "./BlogPostLayout";

// Let Next know which slugs exist by reading /content
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/blogs");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    files = [];
  }
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/blogs", `${slug}.mdx`);

  let source: string;
  try {
    source = await fs.readFile(filePath, "utf8");
  } catch {
    return notFound();
  }

  // Compile the MDX into a React Server Component
  const { content, frontmatter } = await compileMDX<{
    slug: string;
    title: string;
    author: string;
    date: string;
    tag?: string;
    image?: string;
  }>({
    source,
    options: {
      parseFrontmatter: true,
      // You can add remark/rehype plugins here later if you want
      mdxOptions: { remarkPlugins: [], rehypePlugins: [] },
    },
  });

  return (
    <BlogPostLayout metadata={frontmatter}>
      {content}
    </BlogPostLayout>
  );
}
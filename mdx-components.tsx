import MDXImage from "@/app/(others)/blogs2/components/MDXImage";
import type { MDXComponents } from "mdx/types";

import BlogHeading from "@/app/(others)/blogs2/components/BlogHeading";
import BlogImage from "@/app/(others)/blogs2/components/BlogImage";
import BlogParagraph from "@/app/(others)/blogs2/components/BlogParagraph";
import Callout from "@/app/(others)/blogs2/components/Callout";
import Divider from "@/app/(others)/blogs2/components/Divider";
import Heading3 from "@/app/(others)/blogs2/components/Heading3";
import KeyPoints from "@/app/(others)/blogs2/components/KeyPoints";
import KeyPointsMinimal from "@/app/(others)/blogs2/components/KeyPointsMinimal";
import NextRead from "@/app/(others)/blogs2/components/NextRead";
import Note from "@/app/(others)/blogs2/components/Note";
import Quote from "@/app/(others)/blogs2/components/Quote";
import Video from "@/app/(others)/blogs2/components/Video";

export function useMDXComponents(): MDXComponents {
  return {
    img: (props) => <MDXImage {...(props as any)} />,
    h2: (props) => <BlogHeading {...(props as any)} />, // ← FIXED
    h3: (props) => <Heading3 {...(props as any)} />, // ← FIXED
    p: (props) => <BlogParagraph {...(props as any)} />,
    Callout,
    Quote,
    BlogImage,
    Divider,
    KeyPoints,
    Note,
    Video,
    NextRead,
    KeyPointsMinimal,
  };
}

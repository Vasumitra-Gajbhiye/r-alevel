"use client";

import React, { ReactNode, isValidElement } from "react";

const cn = (...xs: Array<string | false | null | undefined>) =>
  xs.filter(Boolean).join(" ");

/* Safely extract <li> children OR fallback to plain markdown text */
function extractListItems(children: ReactNode): ReactNode[] {
  if (!children) return [];

  // Case 1: direct <ul> or <ol> passed by MDX
  if (
    isValidElement(children) &&
    (children.type === "ul" || children.type === "ol")
  ) {
    const liNodes = React.Children.toArray(children.props.children);
    return liNodes
      .map((node: any) => (isValidElement(node) ? node.props?.children : null))
      .filter(Boolean);
  }

  // Case 2: Markdown parsed list inside an array (<ul> inside array)
  if (Array.isArray(children)) {
    const first = children.find(
      (n) => isValidElement(n) && (n.type === "ul" || n.type === "ol")
    );

    if (first && isValidElement(first)) {
      const liNodes = React.Children.toArray(first.props.children);
      return liNodes
        .map((node: any) =>
          isValidElement(node) ? node.props?.children : null
        )
        .filter(Boolean);
    }
  }

  // Case 3: plain text separated by newlines (fallback)
  const text = String(children);
  return text
    .split("\n")
    .map((line) =>
      line
        .trim()
        .replace(/^[-*]\s*/, "")
        .replace(/^\d+\.\s*/, "")
    )
    .filter(Boolean)
    .map((line, i) => <span key={i}>{line}</span>);
}

type Props = {
  children?: ReactNode;
  title?: string;
  ordered?: boolean;
};

export default function KeyPointsMinimal({
  children,
  title,
  ordered = false,
}: Props) {
  const items = extractListItems(children);
  if (items.length === 0) return null;

  return (
    <div className="my-10">
      {title && (
        <div className="mb-2 text-xl font-semibold text-sky-800">{title}</div>
      )}

      {ordered ? (
        <ol className="flex flex-col gap-2 mt-3 ml-5 space-y-2 list-decimal tracking-wide text-[1.02rem] leading-8 text-slate-700">
          {items.map((node, i) => (
            <li key={i}>{node}</li>
          ))}
        </ol>
      ) : (
        <ul className="ml-5 space-y-2 list-disc tracking-wide text-[1.02rem] leading-8 text-slate-700">
          {items.map((node, i) => (
            <li key={i}>{node}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

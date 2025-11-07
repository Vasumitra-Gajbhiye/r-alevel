// app/mdx-components.ts
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // you can add global MDX component mappings here later
  return {
    ...components,
  };
}
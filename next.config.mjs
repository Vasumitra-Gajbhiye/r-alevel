import createMDX from "@next/mdx";



/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // ✅ MUST be enabled for MDX in the app router
  experimental: {
    mdxRs: true,
  },

  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "www.gravatar.com",
    ],
  },
};

const withMDX = createMDX({});

// ✅ Wrap the config last
export default withMDX(nextConfig);
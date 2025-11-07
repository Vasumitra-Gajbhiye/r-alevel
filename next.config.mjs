import createMDX from "@next/mdx";

const withMDX = createMDX({
  // Enables MDX for `.mdx` files
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
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

// ✅ Wrap the config last
export default withMDX(nextConfig);
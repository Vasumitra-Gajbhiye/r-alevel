/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // keep if you're using app router
  },
  images: {
    // simple domain list (works)
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com", // GitHub avatars (optional)
      "www.gravatar.com",             // gravatar (optional)
    ],
    // optional — more secure/specific: remotePatterns (allows paths)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig

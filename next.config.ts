import type { NextConfig } from "next";

// GitHub Pages: site will be at https://sneha1012.github.io/sneha-maurya-portfolio/
const basePath = process.env.NODE_ENV === "production" ? "/sneha-maurya-portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;

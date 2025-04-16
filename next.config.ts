import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_HIDE_VERCEL_BANNER: "true", // Hides the Vercel preview badge
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ipfs.dweb.link",
      },
      {
        protocol: "https",
        hostname: "ipfs.io",
      },
      {
        protocol: "https",
        hostname: "images.weserv.nl",
      },
      {
        protocol: "https",
        hostname: "**.vercel-storage.com", // ✅ Allow images from Vercel Blob Storage
      },
    ],
  },
  
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_HIDE_VERCEL_BANNER: "true", // Hides the Vercel preview badge
  },
  images: {
    domains: [
      "ipfs.dweb.link",    // Web3.Storage Gateway
      "ipfs.io",           // IPFS.io Public Gateway
      "images.weserv.nl"   // Image Optimization Proxy
    ],
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
      }
    ],
    unoptimized: true, // Ensures external images work without Next.js built-in optimization
  }
};

export default nextConfig;



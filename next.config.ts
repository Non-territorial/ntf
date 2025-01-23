import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_HIDE_VERCEL_BANNER: "true", // Hides the Vercel preview badge
  },
};

export default nextConfig;

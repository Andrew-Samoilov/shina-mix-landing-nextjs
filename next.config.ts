import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: (process.env.NEXT_PUBLIC_IMAGE_PROTOCOL as "http" | "https") ?? "http",
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOST ?? "localhost",
        pathname: "/uploads/**/*",
      },
    ],
  },
};

export default nextConfig;

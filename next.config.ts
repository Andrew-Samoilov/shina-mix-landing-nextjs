import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: (process.env.NEXT_PUBLIC_IMAGE_PROTOCOL === "http" || process.env.NEXT_PUBLIC_IMAGE_PROTOCOL === "https")
          ? process.env.NEXT_PUBLIC_IMAGE_PROTOCOL
          : "https",

        hostname: process.env.NEXT_PUBLIC_IMAGE_HOST ?? "admin.shinamix.com",
        pathname: "/uploads/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "myrobo.adxamov.uz" },
      { protocol: "https", hostname: "myrobo.uz" },
    ],
  },
};

export default nextConfig;

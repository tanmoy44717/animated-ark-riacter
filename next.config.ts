import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/animated-ark-riacter',
  assetPrefix: '/animated-ark-riacter',
};

export default nextConfig;

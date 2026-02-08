import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'animated-ark-riacter';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : undefined,
  assetPrefix: isProd ? `/${repoName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  }
};

export default nextConfig;
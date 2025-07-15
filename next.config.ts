import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Image Optimization
  },
  basePath: "/website-test", // Required for GitHub Pages to serve from a subpath
  trailingSlash: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/mediswift-global-health",
  assetPrefix: "/mediswift-global-health/",
};

export default nextConfig;

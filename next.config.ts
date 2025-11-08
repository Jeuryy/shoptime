import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [{
      protocol: "https",
      hostname: "cdn.sanity.io",
    }]
  },
  typescript:{
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;

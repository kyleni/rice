import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      // This tells Turbopack to ignore 'fs' module in client bundles
      '*.{js,jsx,ts,tsx}': {
        loaders: [],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;

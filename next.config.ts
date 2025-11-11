import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // trailingSlash: true, <-- BU SATIRI SİLDİK

  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js', 
      },
    },
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
      issuer: {
        and: [/\.(js|ts|md)x?$/], 
      },
    });
    return config;
  },
};

export default nextConfig;
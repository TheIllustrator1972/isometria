import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: "/isometria",
  images: {
    unoptimized: true, // Required for static exports
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 100000,
            fallback: "file-loader",
          },
        },
      ],
    });
    config.cache = false; // Disable Webpack caching

    return config;
  },
};

export default nextConfig;

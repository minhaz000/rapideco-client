/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "custom",
    loaderFile: "./src/utils/loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://imgbb.com",
      },
    ],
  },

  webpack: (config) => {
    if (isDev) {
      return config;
    }

    return {
      ...config,
    };
  },
};

module.exports = nextConfig;

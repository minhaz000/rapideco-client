/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
  images: {
    domains: ["localhost:3000"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://imgbb.com/",
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

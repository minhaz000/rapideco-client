/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
  images: {
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
      externals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    };
  },
};

module.exports = nextConfig;

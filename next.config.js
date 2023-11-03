/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
const nextConfig = {
  // experimental: {
  //   serverActions: {
  //     bodySizeLimit: "10mb",
  //   },
  // },
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

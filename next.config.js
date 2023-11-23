/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "s3.us-west-2.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },

      {
        protocol: "https",
        hostname: "w.namu.la",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.namu.wiki",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        pathname: "**",
      },
    ],
  },
  plugins: {
    autoprefixer: {},
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  format: ["image/png", "images/webp", "image/jpeg"],
};

module.exports = nextConfig;

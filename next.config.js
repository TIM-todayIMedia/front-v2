/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.notion.so",
      "images.unsplash.com",
      "s3.us-west-2.amazonaws.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "w.namu.la",
      "i.namu.wiki",
    ],
  },
  plugins: {
    autoprefixer: {},
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

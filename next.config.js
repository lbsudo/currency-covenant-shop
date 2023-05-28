/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.cdn.printful.com",
        port: "",
        pathname: "/files/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/category/:slug*",
        destination: "/category/[slug]",
      },
    ];
  },
};

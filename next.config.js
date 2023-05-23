/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/category/:slug*',
        destination: '/category/[slug]',
      },
    ];
  },
};



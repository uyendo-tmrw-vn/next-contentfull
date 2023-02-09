/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_KEY: process.env.CONTENTFUL_ACCESS_KEY,
  },
  exportPathMap: function () {
    return {
      '/': { page: `/` },
      '/product': { page: `/product` },
    }
  },
}

module.exports = nextConfig

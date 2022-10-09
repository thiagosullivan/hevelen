/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.picsum.photos', 'www.datocms-assets.com'],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'clipartmax.com',
        port: '',
        pathname: '/png/middle/**',
      },
    ],
  },
}
module.exports = nextConfig

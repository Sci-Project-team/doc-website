/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove appDir: true - it's no longer needed
  },

  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

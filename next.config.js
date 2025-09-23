/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/duncun',
  assetPrefix: '/duncun/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

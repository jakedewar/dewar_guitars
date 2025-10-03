/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use default Next.js image optimization
  images: {
    unoptimized: false,
  },
  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  // Disable webpack optimizations that might cause issues
  webpack: (config, { dev, isServer }) => {
    // Disable webpack optimizations that can cause module loading issues
    config.optimization = {
      ...config.optimization,
      splitChunks: false,
    }
    
    return config
  },
}

module.exports = nextConfig

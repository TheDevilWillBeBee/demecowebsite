/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    position: "bottom-right",
  },
  // Disable all development-only features
  experimental: {
    disableOptimizedLoading: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // OpenNext requires standalone output for Cloudflare Pages
  output: 'standalone',
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Required for `output: 'export'` — no image optimisation server exists.
  images: { unoptimized: true },
};

module.exports = nextConfig;

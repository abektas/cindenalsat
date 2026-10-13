/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `next build` emits plain HTML/CSS/JS into ./out
  output: 'export',
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

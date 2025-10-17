import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    scrollRestoration: false,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here if needed
});

export default withMDX(nextConfig);

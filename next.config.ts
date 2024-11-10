import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['www.medicare24bd.com', 'medicare24bd.com'], // Hostnames only, without "https://"
  },
  reactStrictMode: true,
};

export default nextConfig;

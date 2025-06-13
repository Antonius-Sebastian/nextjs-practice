import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: "incremental",
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rlgbdnflpvxzeqxkdpit.supabase.co",
        pathname: "/storage/v1/object/public/customer-profile/customers/**",
      },
    ],
  },
};
export default nextConfig;

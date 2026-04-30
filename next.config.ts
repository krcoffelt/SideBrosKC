import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "thesidebroskc.com" }],
        destination: "https://www.thesidebroskc.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "sidebroskc.com" }],
        destination: "https://www.thesidebroskc.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sidebroskc.com" }],
        destination: "https://www.thesidebroskc.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/joymeetstaste.html", destination: "/joymeetstaste", permanent: true },
      { source: "/resume.html", destination: "/resume", permanent: true },
    ];
  },
};

export default nextConfig;

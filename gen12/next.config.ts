import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  // Private client pages: static files in public/p/<slug>/index.html,
  // reachable only by direct link at /p/<slug>. Never link them from the site,
  // the sitemap or robots.txt.
  async rewrites() {
    return [{ source: "/p/:slug", destination: "/p/:slug/index.html" }];
  },
  async headers() {
    return [
      {
        source: "/p/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
    ];
  },
};

export default nextConfig;

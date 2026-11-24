import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  // Private client pages: static folders in public/p/<slug>/ (index.html plus
  // assets such as img/), reachable only by direct link. Never link them from
  // the site, the sitemap or robots.txt.
  // Canonical URL is /p/<slug>/ (with trailing slash) so relative asset paths
  // like "img/x.jpg" resolve inside the page folder. Routing lives in
  // src/proxy.ts, because config redirects/rewrites can't tell "/p/x" from
  // "/p/x/". Disabling Next's built-in "/x/" -> "/x" redirect lets the proxy
  // see the trailing slash.
  skipTrailingSlashRedirect: true,
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

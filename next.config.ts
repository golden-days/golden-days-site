import type { NextConfig } from "next";

// Short, easy-to-guess addresses that point to the real pages.
const shortcuts = [
  { from: "/faq", to: "/medi-cal#faq" },
  { from: "/referral", to: "/referrals" },
  { from: "/refer", to: "/referrals" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return ["", "/ru", "/zh"].flatMap((prefix) =>
      shortcuts.map(({ from, to }) => ({
        source: `${prefix}${from}`,
        destination: `${prefix}${to}`,
        permanent: false,
      })),
    );
  },
};

export default nextConfig;

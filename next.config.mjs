import nextPWA from "@ducanh2912/next-pwa";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
};

export default nextPWA(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lubimyczytac.pl/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "s.lubimyczytac.pl/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

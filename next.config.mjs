/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "veracious-toucan-946.convex.cloud",
      },
    ],
  },
};

export default nextConfig;

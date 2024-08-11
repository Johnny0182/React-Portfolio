/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
  },
  // Remove the experimental section as server actions are now available by default
  // experimental: {
  //   serverActions: true,
  // },
  output: 'standalone', // This is important for Netlify deployment
};

module.exports = nextConfig;
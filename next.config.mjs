/* @type {import('next').NextConfig} */
/*const nextConfig = {};

export default nextConfig;*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `https://helpful-music-830291.framer.app/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;

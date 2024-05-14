/* @type {import('next').NextConfig} */
/*const nextConfig = {};

export default nextConfig;*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `https://helpful-music-830291.framer.app/:path*`,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://vitormorais.framer.website/:path*',
      },
    ];
  },
};

export default nextConfig;
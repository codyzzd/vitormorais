/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
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
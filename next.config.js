module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `https://helpful-music-830291.framer.app/:path*`,
        },
      ],
    }
  },
}
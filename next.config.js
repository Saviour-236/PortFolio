/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    // Add your Next.js config here...
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        // Add other routes if needed...
      };
    },
  };
module.exports = nextConfig

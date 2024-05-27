/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://www.tesla-mag.com/wp-json/wp/v2/:path*', // Proxy to the external API
          },
        ]
      },
};

export default nextConfig;

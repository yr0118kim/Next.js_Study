/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() { // 예전 링크에서 개편된 링크로 변경할 때 예전링크에서 개편된 링크로 이동하게 도와줌
    return [
      {
        source: "/products/deleted_forever",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false,
      },
    ];
    },
    async rewrites() {
        return [
            {
                source: '/items/:slug',
                destination:'/products/:slug',
          }
      ]
  }
};

module.exports = nextConfig;

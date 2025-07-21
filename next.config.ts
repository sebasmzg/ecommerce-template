import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
};

export default nextConfig;

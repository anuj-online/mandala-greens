import type {NextConfig} from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, {isServer}) => {
    config.resolve.alias['@/components'] = path.join(
      __dirname,
      'src/components',
    );

    // Return the updated config
    if (typeof config.webpack === 'function') {
      return config.webpack(config, {isServer});
    }
    return config;
  },
};

export default nextConfig;

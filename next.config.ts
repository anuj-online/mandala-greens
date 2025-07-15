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
  webpack: (config) => {
    // Add aliases for components, lib, and hooks
    config.resolve.alias['@/components'] = path.join(
      __dirname,
      'src/components',
    );
    config.resolve.alias['@/lib'] = path.join(__dirname, 'src/lib');
    config.resolve.alias['@/hooks'] = path.join(
      __dirname,
      'src/hooks',
    );

    // Return the updated config
    if (typeof config.webpack === 'function') {
      return config.webpack(config, {isServer});
    }
    return config;
  },
};

export default nextConfig;

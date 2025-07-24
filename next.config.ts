import type { NextConfig } from "next";

// Suppress punycode deprecation warning
process.removeAllListeners('warning');
process.on('warning', (warning) => {
  if (warning.name === 'DeprecationWarning' && warning.message.includes('punycode')) {
    return;
  }
  console.warn(warning.name, warning.message);
});

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint:{
        ignoreDuringBuilds: true,
    },
  images: {
      remotePatterns: [
          {hostname: 'img.clerk.com'}
      ]
  },
  // experimental options removed as they were causing build errors
};

export default nextConfig;

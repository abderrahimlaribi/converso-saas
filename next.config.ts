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
  images: {
      remotePatterns: [
          {hostname: 'img.clerk.com'}
      ]
  },
  // Allow access from local network IPs in development
  experimental: {
      allowedDevOrigins: ['http://localhost:3000', 'http://192.168.100.9:3000']
  }
};

export default nextConfig;

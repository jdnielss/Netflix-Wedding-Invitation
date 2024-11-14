import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'eu.ui-avatars.com',
                port: '',
                pathname: '/*/**',
            },
            {
                protocol: 'https',
                hostname: 'baconmockup.com',
                port: '',
                pathname: '/*/**',
            },
        ],
    },
};

export default nextConfig;

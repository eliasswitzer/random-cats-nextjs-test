/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
                {
                protocol: 'https',
                hostname: 'cataas.com',
                port: '',
                pathname: '/c',
            },
        ],
    },
}

module.exports = nextConfig

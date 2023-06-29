/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    images: {
        remotePatterns: [
            {
                hostname: 'challenge.egodesign.dev'
            }
        ]
    }
}

module.exports = nextConfig

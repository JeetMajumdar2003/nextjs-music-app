/** @type {import('next').NextConfig} */
const nextConfig = {
    // Export static HTML (next export)
    output: 'export',
    // Serve from repository path on GitHub Pages
    basePath: '/nextjs-music-app',
    assetPrefix: '/nextjs-music-app',
    // Helpful for GitHub Pages so pages are served from directories (index.html)
    trailingSlash: true,
    images: {
        // Disable built-in image optimization for static export
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/photos/**',
            },
        ],
    },
};

export default nextConfig;

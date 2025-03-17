/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },        
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },        
            {
                protocol: 'https',
                hostname: 'ssl.pstatic.net',
            },        
        ],
    },
};

export default nextConfig;

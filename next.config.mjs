/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "proyecto-integrador-bobb.onrender.com",
            },
        ],
    },
};

export default nextConfig;

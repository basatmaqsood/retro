/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
    redirects: async () => [
        {
            source: "/game",
            destination: "/",
            permanent: true, // 308 Redirect
        },
    ],
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    redirects: async () => [
        {
            source: "/game",
            destination: "/",
            permanent: true, // 308 Redirect
        },
    ],
};

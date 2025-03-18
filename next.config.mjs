/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental : {
        serverActions : false,
        serverComponentsExternalPackages : ['mongoose']
    },
    images : {
        domains : ['m.media-amazon.com']
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ENABLE_EXPLORER:
      process.env.NEXT_PUBLIC_ENABLE_EXPLORER,
  },
};

export default nextConfig;

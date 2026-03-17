/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static HTML export
    images: {
      unoptimized: true, // Required for Next.js Image component to work with static export
    },
  };
  
  export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment the following line to build a static site.
  output: "export",
images: {
    unoptimized: true, // ✅ Add this line
  },
  reactStrictMode: true,
};

export default nextConfig;
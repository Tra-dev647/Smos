/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  // pdfkit reads its built-in AFM font files from disk via fs.readFileSync.
  // Keep it external so its font assets remain resolvable at runtime.
  serverExternalPackages: ["pdfkit"],
};

module.exports = nextConfig;

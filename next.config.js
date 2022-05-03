const { API } = require("./config");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sejutacita.id"],
  },
  rewrites: function () {
    return [
      {
        source: "/categories",
        destination: `${API}/fee-assessment-categories`,
      },
      {
        source: "/books",
        destination: `${API}/fee-assessment-books`,
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [{
      source: "/google/autocomplete",
      destination: "https://maps.googleapis.com/maps/api/place/autocomplete/json"
    },
    {
      source: "/google/placeID",
      destination: "https://maps.googleapis.com/maps/api/place/details/json"
    }
    ]
  }
}

module.exports = nextConfig

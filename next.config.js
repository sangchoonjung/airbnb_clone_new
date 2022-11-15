/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //외부 api를 프론트엔드에서 직접 요청할때,
  rewrites: async () => {
    return [{
      source: "/google/autocomplete",
      destination: "https://maps.googleapis.com/maps/api/place/autocomplete/json"
    },
    {
      source: "/google/placeID",
      destination: "https://maps.googleapis.com/maps/api/place/details/json"
    },
    ]
  },
}

module.exports = nextConfig

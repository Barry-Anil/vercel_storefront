const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  experimental: {
    serverActions: true,
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "medusa-backend.s3.ap-south-1.amazonaws.com",
      "localhost",
      "images.pexels.com",
      "medusa-public-images.s3.eu-west-1.amazonaws.com"
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))

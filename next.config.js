/** @type {import('next').NextConfig} */
const nextConfig = {
  "rewrites": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "game.starknopoly.com"
        }
      ],
      "destination": "/game/:path*"
    }
  ]
}


module.exports = nextConfig
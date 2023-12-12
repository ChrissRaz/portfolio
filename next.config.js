/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin')


const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  }
}

module.exports = nextConfig

// module.exports = nextTranslate(nextConfig)

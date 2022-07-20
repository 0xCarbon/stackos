/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const { i18n } = require('./next-i18next.config');

module.exports = withPWA({
  i18n,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    concurrentFeatures: true,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  productionBrowserSourceMaps: true,
});

/** @type {import('next').NextConfig} */

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const appSrc = path.join(appDirectory, 'app');

const nextConfig = {
  pageExtensions: ['jsx', 'js'],
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // ✅ 明确设置项目结构以确保 Vercel 能识别
    experimental: {
      appDir: false // ✅ 明确禁用 appDir 模式（你用的是 pages 目录）
    }
  }
  
  module.exports = nextConfig
  
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <Head>
        <title>PDF Translation - 高保真文档翻译工具</title>
        <meta name="description" content="还原原始格式的 PDF 翻译工具，专业、快速、安全。" />
      </Head>

      {/* 顶部导航 */}
      <header className="w-full px-6 py-4 flex items-center justify-between shadow bg-white fixed top-0 z-50">
        <div className="text-2xl font-bold text-blue-700">PDF Translation</div>
        <nav className="space-x-6 hidden md:block">
          <Link href="#features" className="text-gray-700 hover:text-blue-600">功能介绍</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600">定价方案</Link>
        </nav>
        <div className="space-x-4">
          <Link href="/login" className="text-blue-600 font-medium hover:underline">登录</Link>
          <Link href="/signup" className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition">注册</Link>
        </div>
      </header>

      {/* 主体内容 */}
      <main className="min-h-screen pt-32 px-6 pb-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
              专业的 PDF 翻译工具
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              高度还原格式、准确翻译、支持批量处理，提升跨境文档处理效率。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/pricing">
                <button className="px-6 py-3 rounded-xl bg-blue-600 text-white text-lg font-semibold shadow hover:bg-blue-700 transition">
                  立即开始
                </button>
              </Link>
              <a
                href="#features"
                className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 text-lg font-semibold hover:bg-blue-50 transition"
              >
                查看功能
              </a>
            </div>
          </div>

          {/* 动图展示 */}
          {isClient && (
            <div className="flex justify-center">
              <Image
                src="/demo.gif"
                alt="PDF 翻译演示"
                width={500}
                height={350}
                className="rounded-xl shadow-xl border"
                unoptimized
              />
            </div>
          )}
        </div>
      </main>
    </>
  )
}

// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Header from '../components/Header'  // 确保路径正确

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

      <Header />

      <main className="min-h-screen pt-32 px-6 pb-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        {/* 主标题区 */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
            专业的 PDF 翻译工具
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            高度还原格式、准确翻译、支持批量处理，提升跨境文档处理效率。
          </p>

          {/* 动图演示 */}
          {isClient && (
            <div className="flex justify-center">
              <Image
                src="/demo_1.gif"
                alt="PDF 翻译演示"
                width={720}
                height={480}
                className="rounded-xl shadow-xl border"
                unoptimized
              />
            </div>
          )}
        </div>

        {/* 功能介绍区块 */}
        <section id="features" className="max-w-5xl mx-auto mt-20 grid gap-8 md:grid-cols-3 text-center">
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">🧩</div>
            <h3 className="text-xl font-semibold mb-2">高度还原格式</h3>
            <p className="text-gray-600">智能解析排版，保留原始图片与字体样式，翻译结果几乎一致。</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold mb-2">数据本地处理</h3>
            <p className="text-gray-600">所有翻译操作均在本地执行，无需上传文件，确保隐私安全。</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-2">多语言支持</h3>
            <p className="text-gray-600">接入多种翻译引擎，支持中英互译及多语种文档翻译。</p>
          </div>
        </section>
      </main>
    </>
  )
}

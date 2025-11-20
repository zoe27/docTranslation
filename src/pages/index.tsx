// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Header from '../components/Header'  // 使用上面的新 Header

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [])

  return (
    <>
      <Head>
        <title>CraftTrans AI｜高保真 PDF 翻译工具</title>
        <meta
          name="description"
          content="CraftTrans AI：还原原始格式的 PDF 翻译工具，专业、快速、安全。"
        />
      </Head>

      <Header />

      <main className="min-h-screen pt-28 md:pt-32 px-6 pb-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            专业的 PDF 翻译工具
          </h1>

          {/* 保留的小胶囊：智能·高效·匠心（位置放在标题下，和谐居中显示） */}
          <div className="mt-4 flex justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 border border-blue-600/20 text-sm md:text-base">
              智能 · 高效 · 匠心
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mt-6 mb-12">
            高度还原格式、准确翻译、支持批量处理，提升跨境文档处理效率。
          </p>

          {/* 动图演示 */}
          {isClient && (
            <div className="flex justify-center">
              <Image
                src="/output_4.gif"
                alt="PDF 翻译演示"
                width={720}
                height={480}
                className="rounded-xl shadow-xl border"
                unoptimized
              />
            </div>
          )}
        </div>

        {/* 功能介绍 */}
        <section
          id="features"
          className="max-w-5xl mx-auto mt-20 grid gap-8 md:grid-cols-3 text-center"
        >
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">🧩</div>
            <h3 className="text-xl font-semibold mb-2">高度还原格式</h3>
            <p className="text-gray-600">
              智能解析排版，保留原始图片与字体样式，翻译结果几乎一致。
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold mb-2">数据本地处理</h3>
            <p className="text-gray-600">
              所有翻译操作均在本地执行，无需上传文件，确保隐私安全。
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-2">多语言支持</h3>
            <p className="text-gray-600">
              接入多种翻译引擎，支持中英互译及多语种文档翻译。
            </p>
          </div>
        </section>

        {/* 下面这些锚点仅作为示例，方便导航链接跳转 */}
        {/* <section id="pricing" className="max-w-5xl mx-auto mt-24 text-center text-gray-400">
          <p>（定价方案占位）</p>
        </section>
        <section id="download" className="max-w-5xl mx-auto mt-24 text-center text-gray-400">
          <p>（下载占位）</p>
        </section>
        <section id="contact" className="max-w-5xl mx-auto mt-24 text-center text-gray-400">
          <p>（联系我们占位）</p>
        </section>
        <section id="try" className="max-w-5xl mx-auto mt-24 text-center text-gray-400">
          <p>（在线体验占位）</p>
        </section> */}
      </main>
    </>
  )
}

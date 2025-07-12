import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>PDF Translation - 高保真文档翻译工具</title>
        <meta name="description" content="还原原始格式的 PDF 翻译工具，专业、快速、安全。" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight max-w-3xl">
          专业的 PDF 翻译工具
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
          高度还原格式、准确翻译、支持批量处理，提升跨境文档处理效率。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
      </main>
    </>
  )
}

 

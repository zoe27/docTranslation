import Head from 'next/head'
import Header from '../components/Header'

export default function DownloadPage() {
  return (
    <>
      <Head>
        <title>下载 PDF Translation 客户端</title>
        <meta name="description" content="官方客户端下载页面，安全、稳定、本地运行的 PDF 高保真翻译工具。" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Header />

      <main className="min-h-screen px-6 pt-32 pb-24 bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900">
        {/* 标题 */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">客户端下载中心</h1>
          <p className="text-gray-600 text-base md:text-lg">
            PDF Translation 是一款本地运行、高度还原格式的 PDF 翻译工具，点击下方按钮获取最新版客户端。
          </p>
        </div>

        {/* 下载区域 */}
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 text-center mb-12">
          <h2 className="text-2xl font-semibold mb-2">最新版本下载</h2>
          <p className="text-gray-600 mb-4">适用于 Windows 系统，免安装绿色版，文件大小约 200MB</p>

          <a
            href="https://share.weiyun.com/VyEJo0PL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            ⬇️ 点击下载 ParagraphEditor.zip
          </a>

          <p className="text-sm text-gray-500 mt-3">版本号：internal-20250724</p>
          <p className="text-sm text-gray-400 mt-1">文件来源：官方 GitHub Release</p>
        </div>

        {/* 安全说明 */}
        <div className="max-w-3xl mx-auto text-sm text-gray-700 leading-relaxed space-y-4">
          <p>📦 本工具为绿色免安装版本，下载后解压即可使用，无需管理员权限。</p>
          <p>🔒 所有功能完全本地运行，不上传 PDF 到服务器，确保隐私安全。</p>
          <p>✅ 下载链接来自官方 GitHub，安全可验证，如遇系统提示，请选择“保留”或“信任”。</p>
          <p>📧 如有任何下载失败、运行问题，欢迎通过 <a href="/contact" className="text-blue-600 underline">联系我们</a> 获取支持。</p>
        </div>
      </main>
    </>
  )
}

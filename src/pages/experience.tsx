import Head from 'next/head'
import Script from 'next/script'

export default function Experience() {
  return (
    <>
      <Head>
        <title>PDF 段落翻译体验 | 在线体验</title>
        <meta
          name="description"
          content="上传 PDF 文件，自动提取并翻译段落，AI 驱动高效翻译体验。"
        />
      </Head>

      {/* ✅ 安全加载外部脚本，不触发 CSP 限制 */}
      <Script
        src="/pdf-experience.js"
        strategy="afterInteractive" // 页面渲染后加载，不阻塞
        onLoad={() => console.log('✅ pdf-experience.js 已成功加载并执行')}
      />

      <main className="min-h-screen flex flex-col items-center justify-start bg-gray-50 py-12">
        <section
          id="pdf-experience"
          className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8"
        >
          <header className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              PDF 段落翻译体验
            </h1>
            <p className="text-gray-500">
              上传 PDF 文件，我们将自动提取并翻译其中的段落。
            </p>
          </header>

          <div className="flex flex-col items-center space-y-4">
            <input
              type="file"
              id="file-input"
              accept="application/pdf"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            <button
              id="upload-btn"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              上传并翻译
            </button>
          </div>

          <div id="progress" className="mt-6 text-gray-600 text-center hidden">
            正在处理，请稍候……
          </div>

          <div
            id="result"
            className="mt-6 text-gray-800 whitespace-pre-wrap"
          ></div>

          <dialog
            id="edit-dialog"
            className="rounded-lg shadow-xl p-4 max-w-2xl"
          >
            <h3 className="text-lg font-semibold mb-2">编辑翻译结果</h3>
            <textarea
              id="edit-text"
              className="w-full h-60 border border-gray-300 rounded-lg p-2"
            ></textarea>
            <div className="mt-4 text-right">
              <button
                id="save-btn"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                保存
              </button>
            </div>
          </dialog>
        </section>
      </main>
    </>
  )
}

// pages/download.tsx
import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'


const faqs = [
  {
    question: '如何使用该工具翻译一个 PDF？',
    answer: '下载后先解压，然后双击打开即可运行，开箱即用。',
  },
  {
    question: '本地运行安全吗？',
    answer: '本工具完全本地运行，无需上传 PDF 文件到远端服务器，数据安全，无需担心内容泄露。',
  },
  {
    question: '支持哪些语言？',
    answer: '目前支持英文到中文，后续会支持更多。',
  },
  {
    question: '翻译是否收费？',
    answer: '目前为内测阶段，后续可能会收费（敬请期待）。',
  },
  {
    question: '是否有团队版？',
    answer: '目前是内测版本，团队版将于后续开放申请。',
  },
]

export default function DownloadPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <Head>
        <title>下载客户端 | PDF Translation</title>
        <meta name="description" content="下载 PDF Translation 客户端，了解常见问题与使用方法。" />
      </Head>

      <Header />

      <div className="min-h-screen bg-white text-gray-900 px-6 pt-32 pb-12">
      {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">下载客户端 & 常见问题</h1>
          <p className="text-lg text-gray-600">
            快速开始翻译你的 PDF 文档，保持格式完整，隐私无忧。
          </p>
        </div>

        {/* Download Section */}
        <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-2xl shadow-md mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">客户端下载</h2>
          <p className="mb-4 text-gray-700">适用于 Windows 系统，目前为内测版本</p>
          <a
            href="https://github.com/zoe27/doc2doc/releases/download/internal-20250724/ParagraphEditor.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            ⬇️ 下载 ParagraphEditor.zip
          </a>
          <p className="mt-4 text-sm text-gray-500">版本：internal-20250724</p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">常见问题</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl shadow-sm"
              >
                <button
                  className="w-full px-5 py-4 text-left font-medium text-gray-800 focus:outline-none hover:bg-gray-50 flex justify-between items-center"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {faq.question}
                  <span>{openIndex === index ? '▲' : '▼'}</span>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-4 text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

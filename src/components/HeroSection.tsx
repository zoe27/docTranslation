export default function HeroSection() {
  return (
    <section className="w-full py-24 text-center px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          保留格式的 PDF 翻译工具
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          一键翻译 PDF 文档，自动识别并还原原始排版结构。支持多语言，适合合同、报告等正式文档。
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 text-white bg-black rounded-lg text-lg hover:opacity-90"
          >
            下载应用
          </a>
          <a
            href="/pricing"
            className="px-6 py-3 text-black border border-gray-300 rounded-lg text-lg hover:bg-gray-100"
          >
            查看价格
          </a>
        </div>
      </div>
    </section>
  )
}

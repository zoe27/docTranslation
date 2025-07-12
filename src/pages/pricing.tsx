import Head from 'next/head'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>定价方案 - PDF Translation</title>
        <meta name="description" content="选择适合你的翻译套餐，支持点数购买和订阅服务。" />
      </Head>
      <main className="min-h-screen px-6 py-24 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">选择适合你的套餐</h1>
          <p className="text-lg text-gray-600 mb-12">
            所有套餐均支持高保真 PDF 翻译，保留原始排版结构。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 免费试用套餐 */}
            <div className="border p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">免费试用</h2>
              <p className="text-gray-600 mb-4">适合首次体验用户</p>
              <p className="text-3xl font-bold mb-4">¥0</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>✅ 3页 / 1000字额度</li>
                <li>✅ 支持全部语言</li>
                <li>✅ 无需绑定支付</li>
              </ul>
              <button className="w-full px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
                已包含
              </button>
            </div>

            {/* 点数套餐 */}
            <div className="border p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">标准点数包</h2>
              <p className="text-gray-600 mb-4">适合日常文件翻译</p>
              <p className="text-3xl font-bold mb-4">¥19</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>✅ 10000 字额度</li>
                <li>✅ 永不过期</li>
                <li>✅ 优先服务</li>
              </ul>
              <button className="w-full px-4 py-2 bg-black text-white rounded hover:opacity-90">
                立即购买
              </button>
            </div>

            {/* 月订阅套餐 */}
            <div className="border p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">月度订阅</h2>
              <p className="text-gray-600 mb-4">适合高频使用用户</p>
              <p className="text-3xl font-bold mb-4">¥39/月</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>✅ 每月 30000 字额度</li>
                <li>✅ 自动续费</li>
                <li>✅ 免费升级功能</li>
              </ul>
              <button className="w-full px-4 py-2 bg-black text-white rounded hover:opacity-90">
                订阅
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

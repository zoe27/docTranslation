import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>联系我们 | PDF Translation</title>
        <meta name="description" content="提交反馈、获取安装包或寻求技术支持，欢迎通过以下方式联系我们。" />
      </Head>

      <Header />

      <main className="min-h-screen px-6 pt-32 pb-24 bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900">
        {/* 标题区 */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">联系我们</h1>
          <p className="text-base md:text-lg text-gray-600">
            提交反馈、获取安装包或寻求技术支持，欢迎通过以下方式联系我们。
          </p>
        </div>

        {/* 联系方式简洁卡片 */}
        <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2 mb-16">
          {/* 邮箱 */}
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <div className="text-2xl mb-1">📧</div>
            <div className="text-sm text-gray-600">zoe27@126.com</div>
          </div>

          {/* 微信 */}
          <div className="bg-white rounded-xl p-4 shadow text-center">
            <div className="text-2xl mb-1">💬</div>
            <div className="text-sm text-gray-600 mb-2">微信客服</div>
            <div className="flex justify-center">
              <Image
                src="/WechatIMG38.jpg"
                alt="微信二维码"
                width={80}
                height={80}
                className="rounded border"
              />
            </div>
          </div>
        </div>

        {/* 输入框反馈表单 */}
        <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md text-center mb-20">
          <h3 className="text-2xl font-semibold mb-4">快速反馈</h3>
          <p className="text-gray-600 mb-6">输入你的建议、问题或 Bug，我们会尽快处理。</p>

          <form
            action="https://formsubmit.co/contact@pdftrans.app"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="PDFTranslation 用户反馈" />
            <input type="hidden" name="_template" value="box" />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="请输入反馈内容..."
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              🚀 提交反馈
            </button>
          </form>
        </div>

        {/* 简要说明区 */}
        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2 text-gray-800">
          <div className="flex items-start gap-3">
            <div className="text-2xl">📌</div>
            <div>
              <h4 className="font-semibold mb-1">产品反馈</h4>
              <p className="text-sm">欢迎提出功能建议、翻译准确性改进或界面优化意见。</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-2xl">🛠</div>
            <div>
              <h4 className="font-semibold mb-1">技术支持</h4>
              <p className="text-sm">如遇使用问题，请通过微信或邮箱联系我们，我们会尽快处理。</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

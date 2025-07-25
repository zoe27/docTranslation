import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* ✅ 设置全局页面 Head，默认 title 和描述 */}
      <Head>
        <title>PDF Translation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="高保真还原格式的 PDF 文档翻译工具" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <script src="//code.tidio.co/wbkzxxrbm3ym4auqw0vjdxec3csyierl.js" async></script>

      {/* ✅ 包裹 Layout（可扩展导航、footer） */}
      <Component {...pageProps} />
    </>
  )
}

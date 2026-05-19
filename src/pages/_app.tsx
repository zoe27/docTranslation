import '@/styles/globals.css'
import '../styles/pdf-experience.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'  // 👈 新增
import { Analytics } from "@vercel/analytics/next"


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

      <Script id="baidu-analytics" strategy="afterInteractive">
        {`
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?f540d00118a713b3aa3454f1155ded86";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
          })();
        `}
      </Script>

      {/* ✅ 包裹 Layout（可扩展导航、footer） */}
      <Component {...pageProps} />
      {/* ✅ 全局挂载 SpeedInsights */}
      <SpeedInsights />
      <Analytics />
    </>
  )
}

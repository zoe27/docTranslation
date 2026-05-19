import '@/styles/globals.css'
import '../styles/pdf-experience.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import { LocaleProvider } from '@/contexts/LocaleContext'
import { DEFAULT_LOCALE, getTranslations } from '@/lib/i18n'

const defaultMeta = getTranslations(DEFAULT_LOCALE).meta

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <Head>
        <title>{defaultMeta.siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={defaultMeta.siteDescription} />
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

      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </LocaleProvider>
  )
}

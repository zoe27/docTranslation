import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, type ReactNode } from 'react'
import SiteLayout from '@/components/layout/SiteLayout'
import Button from '@/components/ui/Button'
import { useLocale } from '@/contexts/LocaleContext'
import { EXPERIENCE_URL, FORMSUBMIT_URL, SITE_URL } from '@/lib/site'

function Card({
  title,
  children,
  className = '',
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow hover:shadow-lg transition ${className}`}>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{children}</p>
    </div>
  )
}

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const { locale, t } = useLocale()

  useEffect(() => setIsClient(true), [])

  const { home: h, meta } = t

  return (
    <>
      <Head>
        <title>{meta.homeTitle}</title>
        <meta name="description" content={meta.homeDescription} />
        <meta property="og:title" content={meta.homeTitle} />
        <meta property="og:description" content={meta.homeDescription} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/logo_v2.png`} />
        <meta property="og:locale" content={locale === 'zh' ? 'zh_CN' : 'en_US'} />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="zh-CN" href={SITE_URL} />
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
      </Head>

      <SiteLayout>
        <div className="px-6 pb-20">
          <section className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-blue-700 mb-3">{h.mvpBadge}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              {h.heroTitle}
            </h1>
            <p className="text-lg text-gray-500 mt-2">{h.heroSubtitle}</p>
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">{h.heroDesc}</p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button href={EXPERIENCE_URL} target="_blank" rel="noopener noreferrer" variant="primary">
                {h.tryOnline}
              </Button>
              <Button href="/#how-it-works" variant="secondary">
                {h.howItWorks}
              </Button>
            </div>

            <p className="mt-4 text-xs text-gray-500 max-w-lg mx-auto">{h.tempUrlHint}</p>

            {isClient && (
              <div className="mt-12 flex justify-center">
                <Image
                  src="/output_4.gif"
                  alt={h.demoAlt}
                  width={720}
                  height={480}
                  className="rounded-xl shadow-xl border border-gray-200 max-w-full h-auto"
                  unoptimized
                />
              </div>
            )}
          </section>

          <section id="features" className="max-w-5xl mx-auto mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">{h.featuresTitle}</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">{h.featuresSubtitle}</p>
            <div className="grid gap-8 md:grid-cols-3">
              {h.features.map((f) => (
                <Card key={f.title} title={f.title}>
                  {f.description}
                </Card>
              ))}
            </div>
          </section>

          <section id="how-it-works" className="max-w-5xl mx-auto mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">{h.howTitle}</h2>
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {h.steps.map((s) => (
                <li key={s.step} className="bg-white rounded-xl p-6 shadow text-center">
                  <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold mb-3">
                    {s.step}
                  </span>
                  <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="use-cases" className="max-w-5xl mx-auto mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">{h.useCasesTitle}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {h.useCases.map((u) => (
                <Card key={u.title} title={u.title}>
                  {u.description}
                </Card>
              ))}
            </div>
          </section>

          <section id="capabilities" className="max-w-4xl mx-auto mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">{h.capabilitiesTitle}</h2>
            <p className="text-center text-gray-600 mb-10 text-sm max-w-2xl mx-auto">{h.capabilitiesSubtitle}</p>
            <ul className="space-y-4">
              {h.capabilities.map((item) => (
                <li key={item.title} className="bg-white rounded-xl p-6 shadow border border-gray-50">
                  <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.description}</p>
                  <p className="text-xs text-gray-500 mt-3 leading-relaxed">{item.note}</p>
                </li>
              ))}
            </ul>

            <p className="text-center text-sm text-gray-600 mt-8">
              {h.capabilitiesFooter}{' '}
              <a href="/contact" className="text-blue-600 font-medium hover:underline">
                {h.ctaContact}
              </a>
            </p>

            <div className="mt-8 bg-white rounded-xl p-6 shadow text-center border border-gray-50">
              <h3 className="font-semibold text-gray-900 mb-2">{h.notifyTitle}</h3>
              <p className="text-sm text-gray-600 mb-4">{h.notifyDesc}</p>
              <form
                action={FORMSUBMIT_URL}
                method="POST"
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Yibelin launch notify request" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={h.emailPlaceholder}
                  aria-label={h.emailAria}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition min-h-[44px]"
                >
                  {h.notifySubmit}
                </button>
              </form>
            </div>
          </section>

          <section id="faq" className="max-w-3xl mx-auto mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">{h.faqTitle}</h2>
            <dl className="space-y-6">
              {h.faq.map((item) => (
                <div key={item.q} className="bg-white rounded-xl p-6 shadow">
                  <dt className="font-semibold text-gray-900 mb-2">{item.q}</dt>
                  <dd className="text-sm text-gray-600 leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="max-w-3xl mx-auto mt-24 text-center bg-white rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{h.ctaTitle}</h2>
            <p className="text-gray-600 mb-6">{h.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href={EXPERIENCE_URL} target="_blank" rel="noopener noreferrer">
                {h.ctaTry}
              </Button>
              <Button href="/contact" variant="secondary">
                {h.ctaContact}
              </Button>
            </div>
          </section>
        </div>
      </SiteLayout>
    </>
  )
}

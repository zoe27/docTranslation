import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import SiteLayout from '@/components/layout/SiteLayout'
import { useLocale } from '@/contexts/LocaleContext'
import { CONTACT_EMAIL, EXPERIENCE_URL, FORMSUBMIT_URL, SITE_URL } from '@/lib/site'

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default function ContactPage() {
  const { locale, t } = useLocale()
  const { contact: c, meta } = t
  const [copied, setCopied] = useState(false)
  const [topic, setTopic] = useState<'feedback' | 'support' | 'partnership'>('feedback')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`
    }
  }

  const topics = [
    { id: 'feedback' as const, label: c.topicFeedback },
    { id: 'support' as const, label: c.topicSupport },
    { id: 'partnership' as const, label: c.topicPartnership },
  ]

  return (
    <>
      <Head>
        <title>{meta.contactTitle}</title>
        <meta name="description" content={meta.contactDescription} />
        <meta property="og:title" content={meta.contactTitle} />
        <meta property="og:description" content={meta.contactDescription} />
        <meta property="og:locale" content={locale === 'zh' ? 'zh_CN' : 'en_US'} />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
      </Head>

      <SiteLayout>
        <div className="px-6 pb-24 text-gray-900">
          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-full">
              {c.heroBadge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{c.title}</h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">{c.subtitle}</p>
          </div>

          {/* Main grid */}
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-5 lg:gap-10">
            {/* Channels */}
            <aside className="lg:col-span-2 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 px-1">{c.channelsTitle}</h2>
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <MailIcon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-gray-900">{c.email}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{c.emailHint}</p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="inline-block mt-2 text-blue-600 font-medium hover:underline break-all"
                      >
                        {CONTACT_EMAIL}
                      </a>
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="mt-3 text-sm px-3 py-1.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                      >
                        {copied ? c.copiedEmail : c.copyEmail}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                      <ChatIcon />
                    </span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{c.wechat}</p>
                      <p className="text-sm text-gray-500 mt-0.5 mb-4">{c.wechatHint}</p>
                      <div className="inline-block p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <Image
                          src="/WechatIMG38.jpg"
                          alt={c.wechatAlt}
                          width={160}
                          height={160}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-blue-50/50">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 mt-0.5">
                      <ClockIcon />
                    </span>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{c.responseTitle}</p>
                      <p className="text-sm text-gray-600 mt-1">{c.responseDesc}</p>
                    </div>
                  </div>
                  <a
                    href={EXPERIENCE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    {c.tryExperience}
                  </a>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8 h-full">
                <h2 className="text-2xl font-semibold text-gray-900 mb-1">{c.formTitle}</h2>
                <p className="text-sm text-gray-600 mb-6">{c.formDesc}</p>

                <form
                  action={FORMSUBMIT_URL}
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Yibelin user feedback" />
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="topic" value={topics.find((x) => x.id === topic)?.label ?? topic} />

                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-900 mb-2">
                      {c.topicLabel}
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setTopic(item.id)}
                          className={`px-4 py-2 rounded-xl text-sm font-medium border transition min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${
                            topic === item.id
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-900 mb-1.5">
                      {c.emailOptional}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="contact_email"
                      placeholder={c.emailOptionalPlaceholder}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1.5">
                      {c.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder={c.messagePlaceholder}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 resize-y min-h-[140px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-xl hover:bg-blue-700 transition font-medium min-h-[48px] shadow-sm hover:shadow"
                  >
                    {c.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="max-w-6xl mx-auto mt-16 grid gap-6 md:grid-cols-3">
            {[
              { title: c.productFeedbackTitle, desc: c.productFeedbackDesc, icon: '💡' },
              { title: c.partnershipTitle, desc: c.partnershipDesc, icon: '🤝' },
              { title: c.mvpCardTitle, desc: c.mvpCardDesc, icon: '🚀' },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 shadow border border-gray-50 hover:shadow-md transition"
              >
                <span className="text-2xl mb-3 block" aria-hidden>
                  {card.icon}
                </span>
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SiteLayout>
    </>
  )
}

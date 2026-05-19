export type Locale = 'zh' | 'en'

export const DEFAULT_LOCALE: Locale = 'zh'
export const LOCALE_STORAGE_KEY = 'yibelin-locale'

export type FeatureItem = { title: string; description: string }
export type StepItem = { step: string; title: string; description: string }
export type CapabilityItem = { title: string; description: string; note: string }
export type FaqItem = { q: string; a: string }

export type Translations = {
  meta: {
    siteTitle: string
    siteDescription: string
    homeTitle: string
    homeDescription: string
    contactTitle: string
    contactDescription: string
  }
  nav: {
    features: string
    howItWorks: string
    contact: string
    tryOnline: string
    openMenu: string
  }
  lang: {
    switchLabel: string
    zh: string
    en: string
    zhFull: string
    enFull: string
  }
  footer: {
    tempUrlNote: string
    mvpNote: string
    copyright: string
  }
  home: {
    mvpBadge: string
    heroTitle: string
    heroSubtitle: string
    heroDesc: string
    tryOnline: string
    howItWorks: string
    tempUrlHint: string
    demoAlt: string
    featuresTitle: string
    featuresSubtitle: string
    features: FeatureItem[]
    howTitle: string
    steps: StepItem[]
    useCasesTitle: string
    useCases: FeatureItem[]
    capabilitiesTitle: string
    capabilitiesSubtitle: string
    capabilities: CapabilityItem[]
    capabilitiesFooter: string
    notifyTitle: string
    notifyDesc: string
    emailPlaceholder: string
    emailAria: string
    notifySubmit: string
    notifySubmitting: string
    notifySuccess: string
    notifyError: string
    notifyErrorConfig: string
    faqTitle: string
    faq: FaqItem[]
    ctaTitle: string
    ctaDesc: string
    ctaTry: string
    ctaContact: string
  }
  contact: {
    heroBadge: string
    title: string
    subtitle: string
    channelsTitle: string
    email: string
    emailHint: string
    copyEmail: string
    copiedEmail: string
    wechat: string
    wechatHint: string
    wechatAlt: string
    responseTitle: string
    responseDesc: string
    tryExperience: string
    formTitle: string
    formDesc: string
    topicLabel: string
    topicFeedback: string
    topicSupport: string
    topicPartnership: string
    emailOptional: string
    emailOptionalPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submit: string
    submitting: string
    submitSuccess: string
    submitError: string
    submitErrorConfig: string
    productFeedbackTitle: string
    productFeedbackDesc: string
    partnershipTitle: string
    partnershipDesc: string
    mvpCardTitle: string
    mvpCardDesc: string
  }
}

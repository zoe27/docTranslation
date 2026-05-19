import type { Translations } from '../types'

const en: Translations = {
  meta: {
    siteTitle: 'Yibelin | Online PDF Translation with Layout Preservation',
    siteDescription:
      'Translate PDFs in your browser while preserving layout. Public MVP — try online, no install. 高保真 PDF 在线翻译。',
    homeTitle: 'Yibelin | Online PDF Translation with Layout Preservation',
    homeDescription:
      'Upload PDFs, translate paragraph by paragraph, and keep layout close to the original. Public MVP — try free online.',
    contactTitle: 'Contact Yibelin | Support & Feedback',
    contactDescription: 'Product feedback or technical support during our public MVP.',
  },
  nav: {
    features: 'Features',
    howItWorks: 'How it works',
    contact: 'Contact',
    tryOnline: 'Try online',
    openMenu: 'Open menu',
  },
  lang: {
    switchLabel: 'Language',
    zh: '中文',
    en: 'EN',
    zhFull: '简体中文',
    enFull: 'English',
  },
  footer: {
    tempUrlNote:
      'Web experience uses a temporary URL while the official domain is being registered.',
    mvpNote: 'Public MVP — features and pricing may change.',
    copyright: 'All rights reserved.',
  },
  home: {
    mvpBadge: 'Public MVP',
    heroTitle: 'Translate PDFs without losing layout',
    heroSubtitle: 'Yibelin · High-fidelity online PDF translation',
    heroDesc:
      'Upload a PDF in your browser, translate paragraph by paragraph, and keep structure close to the original — for contracts, papers, and business documents.',
    tryOnline: 'Try online free',
    howItWorks: 'How it works',
    tempUrlHint:
      'Official domain registration in progress; the experience uses a temporary URL. Features and rules may change during MVP.',
    demoAlt: 'Yibelin PDF translation demo',
    featuresTitle: 'Core capabilities',
    featuresSubtitle: 'Everything below reflects what the current web experience supports.',
    features: [
      {
        title: 'Layout-aware translation',
        description:
          'Parses PDF structure to preserve paragraphs, images, and formatting so translated documents stay readable.',
      },
      {
        title: 'Paragraph-level editing',
        description:
          'Review and edit translations in context. Bilingual view helps you verify accuracy before export.',
      },
      {
        title: 'Multiple languages',
        description:
          'Translate between English, Chinese, Japanese, and more — choose source and target languages in the web app.',
      },
    ],
    howTitle: 'How it works',
    steps: [
      {
        step: '1',
        title: 'Upload PDF',
        description: 'Open the online experience and upload your document in the browser.',
      },
      {
        step: '2',
        title: 'Choose languages',
        description: 'Select source and target languages, then start translation.',
      },
      {
        step: '3',
        title: 'Review & edit',
        description: 'Edit paragraph translations inline and compare with the original layout.',
      },
      {
        step: '4',
        title: 'Export',
        description: 'Download the translated PDF when you are satisfied with the result.',
      },
    ],
    useCasesTitle: 'Use cases',
    useCases: [
      {
        title: 'Contracts & legal',
        description: 'Cross-border agreements and compliance documents with structure intact.',
      },
      {
        title: 'Academic papers',
        description: 'Research PDFs where headings, figures, and references must stay in place.',
      },
      {
        title: 'Trade & operations',
        description: 'Product specs, invoices, and supplier documents for global teams.',
      },
      {
        title: 'Technical manuals',
        description: 'Engineering and product documentation that relies on precise layout.',
      },
    ],
    capabilitiesTitle: 'What you can use today',
    capabilitiesSubtitle:
      'Available in our public MVP. Details and limits follow the live web experience.',
    capabilities: [
      {
        title: 'Online PDF translation',
        description:
          'Open the web experience in your browser: upload a PDF, translate paragraph by paragraph, review against the original layout, and export when ready.',
        note: 'Public MVP. The entry URL is temporary; we will update this site when the official domain is live.',
      },
      {
        title: 'Layout-aware editing',
        description:
          'We parse document structure to keep paragraphs, images, and formatting readable. Edit translations inline before export.',
        note: 'Supported languages and any page limits are shown in the web app.',
      },
      {
        title: 'Public MVP trial',
        description:
          'No install required — use your browser. Features and rules may change; formal pricing has not been announced.',
        note: 'Trial terms appear inside the web app when you open it.',
      },
    ],
    capabilitiesFooter:
      'We are still improving the product during MVP. If you have suggestions or run into issues, we would love to hear from you.',
    notifyTitle: 'Product updates',
    notifyDesc: 'Leave your email and we will notify you about important product news.',
    emailPlaceholder: 'you@example.com',
    emailAria: 'Email for launch notification',
    notifySubmit: 'Notify me',
    notifySubmitting: 'Submitting…',
    notifySuccess: 'Thanks — you are on the list.',
    notifyError: 'Could not submit. Try again or email us at',
    notifyErrorConfig: 'Form service is not configured. Please email us at',
    faqTitle: 'FAQ',
    faq: [
      {
        q: 'Is my PDF uploaded to a server?',
        a: 'Yes. The current online experience uploads your PDF to our servers so we can parse layout and run translation. We are exploring local-only processing for a future release.',
      },
      {
        q: 'Is Yibelin officially launched?',
        a: 'We are in a public MVP phase. Features and rules may change; this is not yet a final commercial release.',
      },
      {
        q: 'What does it cost?',
        a: 'Formal pricing has not been announced. Any limits shown in the web app apply to the current MVP and may change.',
      },
      {
        q: 'Do I need to install software?',
        a: 'No installation is required — use the online experience in your browser.',
      },
      {
        q: 'Why is the experience link temporary?',
        a: 'While the official domain is being registered, we provide a temporary entry point linked from this site. We will update this page when the permanent URL is live.',
      },
      {
        q: 'How can I give feedback?',
        a: 'Use the contact page to send suggestions or report issues. Your feedback helps us improve the product.',
      },
    ],
    ctaTitle: 'Ready to try Yibelin?',
    ctaDesc: 'Open the online experience in a new tab, or reach out if you have questions.',
    ctaTry: 'Start online experience',
    ctaContact: 'Contact us',
  },
  contact: {
    heroBadge: 'We are here to help',
    title: 'Contact us',
    subtitle:
      'Product feedback or technical questions — during public MVP, every message helps us improve.',
    channelsTitle: 'Channels',
    email: 'Email',
    emailHint: 'Best for detailed questions and written follow-up',
    copyEmail: 'Copy email',
    copiedEmail: 'Copied',
    wechat: 'WeChat',
    wechatHint: 'Scan to chat — great for quick questions and screenshots',
    wechatAlt: 'Yibelin WeChat QR code',
    responseTitle: 'Response time',
    responseDesc: 'We usually reply within 1–2 business days during MVP (holidays may take longer).',
    tryExperience: 'Open online experience →',
    formTitle: 'Send feedback',
    formDesc: 'Pick a topic and share details. Add your email if you would like a reply.',
    topicLabel: 'Topic',
    topicFeedback: 'Product idea',
    topicSupport: 'Technical support',
    topicPartnership: 'Partnership',
    emailOptional: 'Your email (optional)',
    emailOptionalPlaceholder: 'So we can reply to you',
    messageLabel: 'Details',
    messagePlaceholder: 'Describe your issue, idea, or partnership needs...',
    submit: 'Submit feedback',
    submitting: 'Submitting…',
    submitSuccess: 'Thanks — we received your message and will review it soon.',
    submitError: 'Could not submit. Try again or email us at',
    submitErrorConfig: 'Form service is not configured. Please email us at',
    productFeedbackTitle: 'Product feedback',
    productFeedbackDesc: 'Features, translation quality, UX — your input sets our priorities.',
    partnershipTitle: 'Partnership & volume',
    partnershipDesc: 'Batch usage, integrations, or distribution — tell us about your use case.',
    mvpCardTitle: 'Public MVP',
    mvpCardDesc: 'Yibelin is in MVP. Features and rules may change; see the live web app for current limits.',
  },
}

export default en

import type { Translations } from '../types'

const zh: Translations = {
  meta: {
    siteTitle: 'Yibelin | 高保真 PDF 在线翻译',
    siteDescription:
      'Yibelin 在浏览器中翻译 PDF 并尽量保留版式。公测 MVP，无需安装。Online PDF translation with layout preservation.',
    homeTitle: 'Yibelin | 高保真 PDF 在线翻译',
    homeDescription:
      '在浏览器中上传 PDF、按段落翻译并保留版式，适用于合同、论文与商务文档。公测 MVP，可免费在线体验。',
    contactTitle: '联系 Yibelin | 反馈与支持',
    contactDescription: '产品反馈或技术支持。Yibelin 公测阶段，欢迎留言。',
  },
  nav: {
    features: '功能介绍',
    howItWorks: '如何使用',
    contact: '联系我们',
    tryOnline: '在线体验',
    openMenu: '打开菜单',
  },
  lang: {
    switchLabel: '语言',
    zh: '中文',
    en: 'EN',
    zhFull: '简体中文',
    enFull: 'English',
  },
  footer: {
    tempUrlNote: '在线体验为临时入口，正式域名备案中。',
    mvpNote: '当前为公测 MVP，功能与规则可能调整。',
    copyright: '保留所有权利。',
  },
  home: {
    mvpBadge: '公测 MVP',
    heroTitle: '翻译 PDF，尽量保留原版式',
    heroSubtitle: 'Yibelin · 高保真 PDF 在线翻译',
    heroDesc:
      '在浏览器中上传 PDF，按段落翻译并对照原文排版，适用于合同、论文与各类商务文档。',
    tryOnline: '免费在线体验',
    howItWorks: '了解如何使用',
    tempUrlHint:
      '正式域名备案中，体验入口为临时地址；功能与规则可能在 MVP 阶段调整。',
    demoAlt: 'Yibelin PDF 翻译演示',
    featuresTitle: '核心能力',
    featuresSubtitle: '以下内容对应当前在线体验站已支持的能力。',
    features: [
      {
        title: '版式感知翻译',
        description: '解析 PDF 结构，保留段落、图片与排版，译后文档仍易读。',
      },
      {
        title: '段落级编辑',
        description: '在上下文中审校译文，支持双语对照，导出前可逐段修改。',
      },
      {
        title: '多语言互译',
        description: '体验站支持英、中、日等多种语言，可在页面中选择源语言与目标语言。',
      },
    ],
    howTitle: '如何使用',
    steps: [
      { step: '1', title: '上传 PDF', description: '打开在线体验，在浏览器中选择并上传文档。' },
      { step: '2', title: '选择语言', description: '设置源语言与目标语言，开始翻译。' },
      { step: '3', title: '审校编辑', description: '在线修改段落译文，对照原文版式检查。' },
      { step: '4', title: '导出文档', description: '确认无误后下载翻译后的 PDF。' },
    ],
    useCasesTitle: '适用场景',
    useCases: [
      { title: '合同与法务', description: '跨境协议、合规文件，需保持条款层级与版式。' },
      { title: '学术论文', description: '研究 PDF 需保留标题、图表与参考文献结构。' },
      { title: '外贸与运营', description: '产品说明、发票、供应商资料等跨国协作文档。' },
      { title: '技术手册', description: '工程与产品文档，对排版与术语一致性要求高。' },
    ],
    capabilitiesTitle: '当前产品能力',
    capabilitiesSubtitle: '以下为公测 MVP 阶段已提供的能力，具体规则以在线体验站内说明为准。',
    capabilities: [
      {
        title: '在线 PDF 翻译',
        description:
          '在浏览器中打开在线体验，上传 PDF，按段落翻译并对照原版式审校，满意后可导出译文文档。',
        note: '当前为公测 MVP；体验入口为临时地址，正式域名备案通过后会在本站更新。',
      },
      {
        title: '版式保留与段落编辑',
        description:
          '解析文档结构，尽量保持段落、图片与排版可读；支持在页面内修改译文，导出前可逐段确认。',
        note: '支持的语言与页数等限制，以体验站内提示为准。',
      },
      {
        title: '公测试用',
        description:
          '无需安装客户端，打开浏览器即可使用。功能与规则仍在迭代，尚未公布正式商业定价。',
        note: '试用条件以打开在线体验后的页面说明为准。',
      },
    ],
    capabilitiesFooter: '公测阶段功能会持续更新。如有产品建议或使用问题，欢迎反馈。',
    notifyTitle: '获取产品更新通知',
    notifyDesc: '留下邮箱，有重要产品更新时我们会通知你。',
    emailPlaceholder: 'your@email.com',
    emailAria: '接收上线通知的邮箱',
    notifySubmit: '订阅通知',
    faqTitle: '常见问题',
    faq: [
      {
        q: 'PDF 会上传到服务器吗？',
        a: '会。当前在线体验需将 PDF 上传至服务器以完成排版解析与翻译。我们重视文档安全，并计划探索本地直译方案（以实际上线为准）。',
      },
      {
        q: 'Yibelin 已经正式上线了吗？',
        a: '目前处于公测 MVP 阶段，功能与规则仍在完善，尚未作为正式商业版发布。请以体验站当前版本为准。',
      },
      {
        q: '如何收费？有免费额度吗？',
        a: '正式定价与免费规则尚未公布。体验站可能有试用限制，具体以打开在线体验后的提示为准。',
      },
      {
        q: '需要安装软件吗？',
        a: '目前仅需浏览器访问在线体验，无需安装客户端。',
      },
      {
        q: '为什么体验链接是临时的？',
        a: '正式域名备案中，本站提供临时入口。正式地址启用后会在本站更新。',
      },
      {
        q: '如何反馈问题或建议？',
        a: '请前往联系我们页面提交表单，或通过微信 / 邮箱联系。你的反馈会影响产品优先级。',
      },
    ],
    ctaTitle: '准备好体验 Yibelin？',
    ctaDesc: '在新标签页打开在线体验，或有疑问请联系我们。',
    ctaTry: '开始在线体验',
    ctaContact: '联系我们',
  },
  contact: {
    heroBadge: '我们随时倾听',
    title: '联系我们',
    subtitle: '产品反馈或技术问题——公测 MVP 阶段，你的每一条留言都会进入我们的产品排期参考。',
    channelsTitle: '联系渠道',
    email: '电子邮箱',
    emailHint: '适合详细问题描述与文件相关说明',
    copyEmail: '复制邮箱',
    copiedEmail: '已复制',
    wechat: '微信客服',
    wechatHint: '扫码添加微信，适合快速沟通与截图反馈',
    wechatAlt: 'Yibelin 微信客服二维码',
    responseTitle: '回复时间',
    responseDesc: '公测阶段我们通常会在 1–2 个工作日内回复（节假日可能顺延）。',
    tryExperience: '前往在线体验 →',
    formTitle: '提交反馈',
    formDesc: '选择反馈类型并描述详情，有留邮箱会便于我们回复你。',
    topicLabel: '反馈类型',
    topicFeedback: '产品建议',
    topicSupport: '技术支持',
    topicPartnership: '合作咨询',
    emailOptional: '你的邮箱（选填）',
    emailOptionalPlaceholder: '方便我们回复你',
    messageLabel: '详细描述',
    messagePlaceholder: '请描述问题、建议或合作需求…',
    submit: '提交反馈',
    productFeedbackTitle: '产品反馈',
    productFeedbackDesc: '功能想法、翻译质量、界面体验——直接影响迭代优先级。',
    partnershipTitle: '合作与批量',
    partnershipDesc: '批量翻译、企业集成或渠道合作，欢迎说明场景与规模。',
    mvpCardTitle: '公测说明',
    mvpCardDesc: 'Yibelin 处于 MVP 阶段，功能与规则可能调整；请以体验站当前能力为准。',
  },
}

export default zh

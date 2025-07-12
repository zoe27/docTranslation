# PDF Translation - 官网系统

一个支持注册登录、套餐购买、额度查看的官网平台，用于配合 PDF 翻译客户端工具。

## 📦 技术栈
- Next.js + TypeScript
- Tailwind CSS
- Supabase（Auth + DB）
- Stripe（支付集成）
- Vercel 免费托管

## 🚀 快速部署

# PDF Translation - 高保真文档翻译工具

一个专业的 PDF 文档翻译工具，具备高度格式还原、准确翻译、批量处理等特性。该项目包含官网介绍页、定价页、仪表盘页，并支持 Stripe 支付和 Supabase 用户管理。

## 📁 项目结构

```
docTranslation/
├── src/
│   ├── components/               # 可复用组件（HeroSection 等）
│   ├── lib/
│   │   └── supabase.ts           # Supabase 客户端初始化
│   ├── pages/                    # Next.js 路由页
│   │   ├── api/stripe/webhook.ts  # Stripe 支付回调接口
│   │   ├── _app.tsx              # 全局样式入口
│   │   ├── index.tsx            # 首页
│   │   ├── dashboard.tsx        # 用户仪表盘
│   │   └── pricing.tsx          # 收费页面
│   └── styles/
│       └── globals.css          # 全局 CSS（Tailwind 引入）
├── .env.example                 # 环境变量模板
├── next.config.js              # Next.js 配置（设置 appDir false）
├── package.json                # 依赖清单
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json               # TypeScript 配置（含别名 @/src）
└── README.md
```

## 🧱 依赖说明（主要依赖包）

```
next, react, stripe, micro, tailwindcss, typescript, @types/react, @types/node, @types/micro
```

## 🚀 快速部署（使用 Vercel）

### 1. 准备 GitHub 仓库

- 确保项目在仓库根目录（包含 package.json）
- 提交并 push 到 GitHub

### 2. Vercel 部署

- 登录 https://vercel.com
- 创建新项目，选择该 GitHub 仓库
- Framework Preset: `Next.js`
- Root Directory: `./`
- 一键 Deploy

部署后访问：`https://your-project-name.vercel.app`

### 3. 环境变量（可选）

在 Vercel 中设置环境变量：

```
SUPABASE_URL=
SUPABASE_ANON_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
JWT_SECRET=
```

### 4. 本地开发命令

```bash
npm install
npm run dev
npm run build
npm run start
```

## 🎨 页面效果

- 首页（Hero Section）
- Pricing（定价页）
- Dashboard（管理后台）

## 📌 说明

如需扩展其他功能（上传文档、展示翻译历史等），请继续开发 Dashboard 模块。

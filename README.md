# PDF Translation - 官网系统

一个支持注册登录、套餐购买、额度查看的官网平台，用于配合 PDF 翻译客户端工具。

## 📦 技术栈
- Next.js + TypeScript
- Tailwind CSS
- Supabase（Auth + DB）
- Stripe（支付集成）
- Vercel 免费托管

## 🚀 快速部署

1. Fork 本项目并上传至 GitHub
2. 登录 Vercel，连接该仓库，一键部署
3. 配置以下环境变量（参考 .env.example）：

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- STRIPE_SECRET_KEY
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- STRIPE_WEBHOOK_SECRET

4. 在 Supabase 控制台中建立表：
- users（自动）
- subscriptions（字段包含 user_id, plan_id, credits, expires_at）
- payments（可选记录历史）

5. Stripe 控制台中创建产品与价格（SKU）

## ✅ 页面路径

- `/`：官网首页
- `/pricing`：套餐页
- `/dashboard`：用户控制台

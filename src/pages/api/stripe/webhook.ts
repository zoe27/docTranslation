import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { buffer } from 'micro'

// ✅ Stripe 初始化（使用受支持的 API 版本）
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
})

export const config = {
  api: {
    bodyParser: false, // Stripe Webhook 必须禁用默认 body 解析
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed')
  }

  const sig = req.headers['stripe-signature'] as string
  if (!sig) {
    return res.status(400).send('Missing Stripe signature header')
  }

  let event: Stripe.Event

  try {
    const buf = await buffer(req)
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    console.error('❌ Stripe webhook error:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  // ✅ 处理支付成功事件
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const email = session.customer_email
    const metadata = session.metadata

    console.log('✅ Payment completed for:', email)
    console.log('🧾 Plan ID:', metadata?.plan_id)

    // TODO: 这里你可以连接 Supabase 更新用户额度
  }

  res.status(200).json({ received: true })
}

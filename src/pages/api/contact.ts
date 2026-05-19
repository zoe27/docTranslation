import type { NextApiRequest, NextApiResponse } from 'next'
import { CONTACT_EMAIL } from '@/lib/site'

type ContactBody = {
  type?: 'feedback' | 'notify'
  message?: string
  contact_email?: string
  email?: string
  topic?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const formId = process.env.FORMSPREE_FORM_ID
  if (!formId) {
    return res.status(503).json({
      error: 'email_not_configured',
      fallbackEmail: CONTACT_EMAIL,
    })
  }

  const body = req.body as ContactBody
  const type = body.type ?? 'feedback'

  let payload: Record<string, string>

  if (type === 'notify') {
    const subscriber = typeof body.email === 'string' ? body.email.trim() : ''
    if (!subscriber || !subscriber.includes('@')) {
      return res.status(400).json({ error: 'invalid_email' })
    }
    payload = {
      _subject: 'Yibelin launch notify request',
      email: subscriber,
      message: `Launch notify subscription: ${subscriber}`,
    }
  } else {
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    if (!message) {
      return res.status(400).json({ error: 'invalid_message' })
    }
    const contactEmail =
      typeof body.contact_email === 'string' ? body.contact_email.trim() : ''
    const topic = typeof body.topic === 'string' ? body.topic.trim() : ''
    payload = {
      _subject: topic ? `Yibelin feedback: ${topic}` : 'Yibelin user feedback',
      topic: topic || '—',
      contact_email: contactEmail || '(not provided)',
      email: contactEmail || 'noreply@yibelin.local',
      message: `Topic: ${topic || '—'}\nReply to: ${contactEmail || '(not provided)'}\n\n${message}`,
    }
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const detail = await response.text().catch(() => '')
      console.error('Formspree error:', response.status, detail)
      return res.status(502).json({ error: 'send_failed' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(502).json({ error: 'send_failed' })
  }
}

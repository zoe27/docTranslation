import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [subscription, setSubscription] = useState<any>(null)

  useEffect(() => {
    const getUserData = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        const { data, error } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('user_id', user.id)
          .single()

        if (!error) setSubscription(data)
      }
    }

    getUserData()
  }, [])

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>请先登录以查看控制台</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">用户控制台</h1>
        <div className="border p-6 rounded-lg shadow-sm bg-gray-50">
          <p className="mb-2"><strong>邮箱：</strong> {user.email}</p>
          <p className="mb-2"><strong>套餐：</strong> {subscription?.plan_id || '无'}</p>
          <p className="mb-2"><strong>额度剩余：</strong> {subscription?.credits ?? '—'} 字</p>
          <p className="mb-2"><strong>到期时间：</strong> {subscription?.expires_at ?? '—'}</p>
        </div>
      </div>
    </main>
  )
}

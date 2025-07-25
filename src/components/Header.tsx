import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between shadow bg-white fixed top-0 z-50">
      <div className="text-2xl font-bold text-blue-700">PDF Translation</div>
      <nav className="space-x-6 hidden md:block">
        <Link href="/" className="text-gray-700 hover:text-blue-600">功能介绍</Link>
        <Link href="/pricing" className="text-gray-700 hover:text-blue-600">定价方案</Link>
        <Link href="/download" className="text-gray-700 hover:text-blue-600">下载</Link> {/* ✅ 新增 */}
      </nav>
      <div className="space-x-4">
        <Link href="/login" className="text-blue-600 font-medium hover:underline">登录</Link>
        <Link href="/signup" className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition">注册</Link>
      </div>
    </header>
  )
}

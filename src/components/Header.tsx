import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleNavClick = () => setOpen(false)

  return (
    <header className="w-full bg-white fixed top-0 z-50 shadow">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* 左侧：只显示 Logo 图标，大小与文字保持一致感 */}
        <Link href="/" onClick={handleNavClick} className="flex items-center">
          <Image
  src="/logo_v2.png"
  alt="CraftTrans AI Logo"
  width={160}        // 增大宽度
  height={48}        // 增大高度
  className="h-12 w-auto"  // 高度 48px，宽度自适应
  priority
/>

        </Link>

        {/* 桌面端导航 */}
        <nav className="space-x-6 hidden md:block">
          <Link href="/" className="text-gray-700 hover:text-blue-600">功能介绍</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600">定价方案</Link>
          <Link href="/download" className="text-gray-700 hover:text-blue-600">下载</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">联系我们</Link>
          <a
            href="http://106.53.66.116/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            在线体验
          </a>
        </nav>

        {/* 桌面端：登录/注册 */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-blue-600 font-medium hover:underline">
            登录
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            注册
          </Link>
        </div>

        {/* 移动端：汉堡按钮 */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">打开主菜单</span>
          {!open ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* 移动端抽屉菜单 */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 pt-0 border-t bg-white">
          <nav className="flex flex-col space-y-3 text-gray-800">
            <Link href="/" onClick={handleNavClick} className="py-2 hover:text-blue-600">
              功能介绍
            </Link>
            <Link href="/pricing" onClick={handleNavClick} className="py-2 hover:text-blue-600">
              定价方案
            </Link>
            <Link href="/download" onClick={handleNavClick} className="py-2 hover:text-blue-600">
              下载
            </Link>
            <Link href="/contact" onClick={handleNavClick} className="py-2 hover:text-blue-600">
              联系我们
            </Link>
            <a
              href="http://106.53.66.116/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 hover:text-blue-600"
              onClick={handleNavClick}
            >
              在线体验
            </a>

            <div className="h-px bg-gray-200 my-2" />

            <div className="flex items-center gap-3">
              <Link href="/login" onClick={handleNavClick} className="text-blue-600 font-medium hover:underline">
                登录
              </Link>
              <Link
                href="/signup"
                onClick={handleNavClick}
                className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                注册
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

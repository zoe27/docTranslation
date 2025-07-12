import Head from 'next/head'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>PDF Translation - 保留格式的专业翻译工具</title>
        <meta name="description" content="还原PDF排版结构的翻译工具，安全、高效、支持多语言。" />
      </Head>
      <main className="min-h-screen bg-white text-gray-800">
        <HeroSection />
      </main>
    </>
  )
}

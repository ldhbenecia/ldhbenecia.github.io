import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { MotionObserver } from '@/components/motion/MotionObserver'
import { profile } from '@/content/profile'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const SITE_URL = 'https://ldhbenecia.github.io'
const TITLE = '임동혁 — Backend Engineer'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: profile.summary,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: TITLE,
    description: profile.summary,
    locale: 'ko_KR',
  },
  twitter: { card: 'summary', title: TITLE, description: profile.summary },
}

export const viewport: Viewport = {
  themeColor: '#050608',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={geist.variable}>
      <head>
        {/* 페인트 전에 붙어야 진입 모션의 숨김 상태가 깜빡이지 않음 */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        {children}
        <MotionObserver />
      </body>
    </html>
  )
}

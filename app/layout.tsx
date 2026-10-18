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

// 저장한 선택이 없으면 시스템 설정을 따름
const THEME_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';d.dataset.theme=t}catch(e){d.dataset.theme='dark'}})()`

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
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050608' },
    { media: '(prefers-color-scheme: light)', color: '#f5f6f8' },
  ],
  colorScheme: 'dark light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={geist.variable} suppressHydrationWarning>
      <head>
        {/* 페인트 전에 실행돼야 테마와 진입 모션의 숨김 상태가 깜빡이지 않음 */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
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

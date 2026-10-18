import 'react'

// 진입 모션의 순서를 정하는 CSS 변수. style={{ '--i': n }} 로 바로 씀
declare module 'react' {
  interface CSSProperties {
    '--i'?: number
  }
}

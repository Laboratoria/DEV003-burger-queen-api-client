import { HeaderMenu } from '@/components/menu/headerMenu'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <HeaderMenu />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

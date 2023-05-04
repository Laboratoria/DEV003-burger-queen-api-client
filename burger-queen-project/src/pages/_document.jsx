import { HeaderMenu } from '../components/menu/headerMenu' 
import { Html, Head, Main, NextScript } from 'next/document'
// export const metadata = {
//   title: 'Burger Queen',
//   description: 'generate by create NextApp',
// }

export default function Document() {
  return (
    <Html lang="en">
      <Head metadata />
      <HeaderMenu />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

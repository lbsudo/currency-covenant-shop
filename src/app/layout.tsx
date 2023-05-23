import localFont from 'next/font/local'
import './globals.css'
import { Providers } from './providers'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

const roboto = localFont({
  src: './Fonts/RobotoMono-VariableFont_wght.ttf',
  display: 'swap',
});

export const metadata = {
  title: 'Currency Covenant Shop',
  description: 'The Official Store of The Covenant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html className={roboto.className} lang="en">
        <head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
        </head>
        <body className='flex flex-col min-h-screen'>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
          <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
          <div hidden id="snipcart" data-api-key={process.env.SNIPCART_API_KEY} data-config-modal-style="side" />
        </body>
      </html>
  )
}

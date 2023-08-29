import Navbar from '@/components/layouts/Navbar'
import '@/styles/globals.css' //menonaktifkan styles yg jg memuat backround bawaan hitam
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  ) 
}

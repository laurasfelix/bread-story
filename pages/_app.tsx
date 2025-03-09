import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant } from 'next/font/google'

const cormorant = Cormorant({subsets:[ 'latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={`${cormorant.className} bg-orange-100`}>
    <Component {...pageProps} />
  </main>);
}

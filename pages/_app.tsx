import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant } from 'next/font/google'

const cormorant = Cormorant({subsets:[ 'latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={`${cormorant.className} bg-orange-100`}>
   <div className="floating-icons">
        {Array.from({ length: 15 }).map((_, index) => (
          <span
            key={index}
            className="floating-icon"
            style={{
              "--random-top": `${Math.random() * 95 + 5}%`,
              "--random-left": `${Math.random() * 95 + 5}%`,
              "--random-delay": `${Math.random() * 5}s`,
              "--random-speed": `${Math.random() * 10 + 5}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

    <Component {...pageProps} />
  </main>);
}

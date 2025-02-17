import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
    <div className="flex items-center flex-col">
      <div> pain-demic (read this in french) </div>
      <div> by beatriz aguiar, laura félix, zoe chao </div>
    </div>
    <div>
      <Image src="/bakery-outside.jpg" alt="it's a full bakery" width={600} height={600}/>
      <Image src="/bakery-empty.jpg" alt="it's a full bakery" width={600} height={600}/>
      <Image src="/bakery-newspaper.png" alt="it's a full bakery" width={600} height={600}/>
      <Image src="/bakery-full.jpeg" alt="it's a full bakery" width={600} height={600}/>
      <Image src="/bakery-future.png" alt="it's a full bakery" width={600} height={600}/>

      
    </div>
    </div>
  );
}

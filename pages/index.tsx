import { useState, useEffect} from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function Home() {

  const story_info = [{id: 1, text:"In San Francisco, bakeries are more than bread–they are community.", image: "/bakery-outside.jpg", alt:"it&apos;s the outside of a bakery"}, 
    {id:2, text: "Over the past five years, the city has witnessed a shift in its bakery landscape. While specific numbers of openings and closures are not readily available, notable events include the closure of Bakers of Paris, a wholesale bakery that had served San Francisco for nearly four decades, in early 2020.", image: "/bakery-empty.jpg", alt:"it&apos;s an empty bakery" },
    {id:3, text: "San Francisco is the beating heart of baking in the U.S. Since the Gold Rush, San Francisco sourdough put American bread on the map, its tangy flavor becoming integral to the city&apos;s identity. From historic institutions like Boudin to new artisans experimenting with heritage grains and global influences like Tartine, generations work to keep the baking culture alive.", image: "/bakery-newspaper.png", alt:"it&apos;s a bunch of articles for a bakery" },
    {id:4, text: "Despite challenges such as rising operational costs and competition from larger chains, San Francisco&apos;s bakery community continues to thrive, driven by innovation and a deep connection to the city&apos;s diverse neighborhoods.", image: "/bakery-full.jpeg", alt: "it&apos;s a full bakery"},
    {id:5, text: "future?", image: "/bakery-future.png", alt: "it&apos;s a futuristic bakery"},
  ];

  const [currentSection, setCurrentSection] = useState(0);


  return (
    <div className="relative w-screen min-h-screen">

      <header className="relative z-20 p-4 left-1/4">
        <div className="flex items-center flex-col w-1/2">
          <div className="text-xl font-bold bg-yellow-100">pain-demic (read this in french)</div>
          <div className="bg-yellow-100"> 
            by <Link href="/beatriz">beatriz aguiar</Link>,{" "}
            <Link href="/laura">laura félix</Link>,{" "}
            <Link href="/zoe">zoe chao</Link>
          </div>
        </div>
      </header>
   
      <div
        className="fixed inset-0 w-screen h-screen bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url('${story_info[currentSection].image}')` }}
      />

      <div className="relative z-10 flex flex-col items-center w-screen">
        {story_info.map((part, index) => {
          const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

          useEffect(() => {
            if (inView) {
              setCurrentSection(index);
            }
          }, [inView, index]);

          return (
            <div key={index} ref={ref} className="w-screen h-screen flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-10 rounded-xl shadow-lg text-center flex flex-col items-center relative"
                style={{ maxWidth: "80vw", width: "600px" }}
              >
                <p className="text-xl font-semibold">{part.text}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

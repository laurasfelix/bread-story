/* eslint-disable */
import { useState, useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  const story_info = [
    {header:true},
    {text:"In San Francisco, bakeries are more than bread–they are community.", image: "true",image_src: "/bakery-outside.jpg", alt:"it's the outside of a bakery"}, 
    {paragraph: ["During the pandemic, a new wave of bakers emerged, turning home kitchens into the beating heart of communities. ", 
      "Gradually, small bakeries like Rize Up emerged to not only serve delicious bread, but serve the community. From backyard sourdough pop-ups to cultural bakeries reviving ancestral recipes, a tight-knit baking community has flourished, bound by a shared love for flour, fire, and fermentation. But as the city reopens and costs climb, these small bakers face an uncertain future. What started as a movement of resilience and connection is now a fight to keep independent baking alive in a place that’s always been shaped by those who feed it.",
    ], image:false},
    {text: "Over the past five years, the city has witnessed a shift in its bakery landscape. While specific numbers of openings and closures are not readily available, notable events include the closure of Bakers of Paris, a wholesale bakery that had served San Francisco for nearly four decades, in early 2020.", image_src: "/bakery-empty.jpg", alt:"it's an empty bakery", image: "true"},
    {text: "San Francisco is the beating heart of baking in the U.S. Since the Gold Rush, San Francisco sourdough put American bread on the map, its tangy flavor becoming integral to the city's identity. From historic institutions like Boudin to new artisans experimenting with heritage grains and global influences like Tartine, generations work to keep the baking culture alive.", image_src: "/bakery-newspaper.png", alt:"it's a bunch of articles for a bakery", image: "true" },
    {text: "Despite challenges such as rising operational costs and competition from larger chains, San Francisco's bakery community continues to thrive, driven by innovation and a deep connection to the city's diverse neighborhoods.", image_src: "/bakery-full.jpg", alt: "it's a full bakery", image: "true"},
    {text: "future?", image_src: "/bakery-future.png", alt: "it's a futuristic bakery", image: "true"},
  ];



  return (
    <div className="relative w-screen min-h-screen">


      <div className="relative z-10 flex flex-col items-center w-screen">
        {story_info.map((part, index) => {
          const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
          

          return (
            <div key={index} ref={ref} className="w-screen h-screen flex justify-center bg-cover items-center" style={{backgroundImage: `url('${part.image_src}')`}}>
              
              {/* title of the story*/}
              {part.header && 
              <motion.div className="relative z-20 p-4 grid grid-cols-[1fr_1fr] items-center justify-center">
                  
                <div className="items-center">
                  <Image src="/bread.png" alt="minecraft bread" width={400} height={400} />
                </div>
             
                <div className="flex items-center flex-col items-center justify-center">
                  <div className="text-xl font-bold bg-yellow-100">pain-demic (read this in french)</div>
                  <div className="bg-yellow-100"> 
                    by <Link href="/beatriz" className="">beatriz aguiar</Link>,{" "}
                    <Link href="/laura">laura félix</Link>,{" "}
                    <Link href="/zoe">zoe chao</Link>
                  </div>
                </div>

              </motion.div>

              }
              {/* text with image background */}
              {part.image && <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-10 rounded-xl shadow-lg text-center flex flex-col items-center relative"
                style={{ maxWidth: "80vw", width: "600px"}}
              >
                <p className="text-xl font-semibold">{part.text}</p>
              </motion.div>}


              {/* text with no image background */}
              {!part.image && !part.header &&
              <div className="grid grid-cols-[1fr_1fr_1fr]">
                <div>
                </div>
                <motion.div className="flex flex-col gap-5">
                  {/* looping through paragraphs for better aesthetics */}
                  {part.paragraph?.map((lines, idx) =>
                    {
                      return (
                      <div key={idx}>
                        <p className="text-left">{lines}</p>
                      </div>);
                    })
                  }
                </motion.div>
               
              </div>}

            </div>
          );
        })}
      </div>
    </div>
  );
}

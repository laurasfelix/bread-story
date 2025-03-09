/* eslint-disable */
import { useState, useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";

import { Fira_Sans } from 'next/font/google'

const FiraSans = Fira_Sans({subsets:[ 'latin'], weight:"400"})

export default function Home() {

  const story_info = [
    {header:true, image_src:""},
    {paragraph: ["“It lights them up,” Anderson says.",
      "Anderson started baking for himself, gradually baking for the neighborhood, and now bakes for a nation-wide community. However, the joy of sharing his bread, no matter the scale, remains the same. Similarly, Josey Baker, owner of Josey Baker Bread, fell in love with sourdough baking in his apartment, and eventually brought his bakery-cafe, a space that reflects the camaraderie of sharing bread, to life.",
      '"There is something sort of magical about gifting someone a loaf of warm bread," says Baker.',
      "These small bakeries are central to the culture of San Francisco. They do more than provide baked goods—they offer a place for the community to gather, offering warmth, comfort, and connection. Whether it's leaving a loaf on a neighbor's doorstep like Anderson, hosting local events like Baker or even taking care of their employees like Arnsdorff, these bakery owners use their craft to feed the body and the soul, strengthening the bonds that hold the city together."
    ], image:false},
    {text: "1", image_src: "/rize.jpeg", alt:"it's an empty bakery", image: "true", story:  {title: "The Rise/Feeding the Soul", paragraph: ["Anderson never saw himself making sourdough.",
      "“I had never seen anyone that looked like me that was a baker so I just assumed that I couldn't really do it,” says Anderson.",
      "Born in New Orleans and raised in the Bay Area, Anderson was a professional roller skater and a private chef before he ever thought of baking. It wasn’t until the pandemic hit that his journey in baking began. Encouraged by friends during the isolation of Covid-19, Anderson took up baking sourdough as a way to channel his energy and process his deep frustration with the state of the world.",
      "“The murder of George Floyd really spun me out,” Anderson says. “The fact that every day you walk out might be your last for no apparent reason broke my heart and broke my brain.”",
      "For months, Anderson was consumed by anger and despair. He either wanted to throw something at a wall or break down in tears. To cope, Anderson would retreat to his basement to work on his bread and himself.",
      '"The act of bread-making made me very happy," Anderson says. "When I was doing it, everything else disappeared."',
    ]}},
   
    {text: "2", image: "true", image_src: "/flourbranch.jpeg", story: {title: "Leavening/Caring from Within", 
      paragraph:[
        `For three months, Lauren Arnsdorff and her husband Michael Eskenasy lived out of their car to cover the cost of running their bakery in San Francisco. `,
        `“I don't think people realize how hard it is,” says Arnsdorff. “We were technically homeless. We were trying to get the business up and running, and at the same time, gave some of our employees raises, because it was so hard to keep good people. That was always our priority, so we just kind of have sacrificed so much to get here.”`,
        `Growing up, Arnsdorff watched Ina Garten and Martha Stewart in her kitchen at breakfast time, mimicking their recipes in her free time. When she ran into some health concerns in her twenties, her doctor encouraged her to use all-natural ingredients in her baking, allowing her to enjoy her baked goods while taking care of her body. `,
        `“I can create the best cookie available, but it has to be with the best ingredients possible,” says Arnsdorff.`,
        `In 2020, Arnsdorff found herself out-of-work. She decided to pursue her passion project full time and start a bakery.`,
        `“Because the pandemic, people need more reasons or more ways to connect with each other,” says Arnsdorff. “And for me, food has always been the connector.”`,
        `Starting from her own kitchen, Arnsdorff gradually grew her team. `,
      ]
     
    }},
    {text: "3", image_src: "/mill.jpeg", alt: "it's a full bakery", image: "true", story: {title:"Gathering", 
      paragraph:["With an online fanbase of over 50k, Josey Baker is a bread-fluencer.",

      ]
   
    }}
    
  ];



  return (
    <div className="relative w-screen min-h-screen">


      <div className="relative z-10 flex flex-col items-center w-screen">
        {story_info.map((part, index) => {
          const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
          

          return (
            <div key={index} ref={ref} className="w-screen flex bg-cover items-center p-2 gap-4" style={{backgroundImage: part.image? undefined: `url('${part.image_src}')`, "justifyContent": part.header ? "start": "center"}}>
              
              {/* title of the story*/}
              {part.header && 

              <div className="grid grid-rows-[0.5fr_4fr_4fr] h-screen">

      
                <motion.div className="relative z-20 pt-10" initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}>
            
                  <div className="flex items-center flex-col items-center justify-center text-3xl gap-2 p-4 bg-amber-100 rounded-md border-2 border-stone-600" >
                    <div className={`text-[2.30rem] font-black self-start text-red-800 drop-shadow-[0_1.0px_1.0px_rgba(0,0,0,1)] ${FiraSans.className}`}>BREAKING BREAD: </div>
                    <div className={`text-[2.30rem] font-black self-start text-red-800 drop-shadow-[0_1.0px_1.0px_rgba(0,0,0,1)] ${FiraSans.className}`}> Small bakeries in San Francisco shape community </div>
                    <div className={`self-start ${FiraSans.className}`}> 
                      by <Link href="/beatriz" className="bg-red-700">beatriz aguiar</Link>,{" "}
                      <Link href="/laura" className="bg-red-700">laura félix</Link>,{" "}
                      <Link href="/zoe" className="bg-red-700">zoe chao</Link>
                    </div>
                  </div>
            

                </motion.div>
              </div>

              }
              {/* text with image background */}
              {part.image && (
              <div className="flex overflow-x-auto w-screen h-screen">
                {/* Image panel */}
                <div className="flex-shrink-0 w-screen h-screen">
                  <img 
                    src={part.image_src} 
                    className="object-cover w-full h-full" 
                  />
                </div>
                {/* Text panel */}
                <div className="flex-shrink-0 w-screen min-h-screen p-10 flex items-center justify-center overflow-y-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-stone-100 p-10 rounded-xl shadow-lg w-full"
                    style={{ maxWidth: "120vw"}}
                  >
                    <div className="font-bold text-xl ">{part.story?.title}</div>
                    <div className="flex flex-wrap gap-5 mt-4">
                      {part.story?.paragraph?.map((lines, idx) => (
                        <div key={idx}>
                          <p className="text-left text-lg">{lines}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
                          {/* text with no image background */}
              {!part.image && !part.header &&
              <div className="grid grid-cols-[1fr_1fr_1fr] w-screen">
                <div>
                </div>
                <motion.div>
                  {/* looping through paragraphs for better aesthetics */}
                  <div className="flex flex-col gap-2"> 
                    <div className="font-bold text-xl">
                      {part?.title}
                    </div>

                    <div className="flex flex-col gap-5">
                      {part?.paragraph?.map((lines, idx) =>
                        {
                          return (
                          <div key={idx}>
                            <p className="text-left text-lg">{lines}</p>
                          </div>);
                        })
                      }
                      </div>
                  </div>
                </motion.div>
               
              </div>}

            </div>
          );
        })}
      </div>
    </div>
  );
}

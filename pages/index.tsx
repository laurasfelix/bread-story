/* eslint-disable */
import { useState, useRef, useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";
import HorizontalScroll from "@/components/HorizontalScroll";

import { Fira_Sans } from 'next/font/google'

const FiraSans = Fira_Sans({subsets:[ 'latin'], weight:"400"})

export default function Home() {

  const story_info = [
    {header:true, image_src:"/first.jpg"},
    {paragraph: [
        `Like many during the COVID-19 pandemic, Azikiwee Anderson began to bake sourdough. The zen process of feeding his starter, waiting for the bread to rise, kneading his dough, and baking his bread often left him with extra loaves. Rather than letting the bread go to waste or consuming it himself, Anderson would leave warm loaves on the doorsteps of his older neighbors, many of whom lived alone.`,
        `“It lights them up,” Anderson said.`,
        `Still spreading the joy of bread, Anderson now bakes for a nationwide community through Rize Up, a San Francisco-based wholesale bakery.`,
        `“There is something sort of magical about gifting someone a loaf of warm bread,” said Josey Baker, the owner of another San Francisco bakery, Josey Baker Bread. Like Anderson, Baker fell in love with sourdough while baking in his apartment and eventually opened The Mill, a bakery-cafe in Hayes Valley.`,
        `Bakeries have long been central to the culture of San Francisco. From the 1849 Gold Rush when French immigrants started Boudin Bakery to the sensationalization of San Francisco-born Tartine across the world, bakeries have brought the community together. The pandemic, however, sharpened some residents’ desire for spaces of community gathering — places offering warmth, comfort and connection. In a difficult political and economic landscape — with waves of layoffs and the closure of longtime bread wholesaler Bakers of Paris — some small bakeries have also provided for employees in ways that large corporations have not.`, 
    ], image:false},
    {text: "1", image_src: "/rize.jpeg", alt:"it's an empty bakery", image: "true", story:  {title: "Feeding the Soul", paragraph: [[
      `Prior to COVID, Anderson never saw himself making sourdough.`,
      `“I had never seen anyone that looked like me that was a baker, so I just assumed that I couldn't really do it,” Anderson said.`,
      `Growing up Black in New Orleans and the Bay Area, Anderson was a professional roller skater and a private chef before he ever thought of baking. It wasn’t until the pandemic hit that his journey in baking began. Encouraged by friends during the isolation of Covid-19, Anderson took up baking sourdough as a way to channel his energy and process his deep frustration with the state of the world.`,
      `“The murder of George Floyd really spun me out,” Anderson said. “The fact that every day you walk out might be your last for no apparent reason broke my heart and broke my brain.”`,
`For months, Anderson was consumed by anger and despair. He either wanted to throw something at a wall or break down in tears. To cope, Anderson retreated to his basement to work on his bread and on himself.`,
    ],[
    `"The act of bread-making made me very happy," Anderson said. "When I was doing it, everything else disappeared."`,
    `Eventually, a social media follower from Brooklyn asked him to ship and sell his bread and opened the floodgates to his business.`,
    `“It was like a little Tamagotchi, which is very similar to your starter to begin with," he said. "You show it care and it doubles in size."`,
    `From the 10 loaves produced in his home soon expanded to more than 600 loaves daily in his current bakery, Anderson has since hired employees, rented out space and is working on a new bakery concept. Anderson’s audience grew as well — from an initial 3,000 people to 28,000 Instagram followers — without spending a penny on advertising.`,

    ],[
      `In November 2023, Rize Up was robbed and lost over $70,000 worth of goods and equipment. However, the community that Anderson always showed up for, showed up for him too. Members of the community donated and other chefs showed up with food for his employees. That’s when he knew he was on the right track.`,
`“When you know that what you do matters to people, and they show up for you, it makes it a lot easier to pick yourself up and dust yourself off and fight the good fight," he said.`,
      `For Anderson, it's not just about the bread, it’s the connection it fosters. Sometimes, that connection is as simple as the knock on his door from a homeless neighbor in need of a loaf.`,
      `“When I give them the bread and they say thank you,” Anderson said. “That might be what I really make today. That’s what feeds my soul.”`,
      `“I can make the world better one beautiful loaf of bread at a time,” Anderson said. “And I really believe that — whether it's employing people and making sure people are happy and feeling seen, donating to food insecurity, inspiring other people to raise money or donate their time or their energy to feed the homeless.”`,

    ]
    
    ]}},
   
    {text: "2", image: "true", image_src: "/flourbranch.jpeg", story: {title: "Caring from Within", 
      paragraph:[[
        `For three months, Lauren Arnsdorff and her husband Michael Eskenasy lived out of their car to cover the cost of running their bakery in San Francisco.`,
        `“I don't think people realize how hard it is,” says Arnsdorff. “We were technically homeless. We were trying to get the business up and running, and at the same time, gave some of our employees raises, because it was so hard to keep good people.”`,

        `Arnsdorff and Eskenasy may have sacrificed for their bakery, Flour & Branch, but they would do it all over again.  Growing up, Arnsdorff watched Ina Garten and Martha Stewart in her kitchen at breakfast time, mimicking their recipes in her free time. When she ran into some health concerns in her twenties, her doctor encouraged her to use all-natural ingredients in her baking, allowing her to enjoy her baked goods while taking care of her body.`, 

     `“I can create the best cookie available, but it has to be with the best ingredients possible,” Arnsdorff said.`,

      ], [

        `In early 2020, Arnsdorff found herself laid-off from her corporate finance role and quarantined at home. She decided that it was the perfect time to pursue her passion and incorporated Flour & Branch.`,

`“Because of the pandemic, people need more reasons or more ways to connect with each other,” Arnsdorff said. “And for me, food has always been the connector.”`,

`Arnsdorff first built her community nationally through a shipping business in October 2020. She made nearly 200 iterations of each cookie and rented out a 200 square foot kitchen. As her cookies grew in popularity, appearing in national publications like FoodNetwork and Forbes, she hired more staff and rented out a larger space to accommodate.`, 

`However, San Francisco’s COVID protocols delayed Flour & Branch’s operations. Even though Arnsdorff worked closely with the health inspector to ensure the health and safety of her employees, implementing various COVID protocols led to delays and setbacks in the operations of the bakery.`, 

`“It's really hard because you can't just say, ‘Oh well, it's okay.’ You really have to take the hit,” says Arnsdroff. “I’m trying to navigate that and be strong for my employees, but I'm terrified.”`,


      ], [

       ` After Arnsdorff persevered through the first two years, Arnsdorff’s husband Michael Eskenasy joined her team as the Chief Operating Officer of the bakery. With his help, Arnsdorff and Eskenasy opened the doors to their storefront in December of 2021, selling cookies, pastries, brunch and beverages.`, 

`“I just want to make it better a little bit each day,” says Arnsdroff. “In the process of that, [the bakery] became the space that people just want to spend time in.”`,

`While Flour & Branch has garnered a regular customer base, Arnsdorff and Eskenasy are still working in the grassroots, bringing extra goods to concierges at hotels and leaving food at offices in the neighborhood to generate more visibility in the neighborhood post-COVID. Ensuring welfare among their employee family is often difficult, Arnsdorff said.`,

`“You honestly feel like you're dying every day,” says Arnsdorff. “But it's fulfilling. I would never change it. I would do it all over again.”`,


      ]
      
      ]
     
    }},
    {text: "3", image_src: "/mill.jpeg", alt: "it's a full bakery", image: "true", story: {title:"Gathering Around the Table", 
      paragraph:[[

        `At the center of The Mill, a bakery-cafe, is a large wooden communal table.`,
`“For a lot of people, there's a little bit of vulnerability in their first cup of coffee,”  said Josey Baker, owner of Josey Baker Bread. “We want people who walk into the place to feel welcomed here. They can come when [they’re] alone, with my friends, with a book, or come to have a meeting.”`,
`The Mill first opened its doors in 2012 as a collaboration between Four Barrels Coffee and Josey Baker Bread, specializing in house-milled flour and all-organic ingredients. Baker oversaw the production of the bread, especially his famous whole grain sourdough.`,
`“I am interested in whole grain sourdough bread because I think it's delicious, healthy, and allows for more transparency with the ingredients,” Baker said.`,


      ],[

        `After working in education curriculum development for a few years, Josey Baker was given a sourdough starter. Being in San Francisco, the beating heart of the bread baking tradition in the United States, Baker fell in love with sourdough and the baking process, making and selling bread in his free time. In 2010, Baker was approached with the opportunity to collaborate on The Mill and jumped into the project full-time.`, 
`The Mill and Josey Baker Bread quickly found a massive online and in-person following for their bread and coffee. Visitors come from all over the nation and from San Francisco. But it’s not just the bread bringing people together.`,


      ],[

        `“Our space is one of communal revelry and being a part of a community,” Baker said.`,

`Being part of the community extends beyond the space for The Mill. The staff has participated in local school fundraisers and donated their profits towards causes like relief for the Los Angeles County fires.`, 

`“You could totally pick up The Mill and plop it down in 100 different places in this country or in this world, and it would fail,” Baker said. “It's not just The Mill, it’s a San Francisco cafe bakery.”`,


      ]

      ]
    }},

    {paragraph:[

      `Whether it’s by maintaining camaraderie and support for employees, giving back to the neighborhood or creating a gathering space, small bakeries play integral roles in their communities.`,
      `Rize Up, Flour & Branch and The Mill are far from the only bakeries serving their community in San Francisco, there are hundreds of owner-owned and operated bakeries in San Francisco, including (but not limited to) Arizmendi, Third Culture Bakery, The French Spot, Fillmore Bakery, b. patisserie, and so much more! Support local bakeries to support your community.`,

    ], image:false, section_title:"An ecosystem of small bakeries"},


    {image: false, icon_part:true, icons:[
      {image_src:"/rize.png", name:"RizeUp Bakery", hours:"Monday - Friday 7am to 3pm", phone:"415-964-4706", link:"https://rizeupsourdough.com/", email:"", text:"RizeUp Bakery is a Black-owned wholesale bakery transforming traditional sourdough with cultural influences around the world. RizeUp’s bread can be found at local supermarkets across San Francisco and pre-ordered online.", address:"1160 Howard St, San Francisco, CA 94103"},
      {image_src:"/flour.png", name:"Flour & Branch", hours:"Monday-Friday from 8:30-2:30, or until sold out Saturday from 10-2:30", phone:"(415) 658-7217", link:"https://www.flourandbranch.com/", email:"info@flourandbranch.com", text:"Flour & Branch is a female-owned bakery specializing in coffee, cookies and baked goods made with all natural ingredients. They also offer brunch service on Saturdays and are available for catering.", address:"493 3rd St, San Francisco, CA 94107"},
      {image_src:"/mill.png", name:"The Mill", hours:"Open Everyday from 7am - 5pm", phone:"415 345-1953", link:"https://themillsf.com", email:"info@themillsf.com", text:"The Mill is a partnership between Four Barrel Coffee and Josey Baker Bread serving up whole grain sourdough made with flour milled in-house and hand-roasted coffee.", address:"736 Divisadero Street, San Francisco, CA 94117"},
    ]
  }
    
  ];

  const [choice, setChoice] = useState(-1);

  const handleClick = (idx: number) => {
   
    const part = story_info[story_info.length - 1];
   
    const biz  = part?.icons?[idx] : null;

    if (biz) {
   
      setChoice(idx);
    }
    
  };

  const handleX = (idx:number) => {

    const part = story_info[story_info.length - 1];
    const biz  = part.icons?[idx] : null;

    if (biz) {
      setChoice(-1);
    } 
  }



  return (
    <div className="relative w-screen min-h-screen">


      <div className="relative z-10 flex flex-col items-center w-screen gap-16">
        {story_info.map((part, index) => {
          const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
          

          return (
            <div key={index} ref={ref} className={`w-screen flex bg-cover items-center p-2 ${part.image ? "bg-md-90" : "md:bg-cover"}`} style={{backgroundImage: `url('${part.image_src}')`, "justifyContent": part.header ? "start": "center", "alignItems": part.icon_part ? "center" : undefined ,backgroundRepeat: "no-repeat", backgroundPosition:"center"}}>
              
              {/* title of the story*/}
              {part.header && 

              <div className="grid grid-rows-[0.5fr_4fr_4fr] h-screen">

      
                <motion.div className="relative z-20 pt-10" initial={{ opacity: 0, y: -400 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 1 }}>
            
                  <div className="flex items-center flex-col items-center justify-center text-3xl gap-2 p-4 bg-orange-200 rounded-md border-2 border-orange-800" >
                    <div className={`text-[2.30rem] font-black self-start text-orange-800 drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,1)]`}>BREAKING BREAD: </div>
                    <div className={`text-[2.30rem] font-black self-start text-orange-800 drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,1)]`}> Small bakeries in San Francisco shape community </div>
                    <div className={`self-start`}> 
                      by <Link href="/beatriz" className="bg-orange-300 font-bold">beatriz aguiar</Link>,{" "}
                      <Link href="/laura" className="bg-orange-300 font-bold">laura félix</Link>,{" "}
                      <Link href="/zoe" className="bg-orange-300 font-bold">zoe chao</Link>
                    </div>
                  </div>
            

                </motion.div>
              </div>

              }
              {/* text with image background */}
              {part.image && (
                <HorizontalScroll>
       
                {/* Image panel */}
                <div className="flex-shrink-0 w-screen h-screen items-center justify-center flex">
                <motion.div
                    initial={{ opacity: 0, y: -400 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-orange-100 p-10 rounded-xl shadow-lg w-full border-4 border-stone-800" 
                    style={{ maxWidth: "60vw"}}
                  >
                  <div className="font-bold text-xl text-center">{part.story?.title}</div>
                  </motion.div>
                </div>
                {/* Text panel */}
                {part.story?.paragraph?.map((section, idx) => (
                <div className="flex-shrink-0 w-screen min-h-screen p-10 flex items-center justify-center overflow-y-auto">
                
                  <div className="flex flex-wrap gap-16 mt-4">
                  
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-orange-100 p-10 rounded-xl shadow-lg w-full md:w-1/2 border-4 border-stone-800" 
                    style={{ maxWidth: "120vw"}}
                  >
                  
                    
                    {section?.map((lines, idx2) =>
                        (
                        <div key={`${idx}-${idx2}`}>
                          <p className="text-left text-lg p-1">{lines}</p>
                        </div>
                        ))}
                  </motion.div>
                     </div>
                  
                </div>
                    ))}
         
              </HorizontalScroll>
            )}
              {/* text with no image background */}
              {!part.image && !part.header &&
              <div className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-1 w-screen">
                <div>
                </div>
                <motion.div>
                  {/* looping through paragraphs for better aesthetics */}
                  <div className="flex flex-col gap-2"> 

                    {part.section_title && 
                    <div className="flex flex-col p-2">
                      <p className="font-bold text-xl text-center"> {part.section_title} </p>
                    </div>}

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

            
            {/* icons below */}
            {part.icon_part &&
              <div className="flex flex-col md:flex-row items-start justify-center self-center min-w-full min-h-[70vh]">
                {part.icons?.map((icon, inx) =>
                (
                  <div key={inx}  className="flex flex-col items-center justify-center flex-1">
                    <p className="text-xl font-bold bg-orange-200"> {icon.name} </p>
                    <div>

                    {choice != inx && 
                     
                      <img src={`${icon.image_src}`} onClick={() => handleClick(inx)} className="object-contain h-96 w-auto hover:scale-125" /> 
                    }
                    {choice === inx &&
                    <div className="object-contain bg-stone-100 h-auto min-h-96 w-[95%] text-center flex flex-col border-2 border-green-200 mt-4">

                        <div className="flex-none bg-amber-200 text-left pl-3 font-black text-lg flex gap-8">
                          <button onClick={()=> {handleX(inx)}} className="bg-red-300 rounded-3xl shrink w-fit pl-1 pr-1"> x </button>

                          <Link href={icon.link} className="w-fit bg-sky-200 rounded-lg self-center"> {icon.link} </Link>
                        </div>

                        <div className="flex-1 flex flex-col gap-4 text-left m-2">
                          <p className="text-lg"> {icon.text} </p>
                          <p> <span className="font-bold"> operation hours: </span>{icon.hours} </p>
                          <p> <span className="font-bold"> address: </span> {icon.address}</p>
                         
                          <div className="flex flex-col gap-1">
                            <p> <span className="font-bold"> email: </span> {icon.email} </p>
                            <p> <span className="font-bold"> phone: </span>{icon.phone} </p>
                          </div>
                         
                          
                        </div>


                    </div>
                    }
                    </div>
                  </div>
                ))
                
                }
              </div>
              }

            </div>

            
          );
        })}
      </div>
    </div>
  );
}

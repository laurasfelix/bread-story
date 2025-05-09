import Image from "next/image";
import Link from "next/link";
export default function Zoe(){

    return (
 
        <div className="grid grid-rows-[20px_1fr_20px] p-10 gap-10 w-screen min-h-screen" >
            <div className="grid grid-cols-[20px_1fr_20px] items-center justify-center">
                <Link href="/" className="flex flex-row gap-2 font-bold"> <span> ← </span> back  </Link>  
                <span className="font-semibold items-center text-center justify-center text-xl bg-orange-100">this is zoe&apos;s profile</span>
            </div>
            <div className="grid grid-cols-[1fr_1fr] justify-center items-center gap-4">

                <div className="text-center flex flex-col items-end">
                
                    <Image className="border-2 border-dotted border-red-300 bg-orange-100 z-0" src="/zoe.png" alt="its's a wolf" width={300} height={300}/>
                </div>

                <div className="text-center flex flex-col items-start">
                    <span className="relative w-1/2 top-1/2 bg-orange-100"> Zoe is pursuing a Journalism major, Classics minor, and certificates in Integrated Marketing Communications and Design. She is a third culture kid with roots in Shanghai, Taipei and California. She loves writing, drinking coffee, logging her restaurants on Beli, seeing the world, and watching SNL. She also loves bread. With a passion. </span>
                </div>

            </div>
        </div>
       
    );
}
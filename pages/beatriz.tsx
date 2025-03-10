import Image from "next/image";
import Link from "next/link";
export default function Beatriz(){

    return (

        <div className="grid grid-rows-[20px_1fr_20px] p-10 gap-10 w-screen min-h-screen" >
            <div className="grid grid-cols-[20px_1fr_20px] items-center justify-center">
                <Link href="/" className="flex flex-row gap-2 font-bold"> <span> ← </span> back  </Link>  
                <span className="font-semibold items-center text-center justify-center text-xl bg-orange-100">this is beatriz&apos;s profile</span>
            </div>
            <div className="grid grid-cols-[1fr_1fr] justify-center items-center">

                <div className="text-center flex flex-col items-end ">
                
                    <Image className="border-2 border-dotted border-red-300 bg-orange-100 z-0" src="/beatriz.png" alt="its's a wolf" width={300} height={300}/>
                </div>

                <div className="text-center flex flex-col items-start">
                    <span className="relative w-1/2 top-1/2 bg-orange-100"> B.S. Communication Studies and Psychology with Certificates in Design and Integrated Marketing Communications at <span className="font-bold text-purple-600"> Northwestern University</span>. Originally from Brazil, Beatriz lives in Chicago, IL, but is currently in San Francisco for a quarter-long academic and professional immersion in UX/UI Design and Communications with Northwestern. She is passionate about marketing, Brazil, education, and has a special place in her heart for hot chocolates and chocolate croissants. 

<span className="font-bold"> Contact: </span>
<span> beatrizfonseca2027@u.northwestern.edu </span>
<span className="text-sky-600">https://www.linkedin.com/in/beatrizaguiarfonseca/ </span> </span>
                </div>

            </div>
        </div>
     
    );
}
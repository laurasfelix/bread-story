import Image from "next/image";
export default function Laura(){

    return (
        <div className="w-screen min-h-screen">
            <div className="grid grid-rows-[20px_1fr_20px] p-10 gap-10" >
                <span className="font-semibold items-center text-center justify-center">this is laura&apos;s profile</span>
                <div className="grid grid-cols-[1fr_1fr]">

                    <div className="text-center flex flex-col items-end">
                     
                        <Image className="border-2 border-dotted border-red-300" src="/laura.png" alt="its's a wolf" width={300} height={300}/>
                    </div>

                    <div className="text-center flex flex-col items-start">
                        <span className="relative w-1/2 top-1/2"> laura is a junior @ <span className="text-purple-600 font-bold">Northwestern University</span>, studying Computer Science and Russian. incoming swe intern @ <span className="text-green-600 font-bold"> duolingo </span> </span>
                    </div>

                </div>
            </div>
        </div>
    );
}
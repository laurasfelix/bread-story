import { useRef, useEffect,ReactNode } from "react";
interface HorizontalScrollProps {
  children: ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // defining scroll container
    if (scrollRef === null) return;
    const scrollContainer = scrollRef.current!;
  
    const onWheel = (e: WheelEvent) => {
      
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (
        (e.deltaY < 0 && scrollContainer.scrollLeft === 0) ||
        (e.deltaY > 0 && scrollContainer.scrollLeft >= maxScrollLeft)
      ) {
        return;
      }
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };
  
    scrollContainer.addEventListener("wheel", onWheel, { passive: false });
    return () => scrollContainer.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div ref={scrollRef} className="flex overflow-x-auto w-[110vw] h-screen">
      {children}
    </div>
  );
}
import { useRef, useEffect,ReactNode } from "react";
interface HorizontalScrollProps {
  children: ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const scrollRef = useRef(null);

  useEffect(() => {
    // defining scroll container
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
  
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
    <div ref={scrollRef} className="flex overflow-x-auto w-screen h-screen">
      {children}
    </div>
  );
}
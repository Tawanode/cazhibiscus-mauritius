"use client";

import { useRef } from "react";
import Image from "next/image";

const activities = [
  { id: 1, title: "Nine Arch Bridge", subtitle: "Iconic Railway", image: "/images/nine_arch_bridge.jpg" },
  { id: 2, title: "Little Adam's Peak", subtitle: "Panoramic Views", image: "/images/little_adams_peak.jpg" },
  { id: 3, title: "Ella Rock", subtitle: "Challenging Trek", image: "/images/ella_rock.jpg", variant: "circle" },
  { id: 4, title: "Ravana Falls", subtitle: "Cascading Waters", image: "/images/ravana_falls.jpg" },
  { id: 5, title: "Uva Halpewatte Tea Factory", subtitle: "Ceylon Tea Tours", image: "/images/tea_factory.jpg" },
];

export default function SignatureActivities() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-ocean-white">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between md:items-end gap-6">
        <div>
          <h2 className="font-display text-4xl md:text-5xl text-deep-ocean mb-2">Signature Activities</h2>
          <p className="text-dark-text/70 font-sans text-sm md:text-base">Swipe to explore our curated selection of highland pursuits and Ella highlights.</p>
        </div>
        <div className="hidden md:flex gap-4">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-warm-sand/50 flex items-center justify-center text-deep-ocean hover:bg-deep-ocean hover:text-white transition-all"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-warm-sand/50 flex items-center justify-center text-deep-ocean hover:bg-deep-ocean hover:text-white transition-all"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-12 lg:px-24 pb-8 md:pb-12 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {activities.map((activity) => (
          <div key={activity.id} className="flex-none w-[75vw] sm:w-[60vw] md:w-[280px] lg:w-[320px] group">
            {activity.variant === "circle" ? (
              <div className="relative h-[320px] md:h-[450px] rounded-[24px] md:rounded-[32px] bg-white border border-warm-sand/20 overflow-hidden shadow-sm flex flex-col items-center justify-center p-6 md:p-8 transition-transform duration-500 hover:-translate-y-2">
                <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 md:mb-8 shadow-inner">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="text-center w-full">
                  <h3 className="font-display text-2xl md:text-3xl text-deep-ocean mb-1 md:mb-2">{activity.title}</h3>
                  <p className="text-deep-ocean/60 font-sans text-[10px] md:text-xs font-bold tracking-wider uppercase">
                    {activity.subtitle} <span className="mx-1 md:mx-2">|</span> Experiences
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative h-[320px] md:h-[450px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-md transition-transform duration-500 hover:-translate-y-2">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 via-deep-ocean/20 to-transparent"></div>
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-1 md:mb-2">{activity.title}</h3>
                  <p className="text-white/80 font-sans text-[10px] md:text-xs font-bold tracking-wider uppercase">{activity.subtitle}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation Arrows */}
      <div className="flex md:hidden justify-center gap-4 px-6 pb-6 mt-4">
        <button 
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full border border-warm-sand/50 flex items-center justify-center text-deep-ocean hover:bg-deep-ocean hover:text-white transition-all bg-white/50 backdrop-blur-sm"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button 
          onClick={scrollRight}
          className="w-12 h-12 rounded-full border border-warm-sand/50 flex items-center justify-center text-deep-ocean hover:bg-deep-ocean hover:text-white transition-all bg-white/50 backdrop-blur-sm"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}

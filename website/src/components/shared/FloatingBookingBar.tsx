"use client";

import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingBookingBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the floating bar after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-4xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-2xl p-2 md:p-3 flex flex-col md:flex-row items-center justify-between border border-deep-ocean/10">
        
        <div className="flex items-center gap-6 md:gap-12 px-6 py-2 w-full md:w-auto overflow-hidden">
          {/* Current View */}
          <div className="hidden md:block border-r border-deep-ocean/10 pr-8">
            <span className="font-sans text-[8px] font-bold tracking-widest text-deep-ocean/50 uppercase block mb-1">Currently Viewing</span>
            <span className="font-sans text-xs font-bold text-deep-ocean uppercase tracking-wider">All Rooms & Suites</span>
          </div>

          {/* Date Selector */}
          <button 
            onClick={() => window.dispatchEvent(new Event('open-booking'))}
            className="flex items-center gap-3 text-deep-ocean/70 hover:text-deep-ocean transition-colors flex-1 md:flex-none justify-center cursor-pointer"
          >
            <Calendar size={18} />
            <span className="font-sans text-[10px] font-bold tracking-widest uppercase">Select Dates To See Availability</span>
          </button>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => window.dispatchEvent(new Event('open-booking'))}
          className="w-full md:w-auto mt-3 md:mt-0 px-8 py-4 bg-deep-ocean text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full hover:bg-deep-ocean/90 transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
        >
          Reserve Your Stay
        </button>

      </div>
    </div>
  );
}

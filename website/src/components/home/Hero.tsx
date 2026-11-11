"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] md:h-screen md:min-h-[800px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Laptop Localized Gradient Overlay (Right side) */}
        <div className="absolute top-0 right-0 bottom-0 w-full md:w-[70%] lg:w-[55%] bg-gradient-to-l from-black/70 via-black/30 to-transparent z-10 hidden md:block" />
        {/* Mobile Multi-Layered Natural Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/60 z-10 md:hidden" />
        <div className="absolute inset-0 bg-black/15 z-10 md:hidden" />
        <img
          src="/images/hillora_ella_hero.jpg"
          alt="Exterior of Scenic View – Ella guesthouse surrounded by green hills"
          className="w-full h-full object-cover object-[70%_center] md:object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-5 min-[390px]:px-6 max-w-7xl h-full w-full flex flex-col justify-center items-center md:items-end md:text-left text-center pt-28 pb-14 min-[390px]:pt-32 min-[390px]:pb-16 md:py-0 md:-mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-[560px] lg:w-[620px] flex flex-col items-center md:items-start translate-y-3 min-[390px]:translate-y-5 md:translate-y-0 md:translate-x-6 lg:translate-x-12"
        >
          <div className="w-full flex flex-col items-center md:items-start">
            {/* Desktop Eyebrow */}
            <span className="font-button text-xs md:text-sm uppercase tracking-widest text-ocean-white mb-4 hidden md:block">
              YOUR PEACEFUL MOUNTAIN ESCAPE IN ELLA
            </span>

            {/* Headline */}
            <h1 className="font-display text-[34px] min-[360px]:text-[38px] min-[390px]:text-[43px] min-[430px]:text-[46px] leading-[1.1] sm:text-6xl md:text-[54px] lg:text-[62px] md:leading-[1.1] text-ocean-white mb-4 md:mb-5 max-w-[340px] min-[360px]:max-w-[380px] min-[390px]:max-w-[420px] md:max-w-none mx-auto md:mx-0 px-2 md:px-0 text-balance">
              Wake Up to the <br className="hidden md:block" />
              Scenic Beauty of Ella
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-[15px] min-[360px]:text-[16px] min-[390px]:text-[17px] leading-[1.5] text-ocean-white/90 max-w-[320px] min-[360px]:max-w-[360px] min-[390px]:max-w-[420px] md:max-w-[560px] mx-auto md:mx-0 mb-6 min-[390px]:mb-8 font-light px-2 md:px-0 text-balance">
              Discover the warmth of family hospitality at Scenic View – Ella, a peaceful mountainside guesthouse overlooking Sri Lanka&apos;s breathtaking central highlands.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 md:gap-5 w-full max-w-[320px] min-[360px]:max-w-[340px] md:max-w-none mx-auto md:mx-0">
            <button
              onClick={() => window.dispatchEvent(new Event('open-booking'))}
              className="w-full sm:w-auto h-[54px] min-[375px]:h-[56px] md:h-[60px] px-8 bg-golden-sunset text-deep-ocean md:text-gray-900 font-sans md:font-semibold text-xs min-[375px]:text-sm font-bold tracking-widest uppercase rounded-full shadow-lg hover:bg-coral-accent hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Check Availability
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/rooms"
              className="w-full sm:w-auto min-h-[44px] py-2 sm:py-0 sm:h-[60px] px-6 text-ocean-white/90 hover:text-white font-sans text-xs min-[375px]:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors underline underline-offset-4 decoration-ocean-white/40 hover:decoration-ocean-white sm:bg-transparent sm:backdrop-blur-none sm:rounded-full sm:border sm:border-ocean-white/50 sm:no-underline sm:hover:bg-ocean-white/10 active:opacity-80"
            >
              Explore Our Rooms
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-3 min-[390px]:bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none opacity-80 hover:opacity-100 transition-opacity"
      >
        <span className="font-sans text-[10px] md:text-xs text-ocean-white uppercase tracking-widest mb-1 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-ocean-white" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

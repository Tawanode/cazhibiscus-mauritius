"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GardenViewSanctuaries() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-8 md:mb-16">
          <span className="font-sans text-[10px] font-bold tracking-widest text-deep-ocean/60 uppercase block mb-3 md:mb-4">
            Room Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-deep-ocean">Your Balcony. Your View. Your Morning.</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-24">
          
          {/* Left: Image with overlapping quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-[24px] md:rounded-[32px] shadow-sm">
              <img
                src="/images/mountain_view_balcony.jpg"
                alt="Mountain views from a private balcony at Scenic View – Ella"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 mt-2 md:mt-24"
          >
            <h3 className="font-display text-[28px] leading-tight md:text-4xl text-deep-ocean mb-4 md:mb-6">Mountain-View Balcony Living</h3>
            <p className="font-sans text-[15px] md:text-base text-dark-text/80 leading-snug md:leading-relaxed mb-8 md:mb-10">
              Relax in comfortable boutique guesthouse accommodation designed for a peaceful stay in Ella. Step outside to your private balcony or terrace and let Ella&apos;s mist-covered mountain landscape become an unforgettable part of your journey.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-deep-ocean/10 font-sans text-[9px] md:text-[10px] font-bold tracking-widest text-deep-ocean/70 uppercase">Panoramic mountain views</span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-deep-ocean/10 font-sans text-[9px] md:text-[10px] font-bold tracking-widest text-deep-ocean/70 uppercase">Private balcony or terrace</span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-deep-ocean/10 font-sans text-[9px] md:text-[10px] font-bold tracking-widest text-deep-ocean/70 uppercase">Air conditioning</span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-deep-ocean/10 font-sans text-[9px] md:text-[10px] font-bold tracking-widest text-deep-ocean/70 uppercase">Private bathroom</span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-deep-ocean/10 font-sans text-[9px] md:text-[10px] font-bold tracking-widest text-deep-ocean/70 uppercase">Free Wi-Fi</span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-deep-ocean/10 font-sans text-[9px] md:text-[10px] font-bold tracking-widest text-deep-ocean/70 uppercase">Work desk & wooden cabinetry</span>
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-deep-ocean/10 font-sans text-[9px] md:text-[10px] font-bold tracking-widest text-deep-ocean/70 uppercase">Quiet mountainside setting</span>
            </div>

            <button
              onClick={() => window.dispatchEvent(new Event('open-booking'))}
              className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest text-deep-ocean uppercase hover:text-coral-accent transition-colors group cursor-pointer"
            >
              Check Availability
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

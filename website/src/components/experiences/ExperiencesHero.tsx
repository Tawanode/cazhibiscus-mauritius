"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperiencesHero() {
  return (
    <section className="relative h-auto pt-[320px] pb-10 md:pt-0 md:h-[800px] flex items-end md:pb-56 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 md:from-ocean-white md:via-ocean-white/20 to-transparent z-10" />
        <motion.div 
          className="w-full h-full relative"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/images/experiences_hero.jpg"
            alt="Scenic mountain scenery in Ella, Sri Lanka"
            fill
            className="object-cover object-[65%_center] md:object-center"
            priority
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hidden md:block font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-black mb-4">
            Curated Moments
          </span>
          <h1 className="font-display text-[44px] md:text-7xl text-white md:text-black italic leading-[1.05] md:leading-tight mb-4 md:mb-6">
            <span className="bg-transparent md:bg-white md:px-2 md:box-decoration-clone">
              Ella, At a Slower Pace
            </span>
          </h1>
          <p className="md:hidden font-sans text-[17px] leading-[1.5] text-white/90 max-w-xl">
            Begin with fresh mountain air from your balcony. Explore Ella&apos;s trails by day, then return to Scenic View – Ella for a quiet, relaxed evening.
          </p>
          <p className="hidden md:block font-sans text-lg text-black max-w-xl leading-relaxed">
            Mornings begin with fresh mountain air and panoramic views from your balcony. Afternoons can be spent exploring Ella&apos;s trails, waterfalls, and tea country. And when the day winds down, return to the quiet hills of Kumbalwela and enjoy a relaxed evening away from the crowds.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

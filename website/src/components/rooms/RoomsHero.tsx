"use client";

import { motion } from "framer-motion";

export default function RoomsHero() {
  return (
    <section className="pt-40 pb-16 bg-ocean-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <span className="font-sans text-xs font-bold tracking-widest text-deep-ocean/60 uppercase mb-6 block">
              Accommodation
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-deep-ocean leading-tight">
              Find Your Perfect <br /> Mountain Retreat
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/3 mb-4"
          >
            <p className="font-sans italic text-deep-ocean/80 text-sm leading-relaxed">
              &ldquo;Choose a comfortable room designed for relaxing after a day exploring Ella&apos;s beautiful landscapes.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

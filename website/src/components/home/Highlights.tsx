"use client";

import { motion } from "framer-motion";
import { Mountain, Utensils, Wifi, Heart, Sun } from "lucide-react";

const highlights = [
  { icon: Mountain, mobileLabel: "Mountain Views", desktopLabel: "Panoramic Mountain Views" },
  { icon: Sun, mobileLabel: "Balcony & Terrace", desktopLabel: "Private Balcony & Terrace" },
  { icon: Heart, mobileLabel: "Family Hospitality", desktopLabel: "Family-Run Hospitality" },
  { icon: Utensils, mobileLabel: "On-Site Restaurant", desktopLabel: "On-Site Restaurant" },
  { icon: Wifi, mobileLabel: "Free Wi-Fi & Parking", desktopLabel: "Free Wi-Fi & Parking" },
];

export default function Highlights() {
  return (
    <section className="bg-ocean-white py-6 md:py-12 border-b border-warm-sand/40 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-x-2.5 sm:gap-x-4 gap-y-2.5 sm:gap-y-3.5 md:gap-8 lg:gap-12 px-5 min-[390px]:px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center space-x-2 sm:space-x-2.5 md:space-x-3 bg-white/70 md:bg-transparent p-2.5 sm:p-3 md:p-0 rounded-xl md:rounded-none border border-warm-sand/40 md:border-none shadow-xs md:shadow-none md:shrink-0 ${
                index === 4 ? "col-span-2 justify-center md:justify-start md:col-auto" : ""
              }`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <item.icon className="text-lagoon-blue shrink-0 w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" strokeWidth={1.75} />
              <span className="font-heading text-[13px] min-[360px]:text-[14px] sm:text-[15px] md:text-lg text-deep-ocean font-medium leading-snug md:whitespace-nowrap">
                <span className="md:hidden">{item.mobileLabel}</span>
                <span className="hidden md:inline">{item.desktopLabel}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

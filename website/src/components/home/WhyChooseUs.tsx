"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mountain, Map, Camera, Droplets } from "lucide-react";

const reasons = [
  {
    title: "Ella Rock",
    description: "Famous panoramic hiking peak overlooking the central highland vistas of Ella.",
    icon: Mountain,
    image: "/images/ella_rock.jpg"
  },
  {
    title: "Little Adam's Peak",
    description: "A popular scenic trek offering sweeping mountain views over Ella's valleys.",
    icon: Map,
    image: "/images/little_adams_peak.jpg"
  },
  {
    title: "Nine Arch Bridge",
    description: "Iconic historic railway viaduct set amid emerald tea hills and forest.",
    icon: Camera,
    image: "/images/nine_arch_bridge.jpg"
  },
  {
    title: "Ravana Falls",
    description: "Spectacular cascading waterfall in Ella, steeped in local heritage.",
    icon: Droplets,
    image: "/images/ravana_falls.jpg"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-warm-sand/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-sans font-semibold tracking-widest text-deep-ocean uppercase mb-4 block">
            Mountain Views & Surroundings
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-deep-ocean mb-6">
            Discover the Beauty of Ella
          </h2>
          <div className="font-sans text-base md:text-lg text-dark-text/80 max-w-3xl mx-auto space-y-4 mb-8 leading-relaxed">
            <p>
              From the peaceful surroundings of Scenic View – Ella, experience the extraordinary landscapes that make Sri Lanka&apos;s hill country so special. Watch morning mist drift across the mountains, enjoy the greenery from your private terrace, and plan a day exploring the region&apos;s famous viewpoints, trails, and scenic attractions.
            </p>
            <p>
              Ella Rock, Little Adam&apos;s Peak, and the iconic Nine Arch Bridge are among the area&apos;s well-known highlights. Our hosts can help you plan your visit and arrange local transport where available.
            </p>
          </div>
          <div className="w-24 h-1 bg-golden-sunset mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative h-96 rounded-[24px] overflow-hidden cursor-pointer ${
                ["Fast Free Wi-Fi", "Family Friendly", "Long Stay Friendly"].includes(reason.title) ? "hidden md:block" : ""
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={reason.image} 
                  alt={reason.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-ocean-white z-10">
                <div className="mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <reason.icon size={32} className="mb-4 text-golden-sunset" />
                  <h3 className="font-heading text-2xl mb-2">{reason.title}</h3>
                  <p className="font-sans text-sm text-ocean-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore Ella CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 px-8 py-4 bg-deep-ocean text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full hover:bg-deep-ocean/90 transition-all hover:scale-105 shadow-md"
          >
            Explore Ella
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

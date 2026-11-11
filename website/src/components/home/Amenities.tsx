"use client";

import { motion } from "framer-motion";
import { Wifi, Mountain, Coffee, Bed, Sun, Heart, Utensils, Wind } from "lucide-react";

const amenities = [
  { title: "Panoramic Mountain Views", description: "Enjoy elevated views of Ella's lush highlands stretching toward Ella Rock and Little Adam's Peak.", icon: Mountain },
  { title: "Private Balcony or Terrace", description: "Relax outdoors and take in the changing mountain scenery from your room.", icon: Sun },
  { title: "Family-Run Hospitality", description: "Experience a personal welcome and helpful local recommendations from your hosts.", icon: Heart, hideOnMobile: true },
  { title: "Comfortable Guest Rooms", description: "Choose from double, twin, and larger family accommodation configurations.", icon: Bed, hideOnMobile: true },
  { title: "On-Site Restaurant", description: "Enjoy freshly prepared Sri Lankan, Asian, and international dishes.", icon: Utensils },
  { title: "Breakfast Options", description: "Start your day with continental, Sri Lankan à la carte, or full English/Irish breakfast options.", icon: Coffee },
  { title: "Free Wi-Fi & Parking", description: "Stay connected throughout your visit with complimentary Wi-Fi and convenient on-site parking.", icon: Wifi },
  { title: "Air-Conditioned Rooms", description: "Enjoy a comfortable indoor environment and peaceful garden setting overlooking surrounding hills.", icon: Wind, hideOnMobile: true },
];

export default function Amenities() {
  return (
    <section className="py-24 bg-ocean-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="text-[11px] font-sans font-semibold tracking-widest text-deep-ocean uppercase mb-4 block">
            Property Highlights
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-deep-ocean mb-4">
            Everything You Need for a Relaxing Stay
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-white rounded-3xl p-8 flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 ${
                amenity.hideOnMobile ? "hidden md:flex" : "flex"
              }`}
            >
              <amenity.icon className="text-deep-ocean mb-6" size={32} strokeWidth={1.5} />
              <h3 className="font-sans font-semibold text-deep-ocean text-lg mb-3">{amenity.title}</h3>
              <p className="font-sans text-sm text-dark-text/70 leading-relaxed max-w-[200px]">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

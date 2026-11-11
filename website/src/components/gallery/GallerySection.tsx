"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All Moments", "Rooms", "Views", "Balcony & Terrace", "Attractions"];

const galleryData = [
  { id: 1, src: "/images/the_bedroom.jpg", category: "Rooms", alt: "Comfortable guest room with double bed at Scenic View – Ella", aspect: "aspect-[4/3]" },
  { id: 2, src: "/images/mountain_view_balcony.jpg", category: "Balcony & Terrace", alt: "Mountain views from a private balcony at Scenic View – Ella", aspect: "aspect-[4/5]" },
  { id: 3, src: "/images/about_sanctuary.jpg", category: "Views", alt: "Exterior of Scenic View – Ella guesthouse surrounded by green hills", aspect: "aspect-[4/3]" },
  { id: 4, src: "/images/the_bathroom.jpg", category: "Rooms", alt: "Private bathroom with modern fittings at Scenic View – Ella", aspect: "aspect-square" },
  { id: 5, src: "/images/nine_arch_bridge.jpg", category: "Attractions", alt: "Iconic Nine Arch Bridge in Ella", aspect: "aspect-[4/5]" },
  { id: 6, src: "/images/the_balcony.jpg", category: "Balcony & Terrace", alt: "Private terrace overlooking mist-covered mountains", aspect: "aspect-[4/5]" },
  { id: 7, src: "/images/about_hero.jpg", category: "Rooms", alt: "Thoughtfully appointed guest room overlooking Ella highlands", aspect: "aspect-[4/3]" },
  { id: 8, src: "/images/hillora_ella_hero.jpg", category: "Views", alt: "Panoramic mountain view across Ella's central highlands", aspect: "aspect-square" },
  { id: 9, src: "/images/little_adams_peak.jpg", category: "Attractions", alt: "Scenic trail at Little Adam's Peak in Ella", aspect: "aspect-[4/5]" },
  { id: 10, src: "/images/ella_rock.jpg", category: "Attractions", alt: "Ella Rock landmark towering above the lush highlands", aspect: "aspect-[4/3]" },
  { id: 11, src: "/images/experiences_hero.jpg", category: "Views", alt: "Peaceful mountainside setting of Scenic View – Ella in Kumbalwela", aspect: "aspect-[4/3]" },
  { id: 12, src: "/images/ravana_falls.jpg", category: "Attractions", alt: "Scenic Ravana Falls cascading through Ella", aspect: "aspect-[4/5]" },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All Moments");

  const filteredImages = galleryData.filter(
    (img) => activeCategory === "All Moments" || img.category === activeCategory
  );

  return (
    <section className="pb-32 bg-ocean-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-xs font-sans tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? "bg-deep-ocean text-white shadow-md"
                  : "bg-white text-dark-text/70 border border-warm-sand/30 hover:border-deep-ocean/30 hover:text-deep-ocean"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={img.id}
                className="break-inside-avoid relative rounded-3xl overflow-hidden group cursor-pointer"
              >
                <div className={`relative w-full ${img.aspect}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-deep-ocean/0 group-hover:bg-deep-ocean/10 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

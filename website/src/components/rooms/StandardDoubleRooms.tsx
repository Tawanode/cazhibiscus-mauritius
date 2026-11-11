"use client";

import { motion } from "framer-motion";

const rooms = [
  {
    title: "Double Room",
    image: "/images/the_bedroom.jpg",
    alt: "Comfortable guest room with double bed at Scenic View – Ella",
    description: "Comfortable double-bed accommodation with air conditioning, private bathroom, free Wi-Fi, work desk, wooden cabinetry, and private balcony with mountain views.",
    features: ["Double Bed", "Mountain View Balcony", "Air Conditioning", "Free Wi-Fi", "Private Bathroom", "Work Desk"]
  },
  {
    title: "Twin Room",
    image: "/images/about_hero.jpg",
    alt: "Twin-bed guest room overlooking mountains at Scenic View – Ella",
    description: "Twin-bed accommodation with air conditioning, private bathroom, free Wi-Fi, work desk, wooden cabinetry, and private balcony or terrace with mountain views.",
    features: ["Twin Beds", "Mountain View Balcony", "Air Conditioning", "Free Wi-Fi", "Private Bathroom", "Work Desk"]
  },
  {
    title: "Family Room / Larger Room",
    image: "/images/mountain_view_balcony.jpg",
    alt: "Spacious family room with mountain views at Scenic View – Ella",
    description: "Larger accommodation configuration suitable for families or guests traveling together, with private bathroom, air conditioning, free Wi-Fi, and scenic terrace.",
    features: ["Family Layout", "Private Balcony / Terrace", "Air Conditioning", "Free Wi-Fi", "Private Bathroom", "Work Desk"]
  },
];

export default function StandardDoubleRooms() {
  return (
    <section className="py-24 bg-ocean-white/30">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-sans font-semibold tracking-widest text-deep-ocean uppercase mb-4 block">
            Our Accommodations
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-deep-ocean mb-6">
            Find Your Perfect Mountain Retreat
          </h2>
          <p className="font-sans text-base text-dark-text/70 max-w-2xl mx-auto leading-relaxed">
            Choose a comfortable room designed for relaxing after a day exploring Ella&apos;s beautiful landscapes. All four rooms feature private mountain-view balconies or terraces, air conditioning, and complimentary Wi-Fi.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={room.image}
                  alt={room.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <span className="font-sans text-[8px] font-bold tracking-widest text-deep-ocean uppercase">Scenic View – Ella</span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="font-display text-2xl text-deep-ocean">{room.title}</h3>
                </div>
                
                <p className="font-sans text-sm text-dark-text/70 leading-relaxed mb-6">
                  {room.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {room.features.map((feat, fIdx) => (
                    <span key={fIdx} className="bg-ocean-white text-deep-ocean/80 text-[10px] font-sans font-medium px-2.5 py-1 rounded-full border border-deep-ocean/10">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

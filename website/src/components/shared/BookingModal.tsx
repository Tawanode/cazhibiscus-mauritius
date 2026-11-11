"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
  });

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#book") {
        setIsOpen(true);
        // Clean up the URL hash without triggering a reload
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };

    // Check on mount
    checkHash();

    // Listen for hash changes
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // Alternative trigger mechanism via custom event
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-booking", handleOpen);
    return () => window.removeEventListener("open-booking", handleOpen);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*New Booking Request - Scenic View – Ella*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Check-in:* ${formData.checkIn}%0A*Check-out:* ${formData.checkOut}%0A*Guests:* ${formData.adults} Adults, ${formData.children} Children`;
    
    // Replace with actual hotel WhatsApp number (including country code, no +)
    const whatsappNumber = "94716300888"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: "100%", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: "100%", scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[101] bg-[#FAF9F6] w-full md:w-[500px] h-full md:h-auto md:max-h-[90vh] md:rounded-[24px] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-[#E1E5E3]">
              <h2 className="font-display text-3xl text-deep-ocean">Book Your Stay</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-black/5 rounded-full transition-colors text-deep-ocean"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6 overflow-y-auto flex-grow custom-scrollbar" data-lenis-prevent="true">
              <form id="booking-form" onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-sans text-sm font-bold text-deep-ocean mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E1E5E3] bg-transparent focus:outline-none focus:border-deep-ocean focus:ring-1 focus:ring-deep-ocean transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-bold text-deep-ocean mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E1E5E3] bg-transparent focus:outline-none focus:border-deep-ocean focus:ring-1 focus:ring-deep-ocean transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-bold text-deep-ocean mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E1E5E3] bg-transparent focus:outline-none focus:border-deep-ocean focus:ring-1 focus:ring-deep-ocean transition-all font-sans"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-sm font-bold text-deep-ocean mb-2">
                      Check In
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      required
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E1E5E3] bg-transparent focus:outline-none focus:border-deep-ocean focus:ring-1 focus:ring-deep-ocean transition-all font-sans text-dark-text/80"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-bold text-deep-ocean mb-2">
                      Check Out
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      required
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E1E5E3] bg-transparent focus:outline-none focus:border-deep-ocean focus:ring-1 focus:ring-deep-ocean transition-all font-sans text-dark-text/80"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-sm font-bold text-deep-ocean mb-2">
                      Adults
                    </label>
                    <input
                      type="number"
                      name="adults"
                      min="1"
                      required
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E1E5E3] bg-transparent focus:outline-none focus:border-deep-ocean focus:ring-1 focus:ring-deep-ocean transition-all font-sans text-center"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-bold text-deep-ocean mb-2">
                      Children
                    </label>
                    <input
                      type="number"
                      name="children"
                      min="0"
                      required
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E1E5E3] bg-transparent focus:outline-none focus:border-deep-ocean focus:ring-1 focus:ring-deep-ocean transition-all font-sans text-center"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="p-6 bg-[#FAF9F6] border-t border-[#E1E5E3]">
              <button
                type="submit"
                form="booking-form"
                className="w-full py-4 bg-[#0a3a44] text-white rounded-xl font-sans font-bold text-base hover:bg-deep-ocean transition-colors shadow-lg"
              >
                Request Booking
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

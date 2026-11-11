"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center space-y-2.5 sm:space-y-3.5 pb-[env(safe-area-inset-bottom)]"
        >
          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center bg-ocean-white text-deep-ocean rounded-full shadow-md border border-warm-sand/50 hover:bg-warm-sand transition-colors active:scale-95 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/94716300888?text=Hello%20Scenic%20View%20%E2%80%93%20Ella%2C%20I%20would%20like%20to%20know%20more%20about%20staying%20at%20your%20property."
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

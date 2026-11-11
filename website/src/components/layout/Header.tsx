"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ROOMS", href: "/rooms" },
  { name: "GALLERY", href: "/gallery" },
  { name: "EXPERIENCES", href: "/experiences" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous === undefined) return;
    
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F1F3F2] shadow-sm border-b border-[#E1E5E3]"
    >
      <div className="container mx-auto px-6 py-3 md:py-4 max-w-7xl flex items-center justify-between">
        <Link href="/" className="relative z-50 flex items-center gap-3">
          <div className="tracking-wide text-deep-ocean font-medium flex flex-col justify-center">
            <span className="font-display text-[23px] leading-[1.1] md:text-[32px] lg:text-[38px] md:leading-[1]">Scenic View</span>
            {/* Desktop Subtitle */}
            <span className="hidden md:block font-sans text-[11px] lg:text-[13px] uppercase tracking-[0.25em] lg:tracking-[0.3em] mt-1">ELLA • SRI LANKA</span>
            {/* Mobile Subtitle */}
            <span className="md:hidden font-sans text-[10px] uppercase tracking-widest mt-0.5 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-deep-ocean"></span>
              Ella
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-[11px] lg:text-[13px] font-sans font-semibold tracking-widest transition-colors whitespace-nowrap",
                    isActive ? "text-deep-ocean" : "text-deep-ocean/70 hover:text-deep-ocean"
                  )}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-deep-ocean"
                  />
                )}
              </motion.div>
            );
          })}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.dispatchEvent(new Event('open-booking'))}
              className="px-4 py-2 lg:px-6 lg:py-2.5 bg-deep-ocean text-white font-sans text-[10px] lg:text-xs font-semibold tracking-widest rounded-full hover:bg-deep-ocean/90 transition-colors shadow-sm ml-2 lg:ml-4 inline-block cursor-pointer whitespace-nowrap"
            >
              BOOK NOW
            </button>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 text-deep-ocean"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-ocean-white flex flex-col items-center justify-center space-y-8 z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-3xl text-deep-ocean hover:text-golden-sunset transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.dispatchEvent(new Event('open-booking'));
              }}
              className="px-8 py-4 bg-deep-ocean text-white font-sans text-sm font-semibold tracking-widest rounded-full hover:bg-deep-ocean/90 transition-colors mt-4 cursor-pointer"
            >
              BOOK NOW
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

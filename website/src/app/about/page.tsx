import AboutHero from "@/components/about/AboutHero";
import HotelVibe from "@/components/about/HotelVibe";
import CorePhilosophy from "@/components/about/CorePhilosophy";
import Sustainability from "@/components/about/Sustainability";
import Testimonials from "@/components/about/Testimonials";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us | Scenic View – Ella | Mountain View Guesthouse",
  description: "Discover the story of Scenic View – Ella, a welcoming family-run boutique guesthouse nestled in the tranquil highlands of Ella, Sri Lanka.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-ocean-white">
      <AboutHero />
      <HotelVibe />
      <CorePhilosophy />
      <Sustainability />
      <Testimonials />
      <AboutCTA />
    </main>
  );
}

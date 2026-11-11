import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import Storytelling from "@/components/home/Storytelling";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Amenities from "@/components/home/Amenities";
import PoolFeature from "@/components/home/PoolFeature";
import GuestMemories from "@/components/home/GuestMemories";
import Location from "@/components/home/Location";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Highlights />
      <Storytelling />
      <WhyChooseUs />
      <Amenities />
      <PoolFeature />
      <GuestMemories />
      <Location />
    </div>
  );
}

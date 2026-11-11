import RoomsHero from "@/components/rooms/RoomsHero";
import KitchenetteSuites from "@/components/rooms/KitchenetteSuites";
import GardenViewSanctuaries from "@/components/rooms/GardenViewSanctuaries";
import StandardDoubleRooms from "@/components/rooms/StandardDoubleRooms";

export const metadata = {
  title: "Rooms & Accommodation | Scenic View – Ella",
  description: "Find your perfect mountain retreat. Choose from double, twin, and family rooms with private mountain-view balconies, air conditioning, and free Wi-Fi at Scenic View – Ella.",
};

export default function RoomsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen relative pb-24">
      <RoomsHero />
      <KitchenetteSuites />
      <GardenViewSanctuaries />
      <StandardDoubleRooms />
    </div>
  );
}

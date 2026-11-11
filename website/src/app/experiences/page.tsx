import ExperiencesHero from "@/components/experiences/ExperiencesHero";
import SignatureActivities from "@/components/experiences/SignatureActivities";
import Itinerary from "@/components/experiences/Itinerary";
import CTASection from "@/components/experiences/CTASection";

export const metadata = {
  title: "Explore Ella & Activities | Scenic View – Ella",
  description: "Discover the beauty of Ella, Sri Lanka. Explore iconic attractions including Ella Rock, Little Adam's Peak, Nine Arch Bridge, and Ravana Falls from Scenic View – Ella.",
};

export default function Experiences() {
  return (
    <main className="min-h-screen bg-ocean-white">
      <ExperiencesHero />
      <SignatureActivities />
      <Itinerary />
      <CTASection />
    </main>
  );
}

import ContactHero from "@/components/contact/ContactHero";
import ContactChannels from "@/components/contact/ContactChannels";
import ContactForm from "@/components/contact/ContactForm";
import LocationExplorer from "@/components/contact/LocationExplorer";
import FAQ from "@/components/contact/FAQ";

export const metadata = {
  title: "Contact Us | Scenic View – Ella",
  description: "Get in touch with Scenic View – Ella. Contact our family-run guesthouse in Kumbalwela, Ella, Sri Lanka for room inquiries, directions, and reservations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ocean-white">
      <ContactHero />
      <ContactChannels />
      <ContactForm />
      <LocationExplorer />
      <FAQ />
    </main>
  );
}

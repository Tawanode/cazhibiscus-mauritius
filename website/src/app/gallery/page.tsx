import GalleryHero from "@/components/gallery/GalleryHero";
import GallerySection from "@/components/gallery/GallerySection";

export const metadata = {
  title: "Gallery | Scenic View – Ella",
  description: "Explore authentic photos of Scenic View – Ella, featuring our comfortable guest rooms, private mountain-view balconies, peaceful gardens, and panoramic Ella highlands.",
};

export default function Gallery() {
  return (
    <main>
      <GalleryHero />
      <GallerySection />
    </main>
  );
}

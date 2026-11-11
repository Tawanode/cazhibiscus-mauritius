import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/layout/SmoothScroller";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import BookingModal from "@/components/shared/BookingModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scenicviewella.com"),
  title: "Scenic View – Ella | Mountain View Guesthouse",
  description: "Stay at Scenic View – Ella, a family-run mountain-view guesthouse with comfortable rooms, private balconies, breakfast and peaceful highland scenery.",
  keywords: "Scenic View Ella, Scenic View Ella Sri Lanka, guesthouse in Ella Sri Lanka, accommodation in Ella, mountain view accommodation Ella, Ella boutique guesthouse, Kumbalwela hotel, hotels near Ella Rock, Ella Sri Lanka stay",
  openGraph: {
    type: "website",
    title: "Scenic View – Ella | Mountain View Guesthouse",
    description: "A peaceful family-run guesthouse in Ella, Sri Lanka, offering comfortable rooms and beautiful mountain views.",
    locale: "en_US",
    images: [
      {
        url: "/images/about_sanctuary.jpg", 
        alt: "Exterior of Scenic View – Ella guesthouse surrounded by green hills",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scenic View – Ella | Mountain View Guesthouse",
    description: "Stay in comfortable rooms with private mountain views and warm family hospitality in Ella, Sri Lanka.",
    images: ["/images/about_sanctuary.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Scenic View – Ella",
  "description": "A peaceful family-run boutique guesthouse nestled in the hills of Ella, Sri Lanka, with comfortable rooms, private mountain-view balconies, on-site restaurant, and authentic family hospitality.",
  "url": "https://scenicviewella.com",
  "telephone": "+94716300888",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No. 12/A Mahamewanawa Road",
    "addressLocality": "Kumbalwela, Ella",
    "postalCode": "90000",
    "addressCountry": "LK"
  },
  "priceRange": "LKR 4,278",
  "numberOfRooms": 4,
  "aggregateRating": [
    {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "reviewCount": "30",
      "description": "Google rating: 4.9/5 from 30 reviews"
    },
    {
      "@type": "AggregateRating",
      "ratingValue": "9.6",
      "bestRating": "10",
      "reviewCount": "13",
      "description": "Booking.com score: 9.6/10 from 13 reviews"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${manrope.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-ocean-white text-dark-text font-sans selection:bg-golden-sunset selection:text-white">
        <SmoothScroller>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingCTA />
          <BookingModal />
        </SmoothScroller>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PROFILE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-shawnz.vercel.app"),
  alternates: { canonical: "/" },
  title: "Shawn Ethan Varughese · Software Engineer",
  description:
    "Software engineer in Kuala Lumpur. Projects: AkuaVerse, an aquarium marketplace with a 3D tank builder; LWICMS, an inventory system for fish shops; RescueNet, a disaster relief platform; and a deep learning water quality classifier.",
  authors: [{ name: "Shawn Ethan Varughese" }],
  openGraph: {
    title: "Shawn Ethan Varughese · Software Engineer",
    description: "Selected work, experience and contact details.",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

/** Structured data so search engines can show the name, role and profiles together. */
const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: PROFILE.role,
  url: PROFILE.site,
  email: `mailto:${PROFILE.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Kuala Lumpur", addressCountry: "MY" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Asia Pacific University of Technology & Innovation" },
    { "@type": "CollegeOrUniversity", name: "De Montfort University" },
  ],
  sameAs: [PROFILE.linkedin, PROFILE.github],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-bg text-fg">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON) }} />
        {children}
      </body>
    </html>
  );
}

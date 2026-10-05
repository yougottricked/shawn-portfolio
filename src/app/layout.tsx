import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shawn Ethan Varughese | Systems Architect & Design Engineer",
  description:
    "Personal portfolio of Shawn Ethan Varughese. High-concurrency retail commerce, empirical deep learning for aquaculture IoT, and cloud-native serverless disaster logistics.",
  authors: [{ name: "Shawn Ethan Varughese" }],
  keywords: [
    "Shawn Ethan Varughese",
    "Software Engineer",
    "Design Engineer",
    "Distributed Systems",
    "Deep Learning",
    "LWICMS",
    "AquaPonds",
    "RescueNet",
    "Malaysia",
    "Next.js",
  ],
  openGraph: {
    title: "Shawn Ethan Varughese | Systems Architect & Design Engineer",
    description:
      "Engineering resilient distributed platforms, empirical AI systems, and tactile human-grade interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-sky-500/25 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}

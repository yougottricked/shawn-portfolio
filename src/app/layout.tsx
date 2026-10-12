import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shawn Ethan Varughese · Software Engineer",
  description:
    "Software engineer in Kuala Lumpur. Projects: LWICMS, an inventory system for fish shops; RescueNet, a disaster relief platform; and a deep learning water quality classifier.",
  authors: [{ name: "Shawn Ethan Varughese" }],
  openGraph: {
    title: "Shawn Ethan Varughese · Software Engineer",
    description: "Selected work, experience and contact details.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-bg text-fg">{children}</body>
    </html>
  );
}

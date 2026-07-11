import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raaghav-os.vercel.app"),
  title: "RAAGHAV OS — Senior Product Manager · Systems Thinker · AI Builder",
  description:
    "The personal operating system of Raaghav S H — Senior Product Manager. 7+ years building 0-to-1 B2B platforms, a ₹730 Cr RFQ pipeline, a filed patent, and AI-native products.",
  openGraph: {
    title: "RAAGHAV OS",
    description:
      "Not a portfolio. An operating system. Explore how Raaghav thinks, builds, and solves — with Raaga, his AI assist.",
    type: "website",
    url: "https://raaghav-os.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAAGHAV OS",
    description:
      "Not a portfolio. An operating system. 0→1 platforms, ₹730 Cr pipelines, AI products shipped solo.",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

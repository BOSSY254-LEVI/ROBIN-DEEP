import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Discover Canada with Robin Deep - Authentic Travel Experiences",
  description: "Experience Canada's true beauty through local eyes. Sustainable travel, authentic adventures, and unforgettable stories from a 10+ year Canadian travel expert.",
  keywords: ["Canada travel", "authentic experiences", "sustainable tourism", "Canadian adventures", "travel guide", "Robin Deep"],
  authors: [{ name: "Robin Deep" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Discover Canada with Robin Deep",
    description: "Authentic Canadian travel experiences through local eyes",
    url: "https://robin-deep.vercel.app",
    siteName: "Robin Deep Travel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Canada with Robin Deep",
    description: "Authentic Canadian travel experiences through local eyes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

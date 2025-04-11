import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "@/components/Footer";
import "./global.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: {
    default: "G-Shock",
    template: "%s | G-Shock",
  },
  description: "G-Shock",
};

const din = localFont({
  src: "./fonts/DIN2014-Regular.ttf",
  variable: "--font-din-2014",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html className="h-full" lang="en">
        <body className={`h-full ${din.className}`}>
          <Header />
          {children}
          <Footer />
          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}

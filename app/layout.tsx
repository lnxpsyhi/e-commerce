import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./global.css";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "@/components/Footer";
import CarouselComponent from "@/components/CarouselComponent";

export const metadata: Metadata = {
  title: {
    default: "G-Shock",
    template: "%s | G-Shock",
  },
  description: "G-Shock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html className="h-full" lang="en">
        <body className="h-full">
          <Header />
          <CarouselComponent />
          {children}
          <Footer />
          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}

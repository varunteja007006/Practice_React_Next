import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import { cn } from "@/lib/utils";
import Provider from "./Provider";

import { Toaster } from "@/components/ui/toaster";
// Import css files for react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

const FooterMain = dynamic(() => import("@/components/footer/FooterMain"));

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VTK",
  description: "Varun's Portfolio & his react practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-gradient-to-tl from-purple-950 from-5% via-black via-90% to-purple-950 scroll-smooth",
          inter.className
        )}
      >
        <Provider>
          <main>
            <Navbar />
            <div className="px-4 py-2 text-white min-h-screen mt-2">
              {children}
            </div>
          </main>
          <Toaster />
        </Provider>
        <FooterMain />
      </body>
    </html>
  );
}

import * as React from "react";

import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import Provider from "./providers";
import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "./_components/nav/Navbar";
import Footer from "./_components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import ProgressScroll from "./react-next-projects/progress-on-scroll/page";

const comicNeue = Comic_Neue({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varun Teja",
  description: "Practice React and Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
        <body
          className={`!md:min-w-[99vw] min-w-[300px]  bg-blue-50 ${comicNeue.className} scroll-smooth
        dark:bg-gradient-to-tl dark:from-purple-950 from-5% dark:via-black dark:via-90% dark:to-purple-950
        transition-colors delay-100 duration-100
        `}
        ><ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
          <Provider>
            <React.Fragment>
              <ProgressScroll
                divStyles="hidden"
                progressStyles="dark:bg-purple-800 bg-blue-300 h-1.5"
              />
              <Navbar />
              <main className="min-h-[calc(100vh-20rem)] w-full">
                {children}
              </main>
              <Footer />
            </React.Fragment>
          </Provider>
          <Toaster />
 </ThemeProvider>
        </body>
     
    </html>
  );
}

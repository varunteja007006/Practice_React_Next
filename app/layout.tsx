import * as React from "react";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Provider from "./providers";
import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "./_components/nav/Navbar";
import Footer from "./_components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import ProgressScroll from "./react-next-projects/progress-on-scroll/page";

const openSan = Open_Sans({ subsets: ["latin"] });

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
        className={`w-full min-w-[300px]  bg-blue-50 ${openSan.className} scroll-smooth
          dark:bg-gradient-to-tl dark:from-purple-950 from-5% dark:via-black dark:via-90% dark:to-purple-950
          `}
      >
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <React.Fragment>
              <ProgressScroll
                divStyles="hidden"
                progressStyles="dark:bg-purple-800 bg-blue-300 h-1.5"
              />
              <Navbar />
              <div className="min-h-[calc(100vh-20rem)]">{children}</div>
              <Footer />
            </React.Fragment>
          </ThemeProvider>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}

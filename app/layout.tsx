import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/nav/Navbar";
import Footer from "./_components/footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Provider from "./providers";

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
            <main className="min-h-[calc(100vh-10rem)]">
              <Navbar />
              <div className="h-16"></div>
              <div className="min-h-[calc(100vh-22rem)]">{children}</div>
              <Footer />
            </main>
            <Toaster />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

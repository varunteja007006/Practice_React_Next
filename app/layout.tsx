import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/root/nav/Navbar";
import Footer from "@/components/root/footer/Footer";
import { ThemeProvider } from "@/components/theme-provider";

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
        className={`w-full min-w-[300px] dark:bg-black bg-blue-50 ${openSan.className} scroll-smooth`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-[calc(100vh-10rem)] h-screen overflow-auto">
            <Navbar />
            <div className="h-16"></div>
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

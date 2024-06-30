import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/root/nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Next App",
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
        className={`min-h-screen w-full min-w-[300px] bg-blue-50 ${inter.className}`}
      >
        <Navbar />
        <main className="p-5">{children}</main>
      </body>
    </html>
  );
}

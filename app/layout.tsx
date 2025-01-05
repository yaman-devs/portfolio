import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";

const geist = Geist({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yaman Nayal | Portfolio",
  description: "Yaman's Porfolio Site built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-white scroll-smooth">
      <body className={`${geist.className} antialiased bg-slate-950  `}>
        <Nav />
        <main className="container mx-auto px-4 sm:px-12 md:px-20 lg:px-32 ">
          {children}
        </main>
        <footer className="flex justify-center p-4 bg-slate-900 text-slate-400 text-sm w-full mt-16">
          &copy; {new Date().getFullYear()} Yaman Nayal - All rights reserved
        </footer>
      </body>
    </html>
  );
}

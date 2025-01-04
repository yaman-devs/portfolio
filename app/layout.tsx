import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} antialiased bg-slate-950  `}>
        <main className="container mx-auto px-4">
          <Nav />
          {children}
        </main>
        <footer className="flex justify-center p-4 bg-slate-900 text-slate-400 text-sm w-full mt-16">
          &copy; {new Date().getFullYear()} Yaman Nayal - All rights reserved
        </footer>
      </body>
    </html>
  );
}

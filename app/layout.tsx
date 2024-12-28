import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ReactLenis, useLenis } from "lenis/react";

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
    <html lang="en">
      <body className={`${roboto.variable} antialiased bg-slate-950 `}>
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}

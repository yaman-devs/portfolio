"use client";
import Navbar from "./components/navbar";
import "../styles/globals.css";
import { Roboto } from "next/font/google";
import Footer from "./components/footer";
import { ReactLenis } from "lenis/react";

const roborto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Yaman's Portfolio",
//   description: "My Portfolio",
// };\

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Yaman's Portfolio</title>
      </head>

      <ReactLenis root>
        <body className={roborto.className + " bg-slate-950 text-amber-50"}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}

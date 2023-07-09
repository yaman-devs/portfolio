import Navbar from "./components/navbar";
import "../styles/globals.scss";
import { Roboto } from "next/font/google";

const roborto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Yaman's Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roborto.className + " bg-background text-text"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

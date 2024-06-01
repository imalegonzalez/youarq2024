
import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Navbar from "./components/NavBar";
import { Toaster } from "@/components/ui/toaster"
import Footer from "./components/Footer";
config.autoAddCss = false; // Evita la inyección automática de CSS

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youarq - Remodelaciones bien hechas.",
  description: "Hacelo con un profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar/>
        {children}
        <Toaster />
        <Footer/>
      </body>
    </html>
  );
}

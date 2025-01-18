"use client"
import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import WhatsappLink from "./components/WhatsappLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp as faWhatsappIcon } from "@fortawesome/free-brands-svg-icons";



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
        <NavBar/>
        {children}
        <Toaster />
        <Footer/>
    
          <WhatsappLink visible={false} className="h-16 w-16 fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50 bg-green-500 rounded-full p-4 flex justify-center items-center shadow-lg shadow-green-500/50 hover:bg-green-400 transition-all duration-200 hover:scale-105  animate-scale-in-bounce">
            <FontAwesomeIcon icon={faWhatsappIcon as any} className="text-white text-xl" />
          </WhatsappLink>
     
      </body>
    </html>
  );
}

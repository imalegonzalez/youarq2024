import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import WhatsappButton from "./components/WhatsappButton";


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
        <WhatsappButton />
      </body>
    </html>
  );
}

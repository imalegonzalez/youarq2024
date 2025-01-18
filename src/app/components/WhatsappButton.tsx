"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp as faWhatsappIcon } from "@fortawesome/free-brands-svg-icons";
import WhatsappLink from "./WhatsappLink";

export default function WhatsappButton() {
  return (
    <WhatsappLink 
      visible={false} 
      className="h-16 w-16 fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50 bg-green-500 rounded-full p-4 flex justify-center items-center shadow-lg shadow-green-500/50 hover:bg-green-400 transition-all duration-200 hover:scale-105 animate-scale-in-bounce"
    >
      <FontAwesomeIcon icon={faWhatsappIcon as any} className="text-white text-xl" />
    </WhatsappLink>
  );
}
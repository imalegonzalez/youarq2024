"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

interface WhatsappLinkProps {
  className?: string;
  children?: React.ReactNode;
  visible?: boolean;
}

const WhatsappLink: React.FC<WhatsappLinkProps> = ({ className, children, visible = true }) => {
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 6000);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  const whatsappLink = "https://api.whatsapp.com/send?phone=";
  const whatsappNumber = "5491133266363";
  const origin = window.location.href;
  const whatsappMessage = `Hola, visité tu pagina ${origin} y quisiera más información sobre como puedo empezar con mi remodelación.`;
  
  return (
    <>
      {isVisible && (
        <Link target="_blank" href={`${whatsappLink}${whatsappNumber}&text=${whatsappMessage}`} className={className}>
          {children}
        </Link>
      )}
    </>
  );
}

export default WhatsappLink;
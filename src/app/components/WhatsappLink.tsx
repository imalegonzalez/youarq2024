"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface WhatsappLinkProps {
  className?: string;
  children?: React.ReactNode;
  visible?: boolean;
}

const WhatsappLink: React.FC<WhatsappLinkProps> = ({ 
  className = "", 
  children,
  visible = true 
}) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 6000);
      
      return () => clearTimeout(timeout);
    }
  }, [visible, pathname]);

  const message = encodeURIComponent(
    `¡Hola! Visité https://youarq.com${pathname} y me gustaría recibir más información sobre sus servicios de remodelación.`
  );
  const whatsappUrl = `https://wa.me/5491133266363?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
    >
      {children}
    </a>
  );
};

export default WhatsappLink;
import React from "react";

interface AdaptativeImagenProps {
  src: string;
  alt: string;
  className?: string;
}
const AdaptiveImage: React.FC<AdaptativeImagenProps> = ({ src, alt, className }) => {
  return (
    <div className="">
      <img src={src} alt={alt} className={` rounded-lg ${className}`} />
    </div>
  );
};

export default AdaptiveImage;

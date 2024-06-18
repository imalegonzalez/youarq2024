

const AdaptiveImage = ({ src, alt, className }) => {
  return (
    <div className="">
      <img src={src} alt={alt} className={` rounded-lg ${className}`} />
    </div>
  );
};

export default AdaptiveImage;

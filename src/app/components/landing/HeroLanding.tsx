import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  imageSrc?: string;
  showButton?: boolean;
  size?: 'default' | 'small';
}

function HeroLanding({
  title = "Remodelaciones bien hechas.",
  subtitle = "Dejalo en manos de profesionales.\nNos encargamos de todo lo necesario para tu remodelación.",
  buttonText = "Quiero remodelar mi casa",
  imageSrc = "http://images.ctfassets.net/e51cz0cgcy2g/1SWcMG1AKwqYpIK8FjDki5/5001c773dc4b39b7bcbb78674887d9cc/Juan_B_Justo_9.webp",
  showButton = true,
  size = 'default'
}: HeroProps) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-slate-200 h-fit">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row mt-16 py-20 px-4">
        <div className="flex flex-col justify-center items-left">
          <h1 className="text-5xl font-base">{title}</h1>
          <p className="text-lg max-w-md mt-2">{subtitle}</p>
          
        </div>
        <div className="flex flex-col justify-center items-left md:w-2/3 w-full mt-5 md:mt-0">
          <Image src={imageSrc} alt="Hero Image" width={500} height={500} className="rounded-lg w-full" />
        </div>
      </div>
    </div>
  );
}

export default HeroLanding;


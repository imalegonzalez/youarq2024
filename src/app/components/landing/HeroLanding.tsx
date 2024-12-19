import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  imageSrc?: string;
  showButton?: boolean;
  size?: "default" | "small";
}

function HeroLanding({
  title = "Remodelaciones bien hechas.",
  subtitle = "Dejalo en manos de profesionales.\nNos encargamos de todo lo necesario para tu remodelación.",
  buttonText = "Quiero remodelar mi casa",
  imageSrc = "http://images.ctfassets.net/e51cz0cgcy2g/1SWcMG1AKwqYpIK8FjDki5/5001c773dc4b39b7bcbb78674887d9cc/Juan_B_Justo_9.webp",
  showButton = false,
  size = "default",
}: HeroProps) {
  return (
    <div className="flex h-fit w-full flex-col justify-center items-center bg-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-6  mt-16 px-4 
                      md:flex-row md:py-20">
        <div className="flex flex-col justify-center items-left order-2
                      md:order-1">
          <h1 className="font-base text-3xl
                         md:text-5xl">{title}</h1>
          <p className="mt-2 max-w-md text-base
                       md:text-lg">{subtitle}</p>
          {showButton && (
            <Button className="w-full mt-6 rounded-xl bg-[--primary] py-7 text-md text-white hover:bg-black
                              md:w-2/3">
              {buttonText}
            </Button>
          )}
        </div>
        <div className="flex w-full flex-col justify-center items-left order-1 mt-0
                       md:w-2/3 md:order-2 md:mt-5">
          <Image
            src={imageSrc}
            alt="Hero Image"
            width={500}
            height={500}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroLanding;

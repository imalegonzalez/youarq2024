import { Button } from "@/components/ui/button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  imageSrc?: string;
  showButton?: boolean;
  size?: 'default' | 'small';
}

function Hero({
  title = "Remodelaciones \n bien hechas.",
  subtitle = "Dejalo en manos de profesionales.\n Nos encargamos de todo lo necesario para tu remodelación.",
  buttonText = "Quiero remodelar mi casa",
  imageSrc = "http://images.ctfassets.net/e51cz0cgcy2g/2qTDHlHNDK4Y9I0KAy3EJG/dd9617384b090923cb81dfe95bdf0c08/Billinhurst_32.webp",
  showButton = true,
  size = 'default'
}: HeroProps) {
    return (
        <div className="w-full h-auto md:p-3">
            <div className={`relative h-[550px] ${
                size === 'small' ? 'h-[300px] lg:h-[500px]' : 'lg:h-[calc(100vh-200px)]'
            } md:rounded-lg md:overflow-hidden`}>
                <img 
                    className="absolute h-full w-full object-cover top-0 md:rounded-lg" 
                    src={imageSrc} 
                    alt="" 
                />
                <div className="absolute h-full w-full bg-black opacity-20"></div>
                <div className="absolute bottom-10 w-full">
                    <div className="mx-auto max-w-6xl px-5">
                        <h1 className="text-white font-semibold leading-none" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}>
                            {title.split('\n').map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i < title.split('\n').length - 1 && <br />}
                                </span>
                            ))}
                        </h1>
                    </div>
                </div>
            </div>
            { showButton === false || subtitle === "" ? null : (
                <div className="w-full">
                <div className="mx-auto max-w-6xl px-5 md:flex md:justify-between md:items-center">
                    {subtitle === "" ? null : (
                        <h2 className="text-lg mt-4">
                            {subtitle.split('\n').map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i < subtitle.split('\n').length - 1 && <br />}
                                </span>
                            ))}
                        </h2>
                    )}
                    {showButton && (
                        <Button className="bg-[--primary] hover:bg-black text-white mt-4 text-xl px-12 py-10 w-full md:w-1/2 rounded-xl">
                            {buttonText}
                        </Button>
                    )}
                </div>
            </div>
            )}
        </div>
    );
}

export default Hero; 


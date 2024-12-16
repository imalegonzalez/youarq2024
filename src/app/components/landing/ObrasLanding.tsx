import { Button } from "@/components/ui/button";

interface ObrasProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  imageSrc?: string;
  showButton?: boolean;
  size?: 'default' | 'small';
}

function ObrasLanding({
  title = "Remodelaciones \n bien hechas.",
  subtitle = "Dejalo en manos de profesionales.\nNos encargamos de todo lo necesario para tu remodelación.",
  buttonText = "Quiero remodelar mi casa",
  imageSrc = "http://images.ctfassets.net/e51cz0cgcy2g/1SWcMG1AKwqYpIK8FjDki5/5001c773dc4b39b7bcbb78674887d9cc/Juan_B_Justo_9.webp",
  showButton = true,
  size = 'default'
}: ObrasProps) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {showButton && <Button>{buttonText}</Button>}
        </div>
    );
}

export default ObrasLanding; 


import { Card, CardContent } from "@/components/ui/card";
import { Bath, KeyRound, Ruler, SwatchBook } from "lucide-react";

const features = [
  {
    name: "Llave en mano",
    icon: <KeyRound strokeWidth={1}  />,
  },
  {
    name: "Muebles a medida",
    icon: <Ruler strokeWidth={1}  />,
  },
  {
    name: "Todas las instalaciones",
    icon: <Bath strokeWidth={1}  />,
  },
  {
    name: "Diseño personalizado",
    icon: <SwatchBook strokeWidth={1}  />,
  },
];

function Features() {
  return (
    <div className="w-full py-2">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {features.map((review, index) => (
            <Card
              key={index}
              className="flex-col h-40 justify-center text-center content-center"
            >
              <div className="flex justify-center items-center opacity-50">
                {review.icon}
              </div>
              <h3 className="text-xs mt-2">{review.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;

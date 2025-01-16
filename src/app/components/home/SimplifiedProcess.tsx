import { ListChecks, PaintRoller, Receipt, Route } from 'lucide-react';
import Image from 'next/image';

const SimplyProcess = ({ 
  title = "Remodelá con profesionales", 
  subtitle = "Facilitamos el proceso de remodelar tu casa" 
}: { 
  title?: string, 
  subtitle?: string 
}) => {
  const steps = [
    {
      title: "Cotizá",
      icon: <Receipt size={40} strokeWidth={0.75} />,
      description: "Recibi una visita de un asesor de proyecto para obtener un precio refinado, cronograma y alcance detallado del trabajo. Tambien recibiras informacion sobre las posibilidades de remodelacion de tu casa."
    },
    {
      title: "Ajustá",
      icon: <ListChecks size={40} strokeWidth={0.75} />,
      description: "Trabaja mano a mano con tu Asesor Profesional para ajustar el plan de obra hasta que esté a tu gusto y responda a las necesidades de tu proyecto. Conoce el alcance de tu obra, los detalles que involucra y las formas de pago."
    },
    {
      title: "Remodelá",
      icon: <PaintRoller size={40} strokeWidth={0.75} />,
      description: "Una vez confirmada la cotizacion y firmado el contrato, nos encargamos de todo lo necesario para tu obra. Cada contratista está habilitado, asegurado y rigurosamente evaluado por su calidad y experiencia en el rubro."
    }
  ];

  return (
    <section className="py-3 px-4 max-w-6xl mx-auto flex flex-col items-center gap-3">
      <div className="text-center bg-white p-12 rounded-xl w-full">
        <h2 className="text-4xl mb-2">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-3 lg:gap-3">
        {steps.map((step, index) => (
          <div key={index} className="text-center  bg-white p-12 rounded-xl">
            <div className="mb-6 flex items-center justify-center">
              {step.icon}
            </div>
            <h3 className="text-2xl font-medium mb-4">{step.title}</h3>
            <p className="text-gray-500 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimplyProcess;
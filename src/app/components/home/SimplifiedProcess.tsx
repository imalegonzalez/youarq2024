import Image from 'next/image';

const SimplyProcess = () => {
  const steps = [
    {
      title: "Planificá",
      icon: "/icons/plan-icon.svg",
      description: "Respondé unas preguntas sobre tu remodelación para obtener un estimado de tu proyecto al instante. Después agendá una llamada de consulta gratuita con un asesor de proyecto para obtener un precio refinado, cronograma y alcance detallado del trabajo."
    },
    {
      title: "Diseñá",
      icon: "/icons/design-icon.svg",
      description: "Trabajá con nuestro equipo de diseñadores y arquitectos y recibí todo el asesoramiento necesario para crear un espacio que sea verdaderamente tuyo. Nosotros nos encargamos de todo lo necesario para tu obra."
    },
    {
      title: "Remodelá",
      icon: "/icons/build-icon.svg",
      description: "Con los planes y materiales listos, nos encargamos de todo lo necesario para tu obra. Cada contratista está habilitado, asegurado y rigurosamente evaluado por su calidad y experiencia en el rubro."
    }
  ];

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif mb-4">Remodelá con profesionales</h2>
        <p className="text-gray-600">Facilitamos el proceso de remodelar tu casa</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="mb-6">
              <Image
                src={step.icon}
                alt={`${step.title} icon`}
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimplyProcess;
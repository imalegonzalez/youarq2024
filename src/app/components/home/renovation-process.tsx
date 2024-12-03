"use client";

import { Check } from "lucide-react";
import Pricing from "./Pricing";

interface Step {
  number: string;
  title: string;
  duration: string;
  cost: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Descubrí",
    duration: "Primer día",
    cost: "Sin costo",
  },
  {
    number: "02",
    title: "Planificá",
    duration: "1-2 semanas",
    cost: "$100 de seña*",
  },
  {
    number: "03",
    title: "Diseñá",
    duration: "2-4 semanas",
    cost: "Seña del proyecto",
  },
  {
    number: "04",
    title: "Materiales",
    duration: "3+ semanas",
    cost: "Pago de materiales",
  },
  {
    number: "05",
    title: "Construcción",
    duration: "3+ semanas",
    cost: "Saldo restante",
  },
];

export function RenovationProcess() {
  return (
    <section className="max-w-6xl mx-auto flex-col ">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Main Title */}
        <div className="mb-16">
          <h1 className="font-serif text-4xl md:text-5xl md:max-w-4xl lg:text-6xl mb-4 leading-tight">
            Hacemos que el proceso de renovación sea fácil.
          </h1>
          <p className="text-gray-600">En 5 simples pasos.</p>
        </div>

        {/* Process Steps */}
        <div className="space-y-32 relative">
          {/* Línea de fondo que conecta todos los pasos */}
          <div className="absolute left-[35px] top-[48px] w-[1px] h-[calc(100%-48px)] bg-gray-300 hidden md:block"></div>
          <div className="grid md:grid-cols-6 gap-12">
            {/* Step Info */}
            <div className="grid col-span-4 grid-cols-[60px_1fr_1fr_1fr_1fr] gap-4">
              <div className="w-auto mx-3">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium relative z-10">
                  1
                </div>
              </div>
              
              <div className="col-span-4">
                <p className="text-md text-gray-600 font-sans">Cotizá</p>
                <h3 className=" text-5xl font-normal">Visitamos tu hogar y cotizamos
                tu obra al detalle.</h3>
              </div>

              <div className="col-span-1"></div>
              <div className="col-span-1 mt-5">
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">PRECIO</p>
                  <p className="text-md font-semibold text-gray-600">Desde AR$35mil</p>
                </div>
              </div>
              <div className="col-span-3 space-y-3 mt-5">
                <h4 className="font-medium">QUÉ ESPERAR</h4>
                <ul className="space-y-3">
                  {[
                    "Relevamiento presencial de la propiedad",
                    "Aprendé sobre tus posibilidades de remodelación",
                    "Conocé los plazos estimados para llevar a cabo la obra",
                    "Recibí una propuesta detallada por ambientes y gremios, junto con croquis simples.",
                    "Conocé nuestras financiaciones según tu presupuesto."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 text-gray-600" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-4 space-y-4 mt-16">
                <h4 className="font-normal text-3xl">Visita presencial y propuesta de inversión</h4>
                <p className="text-gray-600 text-lg">Si decidis avanzar a esta etapa con nosotros, vas a poder coordinar una visita presencial con profesional designado para que relevemos la propiedad y te asesoremos sobre las posibilidades constructivas. En un plazo de 15 días volvemos a reunirnos y te entregamos la propuesta a medida de las necesidades planteadas en la visita.</p>
              </div>
            </div>
            <div className="col-span-2"><img src="/placeholder.svg" alt="" /></div>
            <Pricing />
          </div>

         
        </div>
        <div className="space-y-32 relative">
          {/* Línea de fondo que conecta todos los pasos */}
          <div className="absolute left-[35px] top-[48px] w-[1px] h-[calc(100%-48px)] bg-gray-300 hidden md:block"></div>
          <div className="grid md:grid-cols-5 gap-12">
            {/* Step Info */}
            <div className="grid col-span-3 grid-cols-5 gap-4">
              <div className="w-auto mx-3">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium relative z-10">
                  1
                </div>
              </div>
              
              <div className="col-span-4">
                <h3 className="font-serif text-2xl">Visita de Asesoramiento a la Propiedad</h3>
              </div>

              <div className="col-span-1"></div>
              <div className="col-span-1">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">1 semana</p>
                  <p className="text-sm text-gray-600">Desde AR$35mil</p>
                </div>
              </div>
              <div className="col-span-3 space-y-3">
                <h4 className="font-medium">QUÉ ESPERAR</h4>
                <ul className="space-y-3">
                  {[
                    "Conocé a tu asesor designado",
                    "Visita a la propiedad a remodelar",
                    "Informate sobre tus opciones de renovación",
                    "Recibí un estimado inicial",
                    "Entendé los próximos pasos",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 text-gray-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-4 space-y-4">
                <h4 className="font-medium">Descripcion de paso</h4>
                <p>Durante la visita de asesoramiento, recibirás un presupuesto inicial y conocerás a tu asesor dedicado. Te informaremos sobre las diversas opciones de renovación disponibles y te explicaremos los próximos pasos a seguir para que puedas tomar decisiones informadas y adecuadas a tus necesidades.</p>
              </div>
            </div>
            <div className="col-span-2"><img src="/placeholder.svg" alt="" /></div>
          </div>

         
        </div>
      </div>

        <p className="text-sm text-gray-500 mt-8">
          *Reembolsable en cualquier compra y totalmente devolvible.
        </p>
    </section >
  );
}

"use client";

import {
  Check,
  CheckCheck,
  CircleDollarSign,
  NotebookText,
  PiggyBank,
} from "lucide-react";
import Pricing from "./Pricing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface Step {
  number: string;
  title: string;
  duration: string;
  cost: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Cotizá",
    duration: "1-2 semanas",
    cost: "Sin costo",
  },
  {
    number: "02",
    title: "Ajustá	",
    duration: "1 semana",
    cost: "desde AR$ 35.000",
  },
  {
    number: "03",
    title: "Remodelá",
    duration: "desde 4 semanas",
    cost: "Adelanto de obra",
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

export function RenovationProcess({ className }: { className?: string }) {
  const [isPricingExpanded, setIsPricingExpanded] = useState(false);

  return (
    <section className={cn("max-w-6xl mx-auto flex-col ", className)}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Main Title */}
        <div className="mb-16">
          <h1 className="text-5xl mb-4 leading-tight font-light">
            Hacemos que el proceso de renovación sea más simple en{" "}
            <span className="font-medium">3 pasos.</span>
          </h1>
        </div>

        {/* Navigation Steps */}
        <div className="flex flex-col md:flex-row gap-4 mb-16">
          {steps.slice(0, 3).map((step, index) => (
            <Link
              key={index}
              href={`#step-${step.number}`}
              className="flex-1 p-6 bg-white rounded-lg flex flex-col gap-3 transition-all hover:bg-gray-50"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(`step-${step.number}`);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-400">
                  {step.number}
                </span>
                <h3 className="text-xl font-medium">{step.title}</h3>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Duración:</span>
                  <span className="text-sm font-medium">{step.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Inversión:</span>
                  <span className="text-sm font-medium">{step.cost}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Process Steps */}

        {/* STEP 1 */}
        <div className="relative md:grid md:grid-cols-[72px_1fr]">
          <div
            className="w-auto mx-3 hidden md:block"
            style={{ height: "calc(100% + 200px)" }}
          >
            <div className="md:absolute left-[35px] top-[48px] w-[1px] h-[calc(100%+300px)] bg-gray-300"></div>
            <div
              className="flex w-12 h-12 rounded-full bg-black text-white md:flex items-center justify-center text-sm font-medium z-10 sticky"
              style={{ position: "sticky", top: "98px" }}
            >
              1
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-6 gap-4 md:ml-8 mb-4">
            {/* Step Info */}
            <div
              id="step-01"
              className="order-2 md:order-1 md:grid md:col-span-4 md:grid-cols-5 md:gap-4 scroll-mt-32"
            >
              <div className="md:col-span-5 bg-white p-6 rounded-lg ">
                <div
                  className="flex w-1/3 h-12 rounded-full bg-gray-200 text-gray-500 md:hidden items-center justify-left text-sm  font-medium z-10 mb-4"
                >
                  <span className="text-gray-800 mr-4 bg-[--primary] rounded-full px-2 py-1 h-full w-2/5 flex items-center justify-center">1</span> Cotizá
                </div>
                <p className="hidden md:block text-lg text-gray-600 font-sans">Cotizá</p>
                <h3 className="text-3xl font-normal max-w-lg">
                  Visitamos tu hogar y cotizamos tu obra al detalle.
                </h3>
              </div>

              <div className="md:col-span-5 bg-white p-6 rounded-lg space-y-3 ">
                <h4 className="font-medium text-sm text-gray-600">
                  QUÉ ESPERAR DE ESTE PASO
                </h4>
                <ul className="space-y-4">
                  {[
                    "Relevamiento presencial de la propiedad",
                    "Aprendé sobre tus posibilidades de remodelación",
                    "Conocé los plazos estimados para llevar a cabo la obra",
                    "Recibí una propuesta detallada por ambientes y gremios, junto con croquis simples.",
                    "Conocé nuestras financiaciones según tu presupuesto.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-7 flex-shrink-0 text-gray-600" />
                      <span className="text-md">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5 space-y-4 bg-white p-6 rounded-lg">
                <h4 className="font-normal text-3xl">
                  Visita presencial y propuesta de inversión
                </h4>
                <p className="text-gray-600 text-lg">
                  Si decidis avanzar a esta etapa con nosotros, vas a poder
                  coordinar una visita presencial con profesional designado para
                  que relevemos la propiedad y te asesoremos sobre las
                  posibilidades constructivas. En un plazo de 15 días volvemos a
                  reunirnos y te entregamos la propuesta a medida de las
                  necesidades planteadas en la visita.
                </p>
              </div>
            </div>
            <div
              id="image-step-1"
              className="order-1 md:order-2 md:col-span-2 relative"
            >
              <div className="w-full h-64 rounded-lg bg-red-500 sticky top-[98px]"></div>
            </div>
            {/* <div className="order-3 md:col-span-6 md:order-3 relative">
              <div className={cn(
                "transition-all duration-300",
                !isPricingExpanded && "max-h-[250px] overflow-hidden"
              )}>
                <Pricing className="" />
              </div>
              
              {!isPricingExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-white via-white to-transparent flex items-end justify-center pb-6">
                  <button
                    onClick={() => setIsPricingExpanded(true)}
                    className=" bg-white border border-gray-300 text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Ver más
                  </button>
                </div>
              )}
            </div> */}
          </div>
        </div>

        {/* STEP 2 */}
        <div className="relative md:grid md:grid-cols-[72px_1fr] ">
          <div
            className="w-auto mx-3 hidden md:block scroll-mt-28"
            id="step-02"
            style={{ height: "calc(100% + 200px)" }}
          >
            <div className="md:absolute left-[35px] top-[48px] w-[1px] h-[calc(100%-48px)] bg-gray-300"></div>
            <div className="hidden w-12 h-12 rounded-full bg-black text-white md:flex items-center justify-center text-sm font-medium z-10 sticky top-[98px]">
              2
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-6 gap-12 md:ml-8">
            {/* Step Info */}
            <div
              id="step-1"
              className=" md:flex md:col-span-6 md:flex-col gap-4"
            >
              <div className="md:col-span-6 bg-white p-10 rounded-lg">
              <div
                  className="flex w-1/3 h-12 rounded-full bg-gray-200 text-gray-500 md:hidden items-center justify-left text-sm  font-medium z-10 mb-4"
                >
                  <span className="text-gray-800 mr-4 bg-[--primary] rounded-full px-2 py-1 h-full w-2/5 flex items-center justify-center">2</span> Ajustá
                </div>
                <p className="hidden md:block text-lg text-gray-600 font-sans">Ajustá</p>
                <h3 className="text-3xl font-normal max-w-lg">
                  Presentación de propuesta de remodelación
                </h3>
              </div>

              <div className="md:col-span-6 md:grid md:grid-cols-6 gap-4">
                <div className="bg-white col-span-3 p-10 rounded-lg">
                  <h4 className="font-medium text-sm text-gray-600 mb-4">
                    QUÉ ESPERAR DE ESTE PASO
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Relevamiento presencial de la propiedad",
                      "Aprendé sobre tus posibilidades de remodelación",
                      "Conocé los plazos estimados para llevar a cabo la obra",
                      "Recibí una propuesta detallada por ambientes y gremios, junto con croquis simples.",
                      "Conocé nuestras financiaciones según tu presupuesto.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-7 flex-shrink-0 text-gray-600" />
                        <span className="text-md">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-10 md:col-span-3  bg-white py-10 px-6 rounded-lg">
                  <div className="w-full flex items-start justify-center gap-3 ">
                    <div className="p-2 rounded-lg bg-white">
                      <CircleDollarSign className="text-gray-500 w-6 h-6  " />
                    </div>
                    <div className="">
                      <h3 className="text-lg font-normal">
                        Ajustá tu presupuesto
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Será un trabajo uno a uno con tu asesor para ajustar la
                        propuesta a lo que estas dispuesto a invertir y a las
                        opciones que mejor se adapten a ello.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex items-start justify-center gap-3">
                    <div className="p-2 rounded-lg bg-white">
                      <NotebookText className="text-gray-500 w-6 h-6  " />
                    </div>
                    <div>
                      <h3 className="text-lg font-normal">
                        Personalizá tu contrato
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Ajustamos el contrato tanto como sea necesario. En esta
                        etapa intentaremos cumplir con tus expectativas para
                        poder trabajar juntos en tu remodelación.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex items-start justify-center gap-3">
                    <div className="p-2 rounded-lg bg-white">
                      <CheckCheck className="text-gray-500 w-6 h-6  " />
                    </div>
                    <div>
                      <h3 className="text-lg font-normal">Ultimá detalles</h3>
                      <p className="text-gray-600 text-sm">
                        Trabajá con nuestro equipo comercial las formas de pago
                        y la financiación disponible para tu proyecto. Tambien
                        vas a recibir toda la información necesaria para poder
                        empezar la obra en tiempo y forma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1"></div>
            </div>
          </div>
        </div>
        {/* STEP 3 */}
        <div className="relative md:grid md:grid-cols-[72px_1fr]">
          <div className="w-auto mx-3 hidden md:block">
            <div className="md:absolute left-[35px] top-[48px] w-[1px] h-[calc(100%-48px)] bg-gray-300"></div>
            <div className="hidden w-12 h-12 rounded-full bg-black text-white md:flex items-center justify-center text-sm font-medium z-10 sticky top-[98px]">
              3
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-6 md:ml-8 scroll-mt-28 gap-4">
            {/* Step Info */}
            <div id="step-03" className=" md:grid md:col-span-4 md:grid-cols-5 gap-4 ">
              <div className="md:col-span-5 bg-white p-10 rounded-lg">
                <p className="hidden md:block text-lg text-gray-600 font-sans ">
                  Remodelá
                </p>
                <h3 className="text-3xl font-normal">
                  Nos encargamos de toda la remodelación
                </h3>
              </div>

              <div className="md:col-span-5 space-y-3 gap-4 bg-white p-10 rounded-lg">
                <h4 className="font-medium text-sm text-gray-600">
                  QUÉ ESPERAR DE ESTE PASO
                </h4>
                <ul className="space-y-2">
                  {[
                    "Comunicación directa con tu equipo dedicado.",
                    "Asesoría en compra de materiales.",
                    "Gestión integral de obra: todos los gremios y especialistas.",
                    "Fletes, volquetes, seguros y gestoría de obra.",
                    "Dirección de obra por profesional.",
                    "Informes de avances y estado de tu obra.",
                    "Diseño, producción e instalación de muebles a medida.",
                    "Garantía de 1 año por sobre todos los trabajos ejecutados.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-7 flex-shrink-0 text-gray-600" />
                      <span className="text-md">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              id="image-step-1"
              className="flex flex-col gap-10 md:col-span-2 rounded-lg bg-slate-400 sticky top-[98px]"
            ></div>
            <div className="md:col-span-4 space-y-4 bg-white p-10 rounded-lg">
              <h4 className="font-normal text-2xl">Obra Ágil</h4>
              <p className="text-gray-600 text-md">
                Nos vamos a encargar de todo por vos. Toda la mano de obra
                necesaria y los materiales de obra gruesa, estan incluidos en
                nuestra propuesta. Vos elegis que resultado queres, nosotros nos
                encargamos de todo lo necesario para hacerlo realidad.
              </p>
            </div>
            <div className="md:col-span-4 space-y-4 bg-white p-10 rounded-lg">
              <h4 className="font-normal text-2xl">Equipo dedicado</h4>
              <p className="text-gray-600 text-md">
                Vas a tener a disposición un grupo de whatsapp con tu equipo
                dedicado: diseñador, director de obra, supervisores y
                profesionales involucrados. Podras trabajar y recibir
                actualizaciones de tu obra día a día.
              </p>
            </div>
            <div className="md:col-span-4 space-y-4 bg-white p-10 rounded-lg">
              <h4 className="font-normal text-2xl">Seguridad y cobertura</h4>
              <p className="text-gray-600 text-md">
                Todos nuestro personal esta asegurado, así como tu inversión.
                Nos encargamos de gestionar de forma segura todo el proceso para
                así disminuir riesgos. Nuestras remodelaciones cuentan con 1 año
                de garantía.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

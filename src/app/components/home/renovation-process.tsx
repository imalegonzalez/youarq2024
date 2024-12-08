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

export function RenovationProcess({className}: {className?: string}) {
  return (
    <section className={cn("max-w-6xl mx-auto flex-col ", className)} >
      <div className="mx-auto max-w-7xl px-4">
        {/* Main Title */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl  lg:text-6xl mb-4 leading-loose font-light">
            Hacemos que el proceso de renovación sea más simple en <span className="font-medium">3 pasos.</span>
          </h1>
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
              className="hidden w-12 h-12 rounded-full bg-black text-white md:flex items-center justify-center text-sm font-medium z-10 sticky"
              style={{ position: "sticky", top: "98px" }}
            >
              1
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-6 gap-12 md:ml-8 pb-[100px]">
            {/* Step Info */}
            <div
              id="step-1"
              className="order-2 md:order-1 md:grid md:col-span-4 md:grid-cols-5 md:gap-4"
            >
              <div className="md:col-span-4">
                <p className="text-md text-gray-600 font-sans">Cotizá</p>
                <h3 className="text-4xl font-normal">
                  Visitamos tu hogar y cotizamos tu obra al detalle.
                </h3>
              </div>

              <div className=" md:col-span-1"></div>

              <div className="md:col-span-4 space-y-3 mt-5">
                <h4 className="font-medium text-sm text-gray-600">
                  QUÉ ESPERAR DE ESTE PASO
                </h4>
                <ul className="space-y-3">
                  {[
                    "Relevamiento presencial de la propiedad",
                    "Aprendé sobre tus posibilidades de remodelación",
                    "Conocé los plazos estimados para llevar a cabo la obra",
                    "Recibí una propuesta detallada por ambientes y gremios, junto con croquis simples.",
                    "Conocé nuestras financiaciones según tu presupuesto.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 text-gray-600" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-1"></div>
              <div className="md:col-span-5 space-y-4 mt-16">
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
            <div id="image-step-1" className="order-1 md:order-2 md:col-span-2">
              <div className="w-full h-64 bg-red-500 "></div>
            </div>
            <Pricing className="order-3 md:col-span-6 md:order-3" />
          </div>
        </div>

        {/* STEP 2 */}
        <div className="relative md:grid md:grid-cols-[72px_1fr]">
          <div
            className="w-auto mx-3 hidden md:block"
            style={{ height: "calc(100% + 200px)" }}
          >
            <div className="md:absolute left-[35px] top-[48px] w-[1px] h-[calc(100%-48px)] bg-gray-300"></div>
            <div className="hidden w-12 h-12 rounded-full bg-black text-white md:flex items-center justify-center text-sm font-medium z-10 sticky top-[98px]">
              2
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-6 gap-12 md:ml-8 pb-[100px]">
            {/* Step Info */}
            <div id="step-1" className=" md:grid md:col-span-3 md:grid-cols-5">
              <div className="md:col-span-5">
                <p className="text-md text-gray-600 font-sans">Ajustá</p>
                <h3 className="text-4xl font-normal">
                  Presentación de propuesta de remodelación
                </h3>
              </div>

              <div className="md:col-span-5 space-y-3 ">
                <h4 className="font-medium text-sm text-gray-600">
                  QUÉ ESPERAR DE ESTE PASO
                </h4>
                <ul className="space-y-3">
                  {[
                    "Relevamiento presencial de la propiedad",
                    "Aprendé sobre tus posibilidades de remodelación",
                    "Conocé los plazos estimados para llevar a cabo la obra",
                    "Recibí una propuesta detallada por ambientes y gremios, junto con croquis simples.",
                    "Conocé nuestras financiaciones según tu presupuesto.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 text-gray-600" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-1"></div>
            </div>
            <div
              id="image-step-1"
              className="flex flex-col gap-10 md:col-span-3 md:mt-40"
            >
              <div className="w-full flex items-start justify-center gap-3">
                <div className="p-2 rounded-lg bg-gray-200">
                  <CircleDollarSign className="text-gray-500 w-6 h-6  " />
                </div>
                <div>
                  <h3 className="text-2xl font-normal">
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
                <div className="p-2 rounded-lg bg-gray-200">
                  <NotebookText className="text-gray-500 w-6 h-6  " />
                </div>
                <div>
                  <h3 className="text-2xl font-normal">
                    Personalizá tu contrato
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ajustamos el contrato tanto como sea necesario. En esta
                    etapa intentaremos cumplir con tus expectativas para poder
                    trabajar juntos en tu remodelación.
                  </p>
                </div>
              </div>
              <div className="w-full flex items-start justify-center gap-3">
                <div className="p-2 rounded-lg bg-gray-200">
                  <CheckCheck className="text-gray-500 w-6 h-6  " />
                </div>
                <div>
                  <h3 className="text-2xl font-normal">Ultimá detalles</h3>
                  <p className="text-gray-600 text-sm">
                    Trabajá con nuestro equipo comercial las formas de pago y la
                    financiación disponible para tu proyecto. Tambien vas a
                    recibir toda la información necesaria para poder empezar la
                    obra en tiempo y forma.
                  </p>
                </div>
              </div>
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
          <div className="flex flex-col md:grid md:grid-cols-6 gap-12 md:ml-8">
            {/* Step Info */}
            <div id="step-1" className=" md:grid md:col-span-4 md:grid-cols-5">
              <div className="md:col-span-5">
                <p className="text-md text-gray-600 font-sans">Remodelá</p>
                <h3 className="text-4xl font-normal">
                  Nos encargamos de toda la remodelación
                </h3>
              </div>

              <div className=" md:col-span-1"></div>

              <div className="md:col-span-5 space-y-3 mt-10 ">
                <h4 className="font-medium text-sm text-gray-600">
                  QUÉ ESPERAR DE ESTE PASO
                </h4>
                <ul className="space-y-3">
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
                      <Check className="w-5 h-5 flex-shrink-0 text-gray-600" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              id="image-step-1"
              className="flex flex-col gap-10 md:col-span-2 md:mt-40 bg-slate-400 sticky top-[98px]"
            ></div>
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-normal text-3xl">
              Obra Ágil
              </h4>
              <p className="text-gray-600 text-lg">
              Nos vamos a encargar de todo por vos. Toda la mano de obra necesaria y los materiales de obra gruesa, estan incluidos en nuestra propuesta. Vos elegis que resultado queres, nosotros nos encargamos de todo lo necesario para hacerlo realidad.
              </p>
            </div>
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-normal text-3xl">
              Equipo dedicado
              </h4>
              <p className="text-gray-600 text-lg">
              Vas a tener a disposición un grupo de whatsapp con tu equipo dedicado: diseñador, director de obra, supervisores y profesionales involucrados. Podras trabajar y recibir actualizaciones de tu obra día a día.
              </p>
            </div>
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-normal text-3xl">
              Seguridad y cobertura
              </h4>
              <p className="text-gray-600 text-lg">
              Todos nuestro personal esta asegurado, así como tu inversión. Nos encargamos de gestionar de forma segura todo el proceso para así disminuir riesgos. Nuestras remodelaciones cuentan con 1 año de garantía.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

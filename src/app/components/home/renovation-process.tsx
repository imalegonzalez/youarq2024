"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

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
    <div className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Main Title */}
        <div className="mb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            Hacemos que el
            <br />
            proceso de renovación
            <br />
            sea fácil.
          </h1>
          <p className="text-gray-600">En 5 simples pasos.</p>
        </div>

        {/* Process Steps */}
        <div className="space-y-32 relative">
          {/* Línea de fondo que conecta todos los pasos */}
          <div className="absolute left-[35px] top-[48px] w-[1px] h-[calc(100%-48px)] bg-gray-300 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <div key={step.number} className="grid md:grid-cols-2 gap-12">
              {/* Step Info */}
              <div className="flex">
                <div className="w-auto mx-3">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium relative z-10">
                    {step.number}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-serif text-2xl">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.duration}</p>
                      <p className="text-sm text-gray-600">{step.cost}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">QUÉ ESPERAR</h4>
                    <ul className="space-y-3">
                      {[
                        "Recibí un presupuesto inicial",
                        "Conocé a tu asesor dedicado",
                        "Informate sobre tus opciones de renovación",
                        "Entendé los próximos pasos",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 mr-3 text-gray-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                
                </div>
              </div>

              {/* Step Image */}
              <div className="relative hidden md:block">
                <Image
                  src="/placeholder.svg"
                  alt={`Paso ${step.number} - ${step.title}`}
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-8">
          *Reembolsable en cualquier compra y totalmente devolvible.
        </p>
      </div>
    </div>
  );
}

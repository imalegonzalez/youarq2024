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
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-gray-600" />
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
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-gray-600" />
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

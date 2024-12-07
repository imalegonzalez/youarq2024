import { cn } from "@/lib/utils";
import { Check, Dot } from "lucide-react";
import { FC } from "react";

const Pricing: FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={cn("flex flex-col md:grid md:grid-cols-3 w-full gap-4 h-auto", className)}>
      <div className="col-span-1 h-64 rounded-lg flex flex-col items-start justify-start gap-2 p-5 bg-white">
        <h3 className="text-2xl font-semibold">Remodelación Simple</h3>
        <img
          className="w-full h-24 bg-slate-200"
          src="/images/icons/simple.svg"
          alt="Remodelación Simple"
        />
        <p className="text-sm font-semibold">
          Remodelación de baño y/o cocina.
          <br />
          <span className="text-gray-500 text-xs">HASTA 3 AMBIENTES</span>
        </p>
        <span className="text-3xl font-semibold text-red-500">$35.000</span>
      </div>
      <div className="col-span-1 h-64 rounded-lg flex flex-col items-start justify-start gap-2 p-5 bg-white">
        <h3 className="text-2xl font-semibold">Remodelación Integral</h3>
        <img
          className="w-full h-24 bg-slate-200"
          src="/images/icons/simple.svg"
          alt="Remodelación Simple"
        />
        <p className="text-sm font-semibold">
          Remodelación de baño y/o cocina.
          <br />
          <span className="text-gray-500 text-xs">HASTA 3 AMBIENTES</span>
        </p>
        <span className="text-3xl font-semibold text-red-500">$45.000</span>
      </div>
      <div className="col-span-1 h-64 rounded-lg flex flex-col items-start justify-start gap-2 p-5 bg-white">
        <h3 className="text-2xl font-semibold">Estructural</h3>
        <img
          className="w-full h-24 bg-slate-200"
          src="/images/icons/simple.svg"
          alt="Remodelación Simple"
        />
        <p className="text-sm font-semibold">
          Remodelación de baño y/o cocina.
          <br />
          <span className="text-gray-500 text-xs">HASTA 3 AMBIENTES</span>
        </p>
        <span className="text-3xl font-semibold text-red-500">$ A Definir</span>
      </div>
      <div className="md:col-span-3 rounded-lg md:grid md:grid-cols-2 bg-gray-100 p-10 gap-5 md:py-10 md:px-16">
        <div className="flex flex-col md:col-span-1 items-start justify-between gap-2">
          <h3 className="text-3xl font-semibold">
            Teleasesoría con profesional
          </h3>
          <p>
            ¿Tenés dudas si nuestro servicio es para vos? <br /> Habla con un
            profesional del equipo.
          </p>
          <div className="hidden md:flex md:flex-col">
            <span className="text-sm font-normal text-gray-500">
              LLAMADO DE 15 MINUTOS
            </span>
            <span className="text-3xl font-semibold text-red-500">GRATIS</span>
          </div>
        </div>
        <div className="flex flex-col md:col-span-1">
          <p className="text-sm text-gray-600">
            QUÉ ESPERAR DE ESTE PASO
          </p>
          <ul className="mt-2">
            {[
              "Llamado de 15 minutos con Arquitecto/Diseñador",
              "Información sobre como trabajamos",
              "Información general sobre precios de mercado",
              "Plazo aproximado de obra según tu proyecto",
              "Información sobre el servicio que mejor se adapta a tus necesidades",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Dot className="w-5 h-5 flex-shrink-0 text-gray-600" />
                <span className="text-base font-semibold">{item}</span>
              </li>
            ))}
          </ul>
          <div className="md:hidden flex flex-col">
            <span className="text-sm font-normal text-gray-500">
              LLAMADO DE 15 MINUTOS
            </span>
            <span className="text-3xl font-semibold text-red-500">GRATIS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

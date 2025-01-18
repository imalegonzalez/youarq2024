import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import WhatsappLink from "../components/WhatsappLink";

export default async function Asesoramiento() {
  return (
    <div className=" w-full min-h-[90svh] p-4 md:px-3 md:py-10 mt-10 flex flex-col  gap-2 justify-center align-middle items-center">
      <h1 className="text-3xl font-medium mt-10 text-center bg-white p-4 py-10 rounded-lg border border-zinc-200 max-w-5xl w-full mx-auto">¿Cómo te gustaría empezar?</h1>
      <div className="md:w-full md:max-w-5xl md:flex-row w-full flex flex-col justify-center align-middle gap-2 ">
        <div className="md:w-1/2 flex flex-col  border border-zinc-200 p-10 gap-5 rounded-lg bg-white">
            <h2 className="text-2xl  font-medium">Quiero un estimado <br /> de mi obra</h2>
            <p className="text-sm text-zinc-500">Responde algunas preguntas sobre tu remodelación para poder brindarte un estimado de cuando podría salir</p>

            <div className="w-full">
            <Link href="/presupuesto" className="w-full"><button className="px-5 py-3 bg-slate-600 text-white rounded-lg w-full ">Obtener estimado</button></Link>
            </div>
        </div>
        <div className="md:w-1/2 flex flex-col  border border-zinc-200 p-10 gap-5 rounded-lg bg-white">
            <h2 className="text-2xl  font-medium">Quiero hablar con un operador online</h2>
            <p className="text-sm text-zinc-500">Responde algunas preguntas sobre tu remodelación para poder brindarte un estimado de cuando podría salir</p>

            <WhatsappLink className="w-full bg-green-500 text-white rounded-lg px-4 py-3 flex justify-center items-center" visible={true}>
                <p>Hablar con un operador online</p>
            </WhatsappLink>
        </div>
        {/* <div className="md:w-1/2 flex flex-col justify-center items-center">
            <CardHeader>
            <CardTitle>Hablar con un operador online</CardTitle>
            <CardDescription></CardDescription>
            </CardHeader>
            <CardContent  className="text-center">
            <p>Hablemos y contanos sobre tu proyecto. Recibiras información sobre como trabajamos y cómo podemos ayudarte</p>
            </CardContent>
            <CardFooter className="w-full gap-3 flex-col">
            <button className="px-5 py-3 bg-green-500 text-white rounded-lg w-full">Abrir whatsapp</button>
            <button className="px-5 py-3 bg-slate-300 text-black rounded-lg w-full">Agendar llamada</button>
            </CardFooter>
        </div>
       */}
      </div>
    </div>
  );
}

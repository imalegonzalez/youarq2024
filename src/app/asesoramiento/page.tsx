import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function Asesoramiento() {
  return (
    <div className=" w-full min-h-[90svh] p-7 md:px-3 md:py-10 mt-10 flex flex-col justify-center align-middle items-center">
      <h1 className="text-3xl font-medium mb-4">¿Cómo te gustaría empezar?</h1>
      <div className="md:w-3/5 md:flex-row w-full flex flex-col justify-center align-middle gap-5 ">
        <Card className="md:w-1/2 flex flex-col justify-center items-center">
            {/* <CardHeader>
            <CardTitle>Quiero un estimado de obra</CardTitle>
            <CardDescription></CardDescription>
            </CardHeader> */} 
            <CardContent  className="text-center">
              <h1 className="">
              Quiero un estimado de obra
              </h1>
            <p>Responde algunas preguntas sobre tu remodelación para poder brindarte un estimado de cuando podría salir</p>
            </CardContent>
            <CardFooter className="w-full">
            <Link href={"/estimado"} className="w-full"><button className="px-5 py-3 bg-slate-600 text-white rounded-lg w-full ">Obtener estimado</button></Link>
            </CardFooter>
        </Card>
        <Card className="md:w-1/2 flex flex-col justify-center items-center">
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
        </Card>
      
      </div>
    </div>
  );
}

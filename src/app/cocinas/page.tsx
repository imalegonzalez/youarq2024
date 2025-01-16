import { Post } from "@/types/contentful";
import CustomerReview from "../components/CustomerReview copy";

import { RenovationProcess } from "../components/home/renovation-process";
import SelectorObra from "../components/home/SelectorObra";
import HeroLanding from "../components/landing/HeroLanding";
import ObrasLanding from "../components/landing/ObrasLanding";
import { client } from "../lib/contentful/client";
import SimplyProcess from "../components/home/SimplifiedProcess";
import TestimonialCarousel from "../components/CustomerReview";
import Pricing from "../components/home/Pricing";
import ImagesCarousel from "../components/ImagesCarousel";



async function getData(): Promise<Post[]> {
  const res = await client.getEntries({ content_type: "obra" });
  return res.items as Post[];
}

export default async function Banos() {
  const data = await getData();
  const filteredData = data.filter(post => post.fields.categoria.fields.nombreCategoria === "Cocina");
  const fotosDespues = filteredData.flatMap(post => post.fields.fotosDespues.map(foto => foto.fields.file.url));
  const shuffleFotos = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const shuffledFotos = shuffleFotos([...fotosDespues]);
  return (
    <>
      <HeroLanding
        title="Remodelá tu cocina con profesionales"
        subtitle="Nos encargamos de todo lo necesario para tu remodelación."
        buttonText="Quiero remodelar mi cocina"
        imageSrc="http://images.ctfassets.net/e51cz0cgcy2g/1SWcMG1AKwqYpIK8FjDki5/5001c773dc4b39b7bcbb78674887d9cc/Juan_B_Justo_9.webp"
        showButton={true}
        size="default"
        className="mt-10"
      />
      <ImagesCarousel images={shuffledFotos} />
      <SimplyProcess />
      <ObrasLanding data={data} category="Cocina" />
      {/* <RenovationProcess className="max-w-6xl mx-auto mt-10 py-10"/> */}
      <TestimonialCarousel />
      <section className="px-4 grid max-w-6xl mx-auto gap-4">
        <h2 className="text-3xl w-full text-center bg-white p-4 md:p-12 rounded-lg">Como trabajamos</h2>
        <p className="text-md bg-white p-10 rounded-lg ">Para empezar a trabajar juntos, primero evaluaremos el tipo de remodelación que necesitas. A partir de esto, te ofreceremos nuestro servicio de asesoramiento y cotización de obra según el caso. Si es necesario, te asesoraremos sobre la mejor opción para tu baño.</p>
        <Pricing />
      </section>
    </>
  );
}

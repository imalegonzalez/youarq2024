import { Post } from "@/types/contentful";
import CustomerReview from "../components/CustomerReview copy";

import { RenovationProcess } from "../components/home/renovation-process";
import SelectorObra from "../components/home/SelectorObra";
import HeroLanding from "../components/landing/HeroLanding";
import ObrasLanding from "../components/landing/ObrasLanding";
import { client } from "../lib/contentful/client";


interface ObrasProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  imageSrc?: string;
  showButton?: boolean;
  size?: 'default' | 'small';
}

async function getData(): Promise<Post[]> {
  const res = await client.getEntries({ content_type: 'obra' })
  return res.items as Post[]
}


export default async function Banos() {
  const data = await getData();
  return (
    <>
      <HeroLanding title="Remodelá tu baño con profesionales" subtitle="Dejalo en manos de profesionales. Nos encargamos de todo lo necesario para tu remodelación." buttonText="Quiero remodelar mi casa" imageSrc="http://images.ctfassets.net/e51cz0cgcy2g/1SWcMG1AKwqYpIK8FjDki5/5001c773dc4b39b7bcbb78674887d9cc/Juan_B_Justo_9.webp" showButton={true} size="default" />
      <ObrasLanding data={data}/>
      <RenovationProcess className="max-w-6xl mx-auto mt-10 py-10"/>
      
    </>
  );
}

import Hero from "../components/home/Hero";
import { RenovationProcess } from "../components/home/renovation-process";
import SelectorObra from "../components/home/SelectorObra";


export default async function ComoTrabajamos() {
  return (
    <>
      <Hero showButton={false} title="Como trabajamos" subtitle=""  size="small"/>
      <RenovationProcess className="max-w-6xl mx-auto py-10"/>
      <SelectorObra/>
    </>
  );
}

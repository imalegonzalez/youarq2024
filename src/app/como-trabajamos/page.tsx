import Hero from "../components/home/Hero";
import { RenovationProcess } from "../components/home/renovation-process";


export default async function ComoTrabajamos() {
  return (
    <>
      <Hero/>
      <RenovationProcess className="max-w-6xl mx-auto mt-32"/>
    </>
  );
}

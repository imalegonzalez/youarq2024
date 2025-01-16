import RenovationCalculator from "../components/presupuestador/RenovationCalculator";


export default async function Presupuesto() {
  return (
   <section className="w-full min-h-[90svh] p-4 md:px-3 md:py-10 mt-20 flex flex-col justify-center align-middle items-center">
    
    <RenovationCalculator />
   </section>
  );
}

'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ServiceAccordion() {
  const cards = [
    { title: "1. Visita de Asesoramiento", content: (<ol>
      <li>Visitamos la propiedad para entender tus necesidades y las posibilidades constructivas.</li>
      Un profesional de proyecto te ayuda a buscar ideas que se adapten a:
        <ul>
          <li>- Lo que quieres para tu espacio</li>
          <li>- Lo que permite la propiedad</li>
          <li>- Lo que estás dispuesto a invertir</li>
        </ul>
      <br />
      <li className="font-semibold">Esta visita tiene costo, consulta por tu zona.</li>
    </ol>) },
    { title: "2. Propuesta de Inversión", content: (<ol>
      <li>Analizamos la información recopilada durante la visita.</li>
      <li>Preparamos una propuesta detallada de inversión basada en tus necesidades y presupuesto.</li>
      <li>Te presentamos opciones y alternativas para tu proyecto.</li>
      <li>Discutimos y ajustamos la propuesta según tus preferencias.</li>
    </ol>) },
    { title: "3. Manos a la obra", content: (<ol>
      <li>Una vez aprobada la propuesta, iniciamos la planificación detallada del proyecto.</li>
      <li>Coordinamos el equipo de profesionales y contratistas necesarios.</li>
      <li>Comenzamos la ejecución de la obra según el cronograma establecido.</li>
      <li>Realizamos supervisiones regulares para asegurar la calidad y el cumplimiento de los plazos.</li>
      <li>Mantenemos una comunicación constante contigo durante todo el proceso.</li>
    </ol>)}  
  ]
  return (
    <Accordion type="single" collapsible className="w-full max-w-lg mx-auto space-y-2">
      {cards.map((card, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="border rounded-lg overflow-hidden"
        >
          <AccordionTrigger className="hover:no-underline hover:bg-secondary px-4 py-4 [&[data-state=open]]:bg-primary [&[data-state=open]]:text-black">
            <span className="text-lg font-semibold text-left w-full">{card.title}</span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4 pt-2">
            <p>{card.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    // <div>
    //   <h3 className="text-2xl font-regular text-center ">¿Cómo trabajamos?</h3>
    //   <div className="bg-white px-8 py-5 m-2 rounded-lg">
    //     <Accordion type="single" collapsible className="w-full md:px-24">
    //       <AccordionItem value="item-1">
    //         <AccordionTrigger>1. Visita de Asesoramiento</AccordionTrigger>
    //         <AccordionContent>
    //           <ol>
    //             <li>Visitamos la propiedad para entender tus necesidades y las posibilidades constructivas.</li>
    //             Un profesional de proyecto te ayuda a buscar ideas que se adapten a:
    //               <ul>
    //                 <li>- Lo que quieres para tu espacio</li>
    //                 <li>- Lo que permite la propiedad</li>
    //                 <li>- Lo que estás dispuesto a invertir</li>
    //               </ul>
    //             <br />
    //             <li className="font-semibold">Esta visita tiene costo, consulta por tu zona.</li>
    //           </ol>
    //         </AccordionContent>
    //       </AccordionItem>
    //       <AccordionItem value="item-2">
    //         <AccordionTrigger>2. Propuesta de Inversión</AccordionTrigger>
    //         <AccordionContent>
    //           <ol>
    //             <li>Analizamos la información recopilada durante la visita.</li>
    //             <li>Preparamos una propuesta detallada de inversión basada en tus necesidades y presupuesto.</li>
    //             <li>Te presentamos opciones y alternativas para tu proyecto.</li>
    //             <li>Discutimos y ajustamos la propuesta según tus preferencias.</li>
    //           </ol>
    //         </AccordionContent>
    //       </AccordionItem>
    //       <AccordionItem value="item-3">
    //         <AccordionTrigger>3. Manos a la obra</AccordionTrigger>
    //         <AccordionContent>
    //           <ol>
    //             <li>Una vez aprobada la propuesta, iniciamos la planificación detallada del proyecto.</li>
    //             <li>Coordinamos el equipo de profesionales y contratistas necesarios.</li>
    //             <li>Comenzamos la ejecución de la obra según el cronograma establecido.</li>
    //             <li>Realizamos supervisiones regulares para asegurar la calidad y el cumplimiento de los plazos.</li>
    //             <li>Mantenemos una comunicación constante contigo durante todo el proceso.</li>
    //           </ol>
    //         </AccordionContent>
    //       </AccordionItem>
    //     </Accordion>
    //   </div>
    // </div>

  )
}

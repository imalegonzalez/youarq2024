'use client'

import { useState, useEffect } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ServiceAccordion() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768) // Considera móvil si es menor a 768px
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const cards = [
    {
      title: "Visita de Asesoramiento",
      content: (<ol>
        <li>Visitamos la propiedad para entender tus necesidades y las posibilidades constructivas.</li>
        Un profesional de proyecto te ayuda a buscar ideas que se adapten a lo que queres para tu espacio, lo que permite la propiedad y lo que estas dispuesto a invertir.
        <br />
        <br />
        <li className="font-semibold">Esta visita tiene costo, consulta por tu zona.</li>
      </ol>),
      image: "https://images.ctfassets.net/e51cz0cgcy2g/71mz94l6jqIDZtUtkjAQ87/b197794c55e8dc132bc66c97c8911882/Billinhurst_34.webp" // Add image paths for each card
    },
    {
      title: "Propuesta de Inversión",
      content: (<ol>
        <li>Analizamos la información recopilada durante la visita y preparamos una propuesta detallada de inversión basada en tus necesidades y presupuesto.</li>
        <br />
        <li>En una segunda reunión te presentamos opciones y alternativas para tu proyecto. Discutimos y ajustamos la propuesta según tus preferencias.</li>
      </ol>),
      image: "https://images.ctfassets.net/e51cz0cgcy2g/GhIYjIvEnaZxQEIl8hAJf/d4452de5697a5ed2ef01139599b26b26/Carhue_1.webp"
    },
    {
      title: "Manos a la obra",
      content: (<ol>
        <li>Una vez aprobada la propuesta, iniciamos la planificación detallada del proyecto.</li>
        <br />
        <li>• Coordinamos el equipo de profesionales y contratistas necesarios.</li>
     
        <li>• Comenzamos la ejecución de la obra según el cronograma establecido.</li>

        <li>• Realizamos supervisiones regulares para asegurar la calidad y el cumplimiento de los plazos.</li>

        <li>• Mantenemos una comunicación constante contigo durante todo el proceso.</li>
      </ol>),
      image: "https://images.ctfassets.net/e51cz0cgcy2g/7EQTunohwwamfH7rCVg1xm/5da4a9d2acd6c857049e73b7150bdb9b/Curapaligue_3.webp"
    }
  ]

  const MobileAccordion = () => (
    <div className="relative px-2">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[--primary]" 
      style={{
        background: 'linear-gradient(to bottom, transparent, var(--primary) 10%, var(--primary) 90%, transparent)'}}
      />
      
      {cards.map((card, index) => (
        <section key={index} className="relative mb-8 last:mb-0 flex flex-col">
          {/* Image header */}
          <div className="w-full pb-[75%] relative mb-4">
            <img 
              src={card.image} 
              alt={card.title} 
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div className="flex">
            {/* Timeline dot */}
            <div className="absolute left-4 w-4 h-4 bg-white border-2 border-[--primary] rounded-full transform -translate-x-full translate-y-10 mt-2 " />
            
            {/* Content */}
            <div className="ml-8 bg-white rounded-lg p-10">
              <h3 className="text-xl font-semibold mb-2 text-gray-700 border-b pb-2">{card.title}</h3>
              <div className='text-sm text-gray-500 leading-relaxed'>{card.content}</div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )

  const DesktopCards = () => (
    <div className="relative px-3 xl:px-48">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-[-20px] bottom-0 w-[2px] transform -translate-x-1/2 hidden md:block" style={{
        background: 'linear-gradient(to bottom, transparent, var(--primary) 10%, var(--primary) 90%, transparent)'
      }} />
      {cards.map((card, index) => (
        <section key={index} className="relative flex flex-col md:flex-row w-full mb-16 last:mb-0">
          {/* Timeline dot */}
          <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-white border-2 border-[--primary] rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block z-[1]" />
          
          {index % 2 === 0 ? (
            <>
              <div className="w-full md:w-[calc(50%-2rem)] pr-0 aspect-square">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover rounded-lg shadow-md" />
              
              </div>
              <div className="w-full md:w-[calc(50%-2rem)] p-20 text-lg bg-white rounded-lg mt-4 md:mt-0 md:ml-16 rounded-lg border bg-card text-card-foreground shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 border-b pb-4">{card.title}</h3>
                <div className='text-md text-gray-500 leading-relaxed'>{card.content}</div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full md:w-[calc(50%-2rem)] p-20 text-lg bg-white rounded-lg mb-4 md:mb-0 md:mr-8 rounded-lg border bg-card text-card-foreground shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 border-b pb-4">{card.title}</h3>
                <div className='text-md text-gray-500 leading-relaxed'>{card.content}</div>
              </div>
              <div className="w-full md:w-[calc(50%)] pl-0 md:pl-8 aspect-square">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover rounded-lg shadow-md" />
              </div>
            </>
          )}
        </section>
      ))}
    </div>
  )

  return (
    <div className=" ">
      <h2 className="text-2xl font-regular px-3 mb-4 text-center md:text-4xl md:text-left xl:px-48">¿Cómo trabajamos?</h2>
      {isMobile ? <MobileAccordion /> : <DesktopCards />}
    </div>
  )
}

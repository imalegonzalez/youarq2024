import React from "react";
import { client } from "./lib/contentful/client";
import NewInfiniteScroll from "./components/NewInfiniteScroll";
import CardObra from "./components/CardObra";
import * as utils from "./lib/utils";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import SelectorObra from "./components/home/SelectorObra";
import { ServiceAccordion } from "./components/home/ServiceAccordion";
import CustomerReview from "./components/CustomerReview";
import { RenovationProcess } from "./components/home/renovation-process";
import SimplyProcess from "./components/home/SimplifiedProcess";
import ObraDestacada from "./components/ObraDestacada";
import Link from "next/link";


// Data fetching function
async function fetchData() {
  const res = await client.getEntries({ content_type: "obra" });
  return res.items;
}

interface CardObraProps {
  obra: any;
  // otras propiedades
}

export default async function Home() {
  const data = await fetchData();

  return (
    <>
      <Hero />
      <Features />
      <SelectorObra />
      <SimplyProcess />
      {/* <RenovationProcess/> */}
      <CustomerReview />

      <section className="w-full px-4 max-w-6xl mx-auto flex flex-col gap-4 mb-4 ">
        <div className=" w-full p-10 max-w-6xl mx-auto bg-white flex flex-col rounded-lg ">
          <h3 className="text-2xl font-regular md:text-4xl ">
            Nuestras obras destacadas.
          </h3>
        </div>
        <div className="relative">
          <NewInfiniteScroll className="max-w-screen-sm md:max-w-none px-4" data={data} />
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-r from-transparent to-[#efefef] z-10 pointer-events-none">
            <Link
              href={"/proyectos"}
              className="absolute right-0 top-1/2 -translate-y-1/2 font-semibold bg-white/50 backdrop-blur-sm px-4 py-2 rounded-md pointer-events-auto"
            >
              Ver más
            </Link>
          </div>
        </div>
      </section>
      
    </>
  );
}

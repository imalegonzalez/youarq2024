import React from "react";
import { client } from "./lib/contentful/client";
import NewInfiniteScroll from "./components/NewInfiniteScroll";
import CardObra from "./components/CardObra";
import * as utils from './lib/utils';
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import SelectorObra from "./components/home/SelectorObra";
import { ServiceAccordion } from "./components/home/ServiceAccordion";
import CustomerReview from "./components/CustomerReview";
import { RenovationProcess } from "./components/home/renovation-process";
import SimplyProcess from "./components/home/SimplifiedProcess";
import ObraDestacada from "./components/ObraDestacada";
import Link from "next/link";
import Footer from "./components/Footer";

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
      <Features/>
      <SelectorObra/>
      <SimplyProcess/>
      {/* <RenovationProcess/> */}
      <CustomerReview/>
        <div className=" w-full p-12 max-w-6xl mx-auto bg-white flex flex-col rounded-lg mb-4">  
          <h3 className="text-2xl font-regular md:text-4xl ">Nuestras obras destacadas.</h3>
        </div>
      <section className="relative max-w-6xl mx-auto flex flex-col gap-4 mb-4">
        <NewInfiniteScroll data={data}/>
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-r from-transparent to-[#efefef] z-10">
          <Link href={"/proyectos"} className="flex justify-end items-center h-full">Ver más</Link>
        </div>
      </section>
      <Footer/>
      
    </>
  );
}
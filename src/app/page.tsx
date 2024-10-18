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
      <ServiceAccordion/>
      <CustomerReview/>
      <section className="bg-white py-20  flex flex-col items-center">
        <h2 className="text-2xl font-regular mb-4 text-center md:text-4xl md:text-left xl:px-48">Nuestras obras</h2>
        <div className=" w-full px-4 md:px-0 md:max-w-[1230px] ">
          <NewInfiniteScroll data={data} />
        </div>
      </section>
    </>
  );
}
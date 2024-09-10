import React from "react";
import { client } from "./lib/contentful/client";
import InfiniteScroll from "./components/InfiniteScroll";
import CardObra from "./components/CardObra";
import * as utils from './lib/utils';
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";

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
    </>
  );
}
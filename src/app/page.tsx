import React from "react";
import { client } from "./lib/contentful/client";
import InfiniteScroll from "./components/InfiniteScroll";
import CardObra from "./components/CardObra";
import * as utils from './lib/utils';

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
    <div className="px-1 w-full">
      <h2 className="text-2xl my-3 font-bold">home</h2>
      {data.map((item, index) => (
        <div key={index} className="my-4">
          <CardObra post={item} />
        </div>
      ))}
    </div>
  );
}
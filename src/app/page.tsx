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

export default async function Home() {
  // const data = await getAllObras();

  return (
    <div className="px-1 w-full">
      <h2 className="text-2xl my-3 font-bold">home</h2>
      {/* {data.map((item, index) => (
        <div key={index} className="my-4">
          <CardObra obra={item} />
        </div>
      ))} */}
    </div>
  );
}
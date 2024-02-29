
import Image from "next/image";
import {client} from "../lib/contentful/client"
import InfiniteScroll from "../components/InfiniteScroll";
import CardObra from '../components/CardObra';
import { useState } from "react";
import Gallery from "../components/Gallery";


// posts will be populated at build time by getStaticProps()
export default async function Home() {
  const data = await getData();
  // console.log(data[1].fields.categoria.fields.nombreCategoria)
  



  return (
    <div className=" w-full lg:max-w-5xl lg:m-auto px-4 py-10  ">
      <h2 className=" text-3xl my-3 font-medium ">Proyectos <br></br>Destacados</h2>
      {/* <div className=" flex flex-row gap-2  ">
        {data.map((post, i) => (
          <CardObra key={post.fields.slug} post={post}/>
        ))}
      </div> */}
      <InfiniteScroll data={data}/>
      <Gallery data={data} />
      
    </div>
  )
}
 

export async function getData() {
  const res = await client.getEntries({ content_type: 'obra' })
  return res.items
}

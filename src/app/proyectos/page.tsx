import {client} from "../lib/contentful/client"
import InfiniteScroll from "../components/InfiniteScroll";
import NewInfiniteScroll from "../components/NewInfiniteScroll";
import Gallery from "../components/Gallery";
import { Post } from "@/types/contentful";
import { Reviews } from "../components/Reviews";
import { Suspense } from 'react';

async function getData(): Promise<Post[]> {
  const res = await client.getEntries({ content_type: 'obra' })
  return res.items as Post[]
}

// posts will be populated at build time by getStaticProps()
export default async function Home() {
  const data = await getData();
  // console.log(data[1].fields.categoria.fields.nombreCategoria)
   const filteredObrasDestacadas = data.filter(post => post.fields.obraDestacada);

  return (
    <div className=" w-full  px-3 py-10 mt-12 overflow-x-hidden">
      {/* <h1 className="pathtitle w-full p-5 md:p-12 md:text-4xl text-xl bg-white font-medium rounded-xl">Nuestras Obras</h1> */}
      <section className=" md:px-12 flex flex-col">
        <h2 className=" md:text-2xl text-gray-700 my-3 px-1  mt-8 mb-5 ">Obras destacadas</h2>
        {/* <InfiniteScroll data={data}/> */}
        <NewInfiniteScroll data={filteredObrasDestacadas}/>
      </section>
      <Suspense fallback={<div>Cargando...</div>}>
        <Gallery obras={data} />
      </Suspense>
      
    </div>
  )
}

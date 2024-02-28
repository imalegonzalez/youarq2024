import Image from "next/image";
import {client} from "./lib/contentful/client"
import InfiniteScroll from "./components/InfiniteScroll";
import CardObra from './components/CardObra';


// posts will be populated at build time by getStaticProps()
export default async function Home() {
  const data = await getData();
  // console.log(data[1].fields)



  return (
    <div className=" px-1 w-full  ">
      <h2 className=" text-2xl my-3 font-bold ">Proyectos destacados</h2>
      {/* <div className=" flex flex-row gap-2  ">
        {data.map((post, i) => (
          <CardObra key={post.fields.slug} post={post}/>
        ))}
      </div> */}
      <InfiniteScroll data={data}/>
      <section className=" h-[3000px]">
        {/* {data.map((card) => {
          <CardObra key={card.fields.slug} post={card} />
        })} */}
        {data.map((post, i) => (
                        <CardObra key={post.fields.slug} post={post}/>
                    ))}
      </section>
    </div>
  )
}
 

export async function getData() {
  const res = await client.getEntries({ content_type: 'obra' })
  return res.items
}

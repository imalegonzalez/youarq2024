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
      <h2 className=" text-2xl my-3 font-bold ">home</h2>
      
    </div>
  )
}
 

export async function getData() {
"use server"
  const res = await client.getEntries({ content_type: 'obra' })
  return res.items
}

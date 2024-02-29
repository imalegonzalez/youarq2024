

import CardObra from "./ObraDestacada";
import {client} from "../lib/contentful/client"
import ObraDestacada from "./ObraDestacada";

const InfiniteScroll = ({post, speed=25000, data}) => {
    // const data = getData();
    return (
    // <div className=" flex flex-row gap-2  ">
    //     {data.map((post, i) => (
    //       <CardObra key={post.fields.slug} post={post}/>
    //     ))}
    //   </div>
    <>
        <div className="inner w-full m-auto">
            <div className="wrapper">
                <section className=" flex gap-2" style={{ "--speed": `${speed}ms` }}>
                    {data.map((post, i) => (
                        <ObraDestacada key={post.fields.slug} post={post}/>
                    ))}
                </section>
                <section className=" flex gap-2" style={{ "--speed": `${speed}ms` }}>
                    {data.map((post, i) => (
                        <ObraDestacada key={post.fields.slug} post={post}/>
                    ))}
                </section>
                <section className=" flex gap-2" style={{ "--speed": `${speed}ms` }}>
                    {data.map((post, i) => (
                        <ObraDestacada key={post.fields.slug} post={post}/>
                    ))}
                </section>
            </div>
        </div>
    </>
  )
}

// export async function getData() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await client.getEntries({ content_type: 'obra' })
//     return res.items
//   }

export default InfiniteScroll



"use client"

import { Post } from "@/types/contentful";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import CardObra from "./CardObra";

interface InfiniteScrollProps {
    data: Post[];
    speed?: number;
}


const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ data }) => {
    const filteredData = data.filter(post => post.fields.obraDestacada);
    const plugins = [new AutoPlay({  direction: "NEXT", stopOnHover: true  })];
    return (
        <>
            <Flicking 
                align="prev"
                circular={true}
                plugins={plugins}
                >
               {filteredData.map((post, i) => (
                    <div key={post.fields.slug}>
                        <CardObra post={post} size="glass"  />
                    </div>
                ))}
                 
            </Flicking>
            
        </>
    )
}

export default InfiniteScroll



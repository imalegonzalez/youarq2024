"use client"

import { Post } from "@/types/contentful";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import CardObra from "./CardObra";
import { useRef } from "react";

interface InfiniteScrollProps {
    data: Post[];
    speed?: number;
    className?: string;
}


const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ data, className }) => {
    const filteredData = data.filter(post => post.fields.obraDestacada);
    const plugins = [new AutoPlay({  direction: "NEXT", stopOnHover: true, duration:2000, animationDuration:1000  })];
    const viewportRef = useRef();
    return (
        <>
            <Flicking 
                align="prev"
                circular={true}
                preventDefaultOnDrag={true}
                plugins={plugins}
                inputType={["touch", "mouse"]}
                className={className}
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



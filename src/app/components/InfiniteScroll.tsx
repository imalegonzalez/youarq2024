

import CardObra from "./ObraDestacada";
import {client} from "../lib/contentful/client"
import ObraDestacada from "./ObraDestacada";
import { CSSProperties } from 'react';
import { Post } from "@/types/contentful";

interface InfiniteScrollProps {
    data: Post[];
    speed?: number;
  }

interface CustomCSSProperties extends CSSProperties {
    '--speed'?: string;
  }
  


const InfiniteScroll: React.FC<InfiniteScrollProps> = ({speed=25000, data}) => {
    const styles = {
        '--speed': `${speed}ms`,
      } as React.CSSProperties;
    return (
    <>
        <div className="inner w-full m-auto">
            <div className="wrapper">
                <section className=" flex gap-2" style={styles}>
                    {data.map((post, i) => (
                        <ObraDestacada key={post.fields.slug} post={post}/>
                    ))}
                </section>
                <section className=" flex gap-2" style={styles}>
                    {data.map((post, i) => (
                        <ObraDestacada key={post.fields.slug} post={post}/>
                    ))}
                </section>
                <section className=" flex gap-2" style={styles}>
                    {data.map((post, i) => (
                        <ObraDestacada key={post.fields.slug} post={post}/>
                    ))}
                </section>
            </div>
        </div>
    </>
  )
}

export default InfiniteScroll



import { client } from "@/app/lib/contentful/client";
import { Button } from "@/components/ui/button";
import { Post } from "@/types/contentful";
import CardObra from "../CardObra";
import InfiniteScroll from "../NewInfiniteScroll";

async function ObrasLanding({ data }) {
  const filteredData = data.filter(
    (post: Post) => post.fields.categoria.fields.nombreCategoria === "Baño"
  );
  console.log(filteredData.length);
  return (
    <section className="flex gap-2 flex-wrap max-w-6xl justify-center mx-auto  py-10">
      <div className="flex gap-2 flex-wrap w-full">
        {filteredData.map((post: Post, index: number) => (
          <CardObra className="w-[25%]" post={post} key={index} />
        ))}
        {/* <InfiniteScroll data={filteredData} className=""/> */}
      </div>
    </section>
  );
}

export default ObrasLanding;

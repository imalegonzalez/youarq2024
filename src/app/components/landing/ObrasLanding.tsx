"use client";
import { useState } from "react";
import { Post } from "@/types/contentful";
import { Button } from "@/components/ui/button";
import { ObraPreview } from "./ObraPreview";

function ObrasLanding({ data, category, title="Nuestras obras destacadas" }: { data: Post[]; category?: string, title?: string }) {
  const [showAll, setShowAll] = useState(false);
  let filteredData = data;

  if (category) {
    const filteredData = data.filter(
      (post: Post) => post.fields.categoria.fields.nombreCategoria === category
    );
  }

  console.log(filteredData);

  // Mostrar solo 4 elementos o todos dependiendo del estado
  const displayData = showAll ? filteredData : filteredData.slice(0, 4);

  return (
    <section className="flex flex-col items-center  w-full max-w-6xl mx-auto">
      <div className="w-full px-4 justify-center flex flex-col items-center">
        <h2 className="text-3xl mb-4 w-full text-center bg-white p-4 rounded-lg py-10">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          {displayData.map((post: Post, index: number) => (
            <div key={index}>
              <ObraPreview post={post} />
            </div>
          ))}
        </div>

        {filteredData.length > 4 && !showAll && (
          <Button
            onClick={() => setShowAll(true)}
            className="mt-2 mb-4 bg-[--primary] hover:bg-black text-white"
          >
            Mostrar más
          </Button>
        )}
      </div>
      <div></div>
    </section>
  );
}

export default ObrasLanding;

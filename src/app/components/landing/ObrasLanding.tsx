"use client";
import { useState } from "react";
import { client } from "@/app/lib/contentful/client";
import { Post } from "@/types/contentful";
import CardObra from "../CardObra";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ObrasLanding({ data, category }: { data: Post[]; category: string }) {
  const [showAll, setShowAll] = useState(false);

  const filteredData = data.filter(
    (post: Post) => post.fields.categoria.fields.nombreCategoria === category
  );

  // Mostrar solo 4 elementos o todos dependiendo del estado
  const displayData = showAll ? filteredData : filteredData.slice(0, 4);

  return (
    <section className="flex flex-col items-center  w-full max-w-6xl mx-auto">
      <div className="w-full px-4 justify-center flex flex-col items-center">
        <h2 className="text-3xl mb-4 w-full text-center bg-white p-4 rounded-lg py-10">
          Nuestros baños destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          {displayData.map((post: Post, index: number) => (
            <div key={index}>
              <Drawer>
                <DrawerTrigger className="w-full">
                  <CardObra
                    className="w-full md:aspect-square"
                    post={post}
                    type="noLink"
                  />
                </DrawerTrigger>
                <DrawerContent className="w-full h-fit p-4 md:mx-auto">
                  <div className="flex justify-between items-center pb-4">
                    <h1 className="text-3xl">{post.fields.nombreDeObra}</h1>
                    <DrawerClose>
                      <Button variant="outline">X</Button>
                    </DrawerClose>
                  </div>
                  <div className="w-full max-h-full">
                    <Carousel
                      opts={{
                        align: "start",
                      }}
                      className=""
                    >
                      <CarouselContent className="">
                        {post.fields.fotosAntes?.map((image) => (
                          <CarouselItem key={image.sys.id} className="flex justify-center ">
                            <div className="aspect-[3/4] w-full relative">
                              <img 
                                src={image.fields.file.url} 
                                alt={image.fields.nombreDeObra}
                                className="absolute inset-0 w-full h-full object-cover" 
                              />
                            </div>
                          </CarouselItem>
                        ))}
                        {post.fields.fotosDespues?.map((image) => (
                          <CarouselItem key={image.sys.id} className="flex justify-center ">
                            <div className="aspect-[3/4] w-full relative">
                              <img 
                                src={image.fields.file.url} 
                                alt={image.fields.nombreDeObra}
                                className="absolute inset-0 w-full h-full object-cover" 
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className=" absolute top-1/2 left-0 ml-2 "/>
                      <CarouselNext className=" absolute top-1/2 right-0 mr-2"/>
                    </Carousel>
                  </div>
                </DrawerContent>
              </Drawer>
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

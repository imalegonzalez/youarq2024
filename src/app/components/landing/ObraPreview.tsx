import { Post } from "@/types/contentful";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardObra from "@/app/components/CardObra";
import { useMediaQuery } from "@/hooks/useMediaQuery"; // Necesitarás crear este hook
import Image from "next/image";

interface ObraPreviewProps {
  post: Post;
}

export function ObraPreview({ post }: ObraPreviewProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const allImages = [
    ...(post.fields.fotosAntes || []), 
    ...(post.fields.fotosDespues || [])
  ];

  const ModalContent = () => (
    <>
      <div className="flex justify-between items-center pb-4">
        <h1 className="text-3xl">{post.fields.nombreDeObra}</h1>
        {isDesktop ? (
          <DialogClose className="text-xl px-2">x</DialogClose>
        ) : (
          <DrawerClose>
            <Button variant="outline">x</Button>
          </DrawerClose>
        )}
      </div>
      <div className="w-full max-h-full">
        <Carousel className="" opts={{ align: "start",  }}>
          <CarouselContent className="w-full">
            {allImages.map((image) => (
              <CarouselItem key={image.sys.id} className="flex justify-center basis-full md:basis-96">
                <div className="aspect-[3/4] w-full relative">
                  <Image 
                    src={image.fields.file.url} 
                    alt={`${post.fields.nombreDeObra} - Antes`}
                    className="absolute inset-0 w-full h-full object-cover" 
                    priority
                    fill
                  />
                </div>
              </CarouselItem>
            ))}
            
          </CarouselContent>
          <div className="absolute flex justify-center items-center bottom-7 right-1/2 z-10">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </>
  );

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger className="w-full">
          <CardObra className="w-full md:aspect-square" post={post} type="noLink" />
        </DialogTrigger>
        <DialogContent className="w-full max-w-4xl h-fit p-4">
          <ModalContent />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger className="w-full">
        <CardObra className="w-full md:aspect-square" post={post} type="noLink" />
      </DrawerTrigger>
      <DrawerContent className="w-full min-h-2/3 p-4">
        <ModalContent />
      </DrawerContent>
    </Drawer>
  );
}
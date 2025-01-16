"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

function ImagesCarousel({ images }: { images: [] }) {
    return (
        <div className="w-full">
            <Carousel
              opts={{
                loop: true,
                dragFree: false,
                draggable: false,
              }}
              plugins={[
                AutoScroll({
                  speed: 1,
                  stopOnInteraction: false
                })
              ]}
              className="py-10"
            >
              <CarouselContent>
                {images?.map((image, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <div className="aspect-[3/4] w-full relative">
                      <img 
                        src={image} 
                        alt={`Imagen ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg" 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
    );
}

export default ImagesCarousel; 


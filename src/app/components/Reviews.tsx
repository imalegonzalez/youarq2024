'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import AdaptiveImage from "./AdaptativeImagen"

const reviews = [
  {
    name: "Alice Johnson",
    image: "http://images.ctfassets.net/e51cz0cgcy2g/1SWcMG1AKwqYpIK8FjDki5/5001c773dc4b39b7bcbb78674887d9cc/Juan_B_Justo_9.webp",
    review: "The kitchen renovation exceeded our expectations. It's now the heart of our home!",
  },
  {
    name: "Bob Smith",
    image: "http://images.ctfassets.net/e51cz0cgcy2g/6VknuaoiikMGgmqgYv9zcW/90c5eec98cba77310b50525fe7cb3479/Zapiola_9.webp",
    review: "Our bathroom remodel is stunning. The attention to detail was impressive.",
  },
  {
    name: "Carol Davis",
    image: "http://images.ctfassets.net/e51cz0cgcy2g/4bHWz31ZTJkr23PWhI3TPL/010918d70177b3ac01c82ea69d4800b2/La_Comarca_4.webp",
    review: "The living room makeover transformed our space. It's now so inviting and comfortable.",
  },
  {
    name: "David Wilson",
    image: "http://images.ctfassets.net/e51cz0cgcy2g/5FVVbcKcXtTpGsTuI2hK0e/28caafc359e930994ced06b9a1b026bc/Arevalo_1.webp",
    review: "The exterior update gave our home a fresh, modern look. We love coming home now!",
  }
]

export function Reviews() {
  return (
    <Carousel className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={index}>
            <Card className="overflow-hidden">
              <div className="relative h-64 sm:h-80 md:h-96">
                <AdaptiveImage 
                  src={review.image} 
                  alt={`Renovation by ${review.name}`}
                  className=" inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-x-4 bottom-4 p-4 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-md" />
                  <div className="relative z-10">
                    <p className="text-white text-sm mb-2">{review.review}</p>
                    <p className="text-white font-bold">{review.name}</p>
                  </div>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}
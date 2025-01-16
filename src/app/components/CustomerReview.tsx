import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Testimonial {
  id: string
  date: string
  image: string
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    date: "3.14",
    image: "http://images.ctfassets.net/e51cz0cgcy2g/1SWcMG1AKwqYpIK8FjDki5/5001c773dc4b39b7bcbb78674887d9cc/Juan_B_Justo_9.webp",
    quote: "The platform has completely transformed how we approach our daily operations. The efficiency gains have been remarkable.",
    author: "Alex Morgan",
    role: "CEO, TechCorp"
  },
  {
    id: "2",
    date: "3.15",
    image: "http://images.ctfassets.net/e51cz0cgcy2g/6VknuaoiikMGgmqgYv9zcW/90c5eec98cba77310b50525fe7cb3479/Zapiola_9.webp",
    quote: "Implementation was seamless, and the results were immediate. Our team adapted quickly to the new system.",
    author: "Sam Chen",
    role: "Director of Operations"
  },
  {
    id: "3",
    date: "3.16",
    image: "http://images.ctfassets.net/e51cz0cgcy2g/4bHWz31ZTJkr23PWhI3TPL/010918d70177b3ac01c82ea69d4800b2/La_Comarca_4.webp",
    quote: "The level of customer support and attention to detail has exceeded our expectations at every turn.",
    author: "Jordan Lee",
    role: "Project Manager"
  },
  {
    id: "4",
    date: "3.16",
    image: "http://images.ctfassets.net/e51cz0cgcy2g/5FVVbcKcXtTpGsTuI2hK0e/28caafc359e930994ced06b9a1b026bc/Arevalo_1.webp",
    quote: "The level of customer support and attention to detail has exceeded our expectations at every turn.",
    author: "Jordan Lee",
    role: "Project Manager"
  }
]

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

export default function TestimonialCarousel() {
  return (
    <div className="w-full max-w-6xl p-4 mx-auto gap-2 flex flex-col items-center">
      <div className="p-12 bg-white rounded-lg w-full justify-center flex">
        <h3 className="text-2xl font-regular text-center md:text-4xl md:text-left ">Qué dicen nuestros clientes</h3>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="basis-full md:basis-1/2 lg:basis-1/3">
              <Card className=" bg-transparent border-0">
                <CardContent className="p-1">
                  <div className="grid gap-4">
                    <div className="space-y-3">
                      <div className="overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt="Testimonial"
                          width={400}
                          height={300}
                          className="aspect-[4/3] object-cover rounded-lg"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="text-sm text-muted-foreground">
                          {testimonial.date}
                        </div>
                        <blockquote className="text-lg font-medium leading-relaxed max-w-xs md:max-w-none">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <footer className="text-sm text-muted-foreground">
                          <cite className="font-semibold not-italic">
                            {testimonial.author}
                          </cite>
                          {" — "}
                          {testimonial.role}
                        </footer>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className=" justify-end gap-2 pt-4 hidden md:flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  )
}


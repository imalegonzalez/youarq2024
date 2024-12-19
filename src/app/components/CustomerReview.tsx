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
    image: "/placeholder.svg",
    quote: "The platform has completely transformed how we approach our daily operations. The efficiency gains have been remarkable.",
    author: "Alex Morgan",
    role: "CEO, TechCorp"
  },
  {
    id: "2",
    date: "3.15",
    image: "/placeholder.svg",
    quote: "Implementation was seamless, and the results were immediate. Our team adapted quickly to the new system.",
    author: "Sam Chen",
    role: "Director of Operations"
  },
  {
    id: "3",
    date: "3.16",
    image: "/placeholder.svg",
    quote: "The level of customer support and attention to detail has exceeded our expectations at every turn.",
    author: "Jordan Lee",
    role: "Project Manager"
  },
  {
    id: "4",
    date: "3.16",
    image: "/placeholder.svg",
    quote: "The level of customer support and attention to detail has exceeded our expectations at every turn.",
    author: "Jordan Lee",
    role: "Project Manager"
  }
]

export default function TestimonialCarousel() {
  return (
    <div className="w-full max-w-6xl px-4 mx-auto">
      <h3 className="text-2xl font-regular text-center md:text-4xl md:text-left mb-12 p-12 bg-white rounded-lg">Qué dicen nuestros clientes</h3>
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
                          className="aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500"
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


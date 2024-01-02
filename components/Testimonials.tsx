"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const imageNumbers = Array.from({ length: 12 }, (_, i) => i + 1);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="testimonials">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 sm:text-4xl md:text-5xl"
          >
            Hear what people say about us
          </h2>
        </div>
        <div data-aos="fade-down">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full max-w-xs "
          >
            <CarouselContent>
              {imageNumbers.map((num) => (
                <CarouselItem key={num} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={`/comments/${num}.png`}
                          alt={`Comment ${num}`}
                          width={500}
                          height={300}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

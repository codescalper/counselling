"use client";
import { Card } from "@/components/ui/card";
import Image from 'next/image';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import  Carousel  from 'better-react-carousel';

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
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2  data-aos="fade-up" className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 sm:text-4xl md:text-5xl">
            Hear what people say about us
          </h2>
        </div>
        <div data-aos="fade-down">
          <Carousel cols={3}
            rows={1}
            gap={10}
            autoplay={2500}
            dotColorActive='rgb(89,66,233)'
            arrowRight={
              <AiFillRightCircle
                size={50}
                className='absolute top-1/2 right-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full  text-2xl text-blue-600'
              />
            }
            arrowLeft={
              <AiFillLeftCircle
                size={50}
                className='absolute top-1/2 left-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full  text-2xl text-blue-600'
              />
            }
            showDots
            loop
            responsiveLayout={[
              {
                breakpoint: 1380,
                cols: 2,
                gap: 5,
              },
              {
                breakpoint: 640,
                cols: 1,
                gap: 10,
              },
            ]} >
            {imageNumbers.map((num) => (
                 <Carousel.Item key={num} className="w-[95%] max-sm:w-[90%] max-xsm:w-[85%]">
              <div>
                
                <Card>
                  <div className="p-4">
                    <Image src={`/comments/${num}.png`} alt={`Comment ${num}`} width={500} height={300} />
                  </div>
                </Card>
                </div>
                </Carousel.Item>
            ))}
            </Carousel>
     
        </div>
      </div>
    </section>
  );
}

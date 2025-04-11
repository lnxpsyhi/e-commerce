"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

type PropType = {
  images: string[];
};

const CarouselComponent: React.FC<PropType> = (props) => {
  const { images } = props;
  const plugin = React.useRef(
    Autoplay({
      delay: 6000,
    })
  );

  return (
    <div className="w-full m-2">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, idx) => (
            <CarouselItem key={idx}>
              <Image
                className="w-full h-64 sm:h-auto"
                key={idx}
                src={image}
                alt={`Image ${idx}`}
                width={1293}
                height={404}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-transparent text-gray-400" />
        <CarouselNext className="right-2 bg-transparent text-gray-400" />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

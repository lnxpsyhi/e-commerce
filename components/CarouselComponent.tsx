import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Image from "next/image";

const CarouselComponent = () => {
  return (
    <div className="p-2 m-2">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Image
              className="w-full"
              src="/1.avif"
              alt="first"
              width={1293}
              height={404}
            />
          </CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

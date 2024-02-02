"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import CardSVG from "@/components/assets/card";

export const CarouselComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === CarouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? CarouselItems.length - 1 : prevIndex - 1
    );
  };

  const CarouselItems = [
    <CardSVG key={1} />,
    <CardSVG key={2} />,
    <CardSVG key={3} />,
    <CardSVG key={4} />,
  ];

  return (
    <Carousel
      opts={{
        align: "center",
      }}
    >
      <CarouselContent className="-ml-1">
        {CarouselItems.map((item, index) => (
          <CarouselItem key={index} className={`lg:basis-1/3 md:basis-1/2`}>
            <CardSVG />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

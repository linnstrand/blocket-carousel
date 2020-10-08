import React, { useEffect, useState } from "react";
import { CarouselImage } from "../CarouselImage";
import CarouselArrow from "./CarouselArrow";
import CarouselPager from "./CarouselPager";
import ImageView from "./ImageView";

interface Props {
  images: CarouselImage[];
}

const BlocketCarousel = ({ images }: Props) => {
  const [active, setActive] = useState<CarouselImage | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [shown, setShown] = useState<CarouselImage[]>([]);

  useEffect(() => {
    const shown = images.slice(startIndex, startIndex + 3);
    setShown(shown);
  }, [images, startIndex]);

  const moveRangeToActive = (active: CarouselImage, index: number) => {
    setActive(active);
    slide(index - 1);
  };

  const slide = (index: number) => {
    const newIndex = Math.min(Math.max(index, 0), images.length - 3);
    setStartIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {shown.map((image) => (
          <ImageView
            clickImage={() => setActive(image)}
            activeId={!!active ? active.id : -1}
            image={image}
          />
        ))}
      </div>
      <CarouselPager
        images={images}
        activeId={!!active ? active.id : -1}
        activate={(image, index) => moveRangeToActive(image, index)}
      />
      <CarouselArrow
        className={`carousel-prev${startIndex === 0 ? " hidden" : ""}`}
        slide={() => slide(startIndex - 3)}
        iconName="navigate_before"
      />
      <CarouselArrow
        className={`carousel-next${
          startIndex === images.length - 3 ? " hidden" : ""
        }`}
        slide={() => slide(startIndex + 3)}
        iconName="navigate_next"
      />
    </div>
  );
};

export default BlocketCarousel;

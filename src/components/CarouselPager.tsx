import React from "react";
import { CarouselImage } from "../CarouselImage";

interface Props {
  images: CarouselImage[];
  activeId: number;
  activate: (image: CarouselImage, index: number) => void;
}

const CarouselPager = ({ images, activeId, activate }: Props) => {
  return (
    <ol className="carousel-indicator">
      {images.map((image, index) => (
        <li
          className={activeId === image.id ? "active" : ""}
          key={image.id}
          onClick={() => activate(image, index)}
        >
          <i className="material-icons">radio_button_checked</i>
        </li>
      ))}
    </ol>
  );
};

export default CarouselPager;

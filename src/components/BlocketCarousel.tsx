import React, { useEffect, useState } from "react";
import { CarouselImage } from "../CarouselImage";

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
        {shown.map((image, index) => (
          <div
            className={`carousel-item${
              active?.id === image.id ? " active" : ""
            }`}
            key={image.id}
            onClick={() => moveRangeToActive(image, index)}
          >
            <div className="carousel-image">
              <img src={image.url} alt={image.name} />
            </div>
            <div>{image.name + image.id}</div>
          </div>
        ))}
      </div>
      <ol className="carousel-indicator">
        {images.map((image, index) => (
          <li
            className={active?.id === image.id ? "active" : ""}
            key={image.id}
            onClick={() => moveRangeToActive(image, index)}
          >
            <i className="material-icons">radio_button_checked</i>
          </li>
        ))}
      </ol>
      <div
        className="carousel-prev"
        role="button"
        onClick={() => slide(startIndex - 3)}
      >
        <span className="prev-icon">
          <i className="material-icons">navigate_before</i>
        </span>
      </div>
      <div
        className="carousel-next"
        role="button"
        onClick={() => slide(startIndex + 3)}
      >
        <span className="next-icon">
          <i className="material-icons">navigate_next</i>
        </span>
      </div>
    </div>
  );
};

export default BlocketCarousel;

import React, { useEffect, useState } from "react";
import { CarouselImage } from "../CarouselImage";

interface Props {
  images: any[];
}

const BlocketCarousel = ({ images }: Props) => {
  const [active, setActive] = useState<Number>(0);
  const [shown, setShown] = useState<CarouselImage[]>([]);
  useEffect(() => {
    const shown = images.slice(0, 3);
    setShown(shown);
  }, [active, images]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {shown.map((image) => (
          <div
            className={`carousel-item${active === image.id ? " active" : ""}`}
            key={image.id}
          >
            <div className="carousel-image">
              <img src={image.url} alt={image.name} />
            </div>
          </div>
        ))}
      </div>
      <ol className="carousel-indicator">
        {images.map((image) => (
          <li className={active === image.id ? "active" : ""} key={image.id}>
            <i className="material-icons">radio_button_checkedk</i>
          </li>
        ))}
      </ol>
      <a href="slide-prev" className="carousel-prev">
        <span className="prev-icon">
          <i className="material-icons">navigate_before</i>
        </span>
      </a>
      <a href="slide-next" className="carousel-next">
        <span className="next-icon">
          <i className="material-icons">navigate_next</i>
        </span>
      </a>
    </div>
  );
};

export default BlocketCarousel;

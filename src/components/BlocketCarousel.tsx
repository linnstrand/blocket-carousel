import React from "react";

interface Props {
  images: any[];
}

const BlocketCarousel = ({ images }: Props) => {
  return (
    <div className="carousel">
      {images?.length > 0 &&
        images.map((image) => (
          <div className="carousel-item" key="image.id">
            <img src={image.url} alt={image.name} />
          </div>
        ))}
      <ol className="carousel-indicator">
        <li>indicator</li>
      </ol>
      <a href="slide-prev" className="carousel-prev">
        <span className="prev-icon"></span>
      </a>
      <a href="slide-next" className="carousel-prev">
        <span className="next-icon"></span>
      </a>
    </div>
  );
};

export default BlocketCarousel;

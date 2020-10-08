import React from "react";
import { CarouselImage } from "../CarouselImage";

interface Props {
  image: CarouselImage;
  activeId: number;
  clickImage: () => void;
}

const ImageView = ({ image, activeId, clickImage }: Props) => {
  return (
    <div
      className={`carousel-item${activeId === image.id ? " active" : ""}`}
      onClick={clickImage}
    >
      <div className="carousel-image">
        <img src={image.url} alt={image.name} />
      </div>
      <div>{image.name + image.id}</div>
    </div>
  );
};

export default ImageView;

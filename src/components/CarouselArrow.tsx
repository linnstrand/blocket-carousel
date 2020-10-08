import React from "react";

interface Props {
  iconName: string;
  className: string;
  slide: () => void;
}

const CarouselArrow = ({ iconName, className, slide }: Props) => {
  return (
    <div className={className} onClick={slide}>
      <span className="paging-icon">
        <i className="material-icons">{iconName}</i>
      </span>
    </div>
  );
};

export default CarouselArrow;

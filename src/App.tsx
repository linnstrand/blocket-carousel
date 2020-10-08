import React, { useEffect, useState } from "react";
import BlocketCarousel from "./components/BlocketCarousel";
import { get } from "./util/FetchWrapper";
import { CarouselImage } from "./CarouselImage";

const App: React.FC = () => {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Retrieve images on load.
  // Prepare to indicate load-time and errors
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await get<CarouselImage[]>();

        setImages(result);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <header></header>
      <main className="carousel-content">
        <BlocketCarousel images={images}></BlocketCarousel>
      </main>
    </div>
  );
};

export default App;

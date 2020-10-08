import React, { useEffect, useState } from "react";
import BlocketCarousel from "./components/BlocketCarousel";
import { get } from "./util/FetchWrapper";

const App: React.FC = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await get();

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

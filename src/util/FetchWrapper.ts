import { CarouselImage } from "../CarouselImage";

const mockImage: CarouselImage = {
  url: "/placeholder_view_vector.svg",
  name: "Test",
  id: 1,
};

async function getMockData<T>(): Promise<T> {
  let images: CarouselImage[] = [];
  for (let index = 0; index < 10; index++) {
    // use object spread for shallow copy, and updating ID
    images.push({ ...mockImage, id: index });
  }

  const promise = new Promise((resolve, reject) => {
    resolve(images);
  });

  return promise as Promise<T>;
}

//simplified mock of API call
export async function get<T>(): Promise<T> {
  return await getMockData<T>();
}

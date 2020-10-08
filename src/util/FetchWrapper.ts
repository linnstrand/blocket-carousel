const mockImage = [
  {
    url: "/placeholder_view_vector.svg",
    name: "Test",
    id: 1,
  },
];

export async function get(): Promise<any> {
  return new Promise((resolve, reject) => {
    resolve(mockImage);
  });
}

export type Car = {
  name: string;
  slug: string;
  modelPath: string;
  thumbnail: string;
};

export const cars: Car[] = [
  {
    name: "Audi R8",
    slug: "audi-r8",
    modelPath: "/models/audi.fbx",
    thumbnail: "/images/audi_thumbnail.jpg",
  },
  // Add more cars here in the future
];

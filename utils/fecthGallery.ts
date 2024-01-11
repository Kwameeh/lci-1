import { Gallery } from "@/typing";
export const fetchGallery = async () => {
  const res = await fetch(`http://localhost:3000/api/getGallery`);
  console.log(res);
  const data = await res.json();
  const gallery: Gallery[] = data.gallery;

  return gallery;
};

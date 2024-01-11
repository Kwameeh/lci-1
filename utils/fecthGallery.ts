import { Gallery } from "@/typing";
export const fetchGallery = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getGallery`);
  console.log(res);
  const data = await res.json();
  const gallery: Gallery[] = data.gallery;

  return gallery;
};

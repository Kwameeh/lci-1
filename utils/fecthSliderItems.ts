import { SliderItems } from "@/typing";
export const fetchSliderItems = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/getSliderItems`,
  );
  console.log(res);
  const data = await res.json();
  const sliderItems: SliderItems[] = data.sliderItems;

  return sliderItems;
};

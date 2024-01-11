import { SliderItems } from "@/typing";
export const fetchSliderItems = async () => {
  const res = await fetch(`http://localhost:3000/api/getSliderItems`);
  console.log(res);
  const data = await res.json();
  const sliderItems: SliderItems[] = data.sliderItems;

  return sliderItems;
};

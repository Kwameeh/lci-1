import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { SliderItems } from "@/typing";
import Image from "next/image";
import { urlFor } from "@/sanity";

type PropType = {
  options?: EmblaOptionsType;
  images: SliderItems[];
};

export const EmblaCarousel = ({ images }: PropType) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 60 }, [
    Autoplay({ jump: false, delay: 10000 }),
  ]);

  return (
    <div className=" overflow-hidden  " ref={emblaRef}>
      <div className="mx-auto flex h-[32rem] gap-4 rounded-lg p-2 bg-blend-multiply">
        {images.map((image) => (
          <div
            key={image._id}
            className="h-full w-full flex-none rounded-lg bg-slate-500 mix-blend-multiply"
          >
            <Image
              className="h-full w-full rounded-lg object-cover mix-blend-multiply  "
              src={urlFor(image?.mainImage).url()}
              alt={image.title}
              width={400}
              height={200}
            />
          </div>
        ))}
        {/* <div className="w-full flex-none">Slide 1</div>
        <div className="w-full flex-none">Slide 2</div>
        <div className="w-full flex-none">Slide 3</div> */}
      </div>
    </div>
  );
};

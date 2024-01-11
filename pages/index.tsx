import ImageRight from "@/components/ImageRight";
import ImageLeft from "@/components/ImageLeft";

import Space from "@/components/Space";
import FeaturedPost from "@/components/post/FeaturedPost";
import Section from "@/components/sections/Section";
import { Inter } from "next/font/google";
import HeroImage from "@/components/HeroImage";
import { GetStaticProps } from "next";
import { SliderItems } from "@/typing";
import { fetchSliderItems } from "@/utils/fecthSliderItems";
import { EmblaCarousel } from "@/components/slider/EmblaCarousel";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  sliderItems: SliderItems[];
};

export default function Home({ sliderItems }: Props) {
  return (
    <main>
      <EmblaCarousel images={sliderItems} />

      {/* <section className="h-96 pt-16 text-center md:pt-32">
        <h1 className="px-4 text-4xl font-bold md:px-48 md:text-6xl">
          Responsive React and Tailwind CSS components.
        </h1>
        <p className="px-16 pt-4 text-lg">
          This is the hero section with a button
        </p>

        <button
          style={{ background: "#00aaff" }}
          className="mt-4 w-9/12 rounded-md bg-blue-500 p-1  text-lg text-white md:w-40"
        >
          Get Started!
        </button>
      </section> */}
      <Section />
      <Space />
      <div className="flex  flex-wrap gap-8">
        <FeaturedPost />
        <FeaturedPost />
        <FeaturedPost />
      </div>
      <Space />
      <ImageRight />
      <Space />
      <ImageLeft />
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const sliderItems: SliderItems[] = await fetchSliderItems();
  return {
    props: {
      sliderItems,
    },
    revalidate: 10,
  };
};

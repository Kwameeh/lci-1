import NewsComp from "@/components/news/NewsComp";
import EmblaCarousel from "@/components/thumdnial/EmblaCarousel";
import { Gallery, News } from "@/typing";
import { fetchGallery } from "@/utils/fecthGallery";
import { fetchNews } from "@/utils/fecthNews";
import { GetStaticProps } from "next";
import React from "react";

type Props = {
  gallery: Gallery[];
  news: News[];
};

export default function index({ gallery, news }: Props) {
  console.log(news);
  return (
    <div>
      <NewsComp news={news} />

      {/* <EmblaCarousel gallery={gallery} /> */}
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const gallery: Gallery[] = await fetchGallery();
  const news: News[] = await fetchNews();

  return {
    props: {
      gallery,
      news,
    },
    revalidate: 10,
  };
};

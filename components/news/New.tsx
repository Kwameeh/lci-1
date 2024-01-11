import Image from "next/image";
import React from "react";
import banner from "@/assets/images/banner-home.jpg";
import { News } from "@/typing";
import { urlFor } from "@/sanity";

type Props = {
  news: News[];
};

export default function New({ news }: Props) {
  const longText = "";

  return (
    <div>
      {news &&
        news.map((news) => (
          <div
            key={news._id}
            className="mx-auto flex flex-wrap justify-center gap-12 px-4"
          >
            <Image
              className=" w-full rounded-md object-cover md:w-4/12 "
              src={urlFor(news.coverImage).url()}
              alt="banner"
              width={400}
              height={300}
            />

            <div className="flex flex-col items-start justify-center md:w-1/2">
              <h1 className="font-light uppercase text-primary   ">
                Lady pastor
              </h1>
              <h1 className="pb-4 text-2xl font-bold text-secondary md:text-4xl">
                {news.title}
              </h1>
              <p className=" font-medium  text-gray-600 md:text-lg">
                {news.content}
              </p>
              <span className="">Read more</span>
            </div>
          </div>
        ))}
    </div>
  );
}

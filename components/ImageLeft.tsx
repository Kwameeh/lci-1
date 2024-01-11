import Image from "next/image";
import banner from "@/assets/images/banner-home.jpg";
import React from "react";

type Props = {};

export default function ImageRight({}: Props) {
  return (
    <div className="mx-auto  flex flex-row-reverse  flex-wrap gap-12 px-4">
      <Image
        className="w-4/12 rounded-md "
        src={banner}
        alt="banner"
        width={400}
        height={300}
      />

      <div className="flex flex-col items-start justify-center md:w-1/2">
        <h1 className="font-light uppercase text-primary   ">OUR COMMUNITY</h1>
        <h1 className="pb-4 text-2xl font-bold text-secondary md:text-4xl">
          Sharing the God’s love with everyone
        </h1>
        <p className=" font-medium  text-gray-600 md:text-lg">
          Our mission is helping people find their way back to God. We
          accomplish this by reaching people far from God, restoring God’s dream
          for the world, and reproducing this mission in others. There are three
          key relationships that help you develop a growing relationship with
          Jesus.
        </p>
      </div>
    </div>
  );
}

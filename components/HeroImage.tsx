import { SliderItems } from "@/typing";
import React from "react";

type Props = {
  title: string;
};

export default function HeroImage({ title }: Props) {
  return (
    <section className="bg-gray-700  bg-center bg-no-repeat bg-blend-multiply ">
      <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl"></p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"></div>
      </div>
    </section>
  );
}

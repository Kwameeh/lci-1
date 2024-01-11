import Image from "next/image";
import banner from "@/assets/images/banner-home.jpg";
import React from "react";
import Text from "./Text";

type Props = {
  title: string;
};

export default function Posts({ title }: Props) {
  return (
    <section className="mx-auto w-full  items-start justify-start px-4 md:w-3/4">
      <h1 className="  mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h1>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed
        elit a urna mollis varius nec at ligula. Vivamus rhoncus odio ut
        ultrices efficitur. Suspendisse potenti. liquam erat volutpat. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Maecenas eget elit
        at lacus. Vestibulum sed elit a urna mollis varius nec at ligula.
        Vivamus rhoncus odio ut ultrices efficitur. Suspendisse potenti. liquam
        erat volutpat. Donec congue aliquam elit, non fringilla enim biben dum
        sit amet. Morbi veliti efficitur. Nullam suscipit sem eu augue
        consequat, et congue eros.
      </Text>
    </section>
  );
}

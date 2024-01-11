import Image from "next/image";
import React from "react";
import banner from "@/assets/images/banner-home.jpg";

type Props = {};

export default function Ministry({}: Props) {
  return (
    <div className="mb-10">
      <Image
        src={banner}
        alt="hshsh"
        className="h-72 rounded-md object-cover pb-4"
      />
      <h1 className="text-2xl font-semibold tracking-wider text-secondary ">
        Royal brides
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed
        elit a urna mollis varius nec at ligula. Vivamus rhoncus odio ut
        ultrices efficitur. Suspendisse potenti. liquam erat volutpat. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Maecenas eget elit
        at lacus. Vestibulum sed elit a urna mollis varius nec at ligula.
        Vivamus rhoncus odio ut ultrices efficitur. Suspendisse potenti. liquam
        erat volutpat. Donec congue aliquam elit, non fringilla enim biben dum
        sit amet. Morbi veliti efficitur. Nullam suscipit sem eu augue
        consequat, et congue eros.
      </p>
    </div>
  );
}

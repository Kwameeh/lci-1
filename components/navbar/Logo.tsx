import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logolg1.png";

type Props = {};

export default function Logo(props: Props) {
  return (
    <div>
      <Image
        className="object-contain"
        alt="logo"
        src={logo}
        height={100}
        width={300}
      />
      <h1 className="font-medium uppercase tracking-widest">
        {/* Life{" "}
        <span className="font-extrabold  text-green-600 underline">IC</span> */}
      </h1>
    </div>
  );
}

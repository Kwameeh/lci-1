import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import banner from "@/assets/images/banner-home.jpg";

type Props = {};

export default function Section(props: Props) {
  const heading = "Sharing the God’s love with everyone";
  return (
    <div className="mx-auto   flex max-w-4xl flex-col justify-start px-5 pt-6 ">
      <Heading
        top
        title={heading}
        subtitle="WELCOME TO LIFE INTERNATIONAL CHURCH"
      />
      <p className="font text font-medium  text-gray-600 md:text-lg">
        Our mission is helping people find their way back to God. We accomplish
        this by reaching people far from God, restoring God’s dream for the
        world, and reproducing this mission in others. There are three key
        relationships that help you develop a growing relationship with Jesus.
      </p>

      {/* <Image
        className="w-full "
        src={banner}
        alt="banner"
        width={400}
        height={300}
      /> */}
    </div>
  );
}

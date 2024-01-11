import HeroImage from "@/components/HeroImage";
import LocationCom from "@/components/LocationCom";
import Separator from "@/components/Separator";
import { Location, SliderItems } from "@/typing";
import { fetchLocations } from "@/utils/fetchLocations";
import { GetStaticProps } from "next";
import React from "react";

type Props = {
  location: Location[];
};

export default function index({ location }: Props) {
  return (
    <div>
      <HeroImage title="Our Locations" />
      <Separator />
      <LocationCom locations={location} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const location: Location[] = await fetchLocations();

  return {
    props: {
      location,
    },
    revalidate: 10,
  };
};

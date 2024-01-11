import HeroImage from "@/components/HeroImage";
import ImageRight from "@/components/ImageRight";
import Separator from "@/components/Separator";
import Itenary from "@/components/calender/Itenary";
import Section from "@/components/sections/Section";
import { urlFor } from "@/sanity";
import { Event, OfficeProfile } from "@/typing";
import { fetchEvents } from "@/utils/fecthEvents";
import { fetchOfficeProfile } from "@/utils/fecthOfficeProfile";

import moment from "moment";
import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  officeProfile: OfficeProfile[];
  events: Event[];
};

export default function index({ officeProfile, events }: Props) {
  console.log(events);
  const event = events.map((ev) => {
    return {
      start: moment(ev.startDate).toDate(),
      end: moment(ev.endDate).toDate(),
      title: ev.title,
    };
  });
  return (
    <div className="gap 4 flex flex-col">
      <HeroImage title="Office of the Bishops" />
      <Separator />
      <div className="mx-auto flex flex-wrap justify-center gap-12 px-4">
        <Image
          className=" w-full rounded-md object-cover md:w-4/12 "
          src={urlFor(officeProfile[0].profileImage).url()}
          alt="banner"
          width={400}
          height={300}
        />

        <div className="flex flex-col items-start justify-center md:w-1/2">
          <h1 className="font-light uppercase text-primary   ">Lady pastor</h1>
          <h1 className="pb-4 text-2xl font-bold text-secondary md:text-4xl">
            {officeProfile[0].title}
          </h1>
          <p className=" font-medium  text-gray-600 md:text-lg">
            {officeProfile[0].description}
          </p>
        </div>
      </div>
      <Separator />

      <div className="mx-auto flex flex-wrap justify-center gap-12 px-4">
        <Image
          className=" w-full rounded-md object-cover md:w-4/12 "
          src={urlFor(officeProfile[1].profileImage).url()}
          alt="banner"
          width={400}
          height={300}
        />

        <div className="flex flex-col items-start justify-center md:w-1/2">
          <h1 className="font-light uppercase text-primary   ">Lady pastor</h1>
          <h1 className="pb-4 text-2xl font-bold text-secondary md:text-4xl">
            {officeProfile[1].title}
          </h1>
          <p className=" font-medium  text-gray-600 md:text-lg">
            {officeProfile[1].description}
          </p>
        </div>
      </div>
      <Separator />
      <Itenary events={event} />

      {/* <Section />
      <Separator />
      <ImageRight /> */}
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const officeProfile: OfficeProfile[] = await fetchOfficeProfile();
  const events: Event[] = await fetchEvents();
  return {
    props: {
      officeProfile,
      events,
    },
    revalidate: 10,
  };
};

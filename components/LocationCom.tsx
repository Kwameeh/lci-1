import { Location } from "@/typing";
import React from "react";

type Props = {
  locations: Location[];
};

export default function LocationCom({ locations }: Props) {
  console.log(locations);
  return (
    <>
      {/* <h1>hello</h1>
      {locations.map((loc) => (
        <h1 key={loc._id}>{loc.title}</h1>
      ))} */}
      {locations.map((location) => (
        <div
          key={location._id}
          className="mx-auto flex flex-col flex-wrap items-center justify-center gap-4 px-4 text-center"
        >
          <h1 className="pb-1 text-2xl font-bold text-secondary md:text-4xl">
            {location.title}
          </h1>
          <div className="text-base">
            <h2 className="font-medium uppercase text-primary">Pastors</h2>
            <div className="flex  w-full flex-wrap gap-2 md:w-3/5 "></div>
            {location.pastors.map((pastor) => (
              <p key={pastor}>{pastor}</p>
            ))}
          </div>
          <div>
            <h1 className="font-medium text-primary">contacts</h1>
            {location.contacts.map((contact) => (
              <p key={contact}>{contact}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

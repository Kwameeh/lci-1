import React from "react";

type Props = {
  title: string;
  subtitle: string;
  top?: boolean;
  down?: boolean;
};

export default function Heading({ title, subtitle, top, down }: Props) {
  return (
    <div className="flex flex-col">
      {top && (
        <p className="font-light uppercase text-primary   ">{subtitle}</p>
      )}
      <h1 className="pb-4 text-2xl font-bold text-secondary md:text-4xl">
        {" "}
        {title}
      </h1>
      {down && <p className="pb-4 uppercase text-primary ">{subtitle}</p>}
    </div>
  );
}

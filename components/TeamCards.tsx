import React from "react";
import TeamCard from "./TeamCard";

type Props = {};

export default function TeamCards(props: Props) {
  return (
    <section className="mx-auto  mb-32 justify-center text-center">
      <h2 className="mx-auto mb-12 items-center justify-center text-3xl font-bold">
        Meet the <u className=" text-primary">team</u>
      </h2>
      <div className="m-4items-center mx-auto flex flex-wrap justify-center gap-8 ">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </section>
  );
}

import React from "react";
import Ministry from "./Ministry";

type Props = {};

export default function Ministries({}: Props) {
  return (
    <div className="mx-auto w-full gap-4 px-4 md:w-3/4">
      <Ministry />
      <Ministry />
      <Ministry />
    </div>
  );
}

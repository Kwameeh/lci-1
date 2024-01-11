import React from "react";

type Props = {};

export default function Footer(props: Props) {
  return (
    <footer className=" mx-auto items-center justify-center pb-4 pt-8 text-center">
      <h1 className="text-center font-semibold capitalize">
        <span className="text-primary">@2024</span> Life internation church
      </h1>
      <p className="text-secondary">all right reserved</p>
    </footer>
  );
}

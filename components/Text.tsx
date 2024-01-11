import React, { Children, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Text({ children }: Props) {
  return <p className="  text-base font-normal">{children}</p>;
}

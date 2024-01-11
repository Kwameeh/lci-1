import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { MouseEventHandler, useEffect } from "react";

type Props = {
  item: {
    title: string;
    path: string;
  };
  open?: MouseEventHandler;
};

export default function Navlink({ item, open }: Props) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      onClick={open}
      className={` flex p-1 text-center   font-medium capitalize transition-all ${
        pathName === item.path && " rounded-lg bg-secondary  text-white"
      } `}
      href={item.path}
    >
      {item.title}
    </Link>
  );
}

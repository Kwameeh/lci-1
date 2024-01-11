import React from "react";
import banner from "@/assets/images/banner-home.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function FeaturedPost({}: Props) {
  return (
    <div className="mx-auto w-full md:w-4/12">
      <Image
        className="w-full  "
        src={banner}
        alt="banner"
        width={400}
        height={300}
      />
      <p className="pt-4 text-sm text-primary">
        life international church ,<span>january 23, 2024</span>
      </p>
      <h2 className="text-2xl font-bold text-secondary">
        The Struggle with Fellowship in Student Ministry
      </h2>
      <div>
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-lg  py-3 text-center text-base font-medium text-primary  "
        >
          Read more
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

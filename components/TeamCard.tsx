import Image from "next/image";
import React from "react";
import banner from "@/assets/images/banner-home.jpg";

type Props = {};

export default function TeamCard({}: Props) {
  return (
    <div className="mb-6 w-64 lg:mb-0">
      <div className="block rounded-lg bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <Image src={banner} className="w-full rounded-t-lg" alt="aiaiai" />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"></div>
          </a>
          <svg
            className="absolute bottom-0 left-0 text-white dark:text-neutral-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="p-6">
          <h5 className="mb-4 text-lg font-bold">Maria Smith</h5>
          <p className="mb-4 text-neutral-500 dark:text-neutral-300">
            Frontend Developer
          </p>
        </div>
      </div>
    </div>
  );
}

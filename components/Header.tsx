import Image from 'next/image';
import logo from '../assets/images/logo.png';
import logoText from '../assets/images/logo-text.png';
import logoLg from '../assets/images/logolg.png';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Header(props: Props) {
  return (
    <header className="bg-slate-300">
      <div className="flex justify-between items-center max-w-12xl mx-auto px-12 ">
        <div className=" flex justify-center items-center">
          <Link href="/" className="flex">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="p-2 rounded-t-lg"
            />
            <Image
              src={logoText}
              width={250}
              height={250}
              alt="logo"
              className="object-contain  "
            />
          </Link>

          {/* <Image
            src={logoLg}
            width={300}
            height={300}
            alt="logo"
            className="object-contain  "
          /> */}
        </div>

        <div className="font-normal text-md capitalize hidden md:inline-flex ">
          <ul className="flex gap-4 font-semibold">
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/officeOfTheBishop">Office Of The Bishop</Link>
            </li>
            <li>
              <Link href="/getInvoled">Get Involved</Link>
            </li>
            <li>
              <Link href="/location">Our Location</Link>
            </li>
            <li>
              <Link href="/media">Media</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

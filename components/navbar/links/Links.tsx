import Link from 'next/link';
import React, { useState } from 'react';
import Navlink from './navLink/Navlink';

type Props = {};
const links = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/about-us',
  },
  {
    title: 'Office Of The Bishop',
    path: '/officeOfTheBishop',
  },
  {
    title: 'Get Involved',
    path: '/getInvoled',
  },
  {
    title: 'Our Location',
    path: '/location',
  },
  {
    title: 'Media',
    path: '/media',
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
  },
];

export default function Links(props: Props) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <div className=" gap-4 hidden md:inline-flex ">
        {links.map((link) => (
          <Navlink item={link} key={link.title} />
        ))}
      </div>
      <button className="md:hidden" onClick={handleOpen}>
        menu
      </button>
      {open && (
        <div className="absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] bg-white flex flex-col items-start justify-start gap-4 overflow-hidden transition-all md:hidden">
          {links.map((link) => (
            <Navlink open={handleOpen} item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}

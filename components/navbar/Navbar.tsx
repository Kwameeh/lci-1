import React from 'react';

import Links from './links/Links';

import Logo from './Logo';

type Props = {};

export default function Navbar(props: Props) {
  return (
    <header className="flex justify-between items-center h-[100px] px-3 bg-white">
      <div>
        <Logo />
      </div>

      <div>
        <Links />
      </div>
    </header>
  );
}

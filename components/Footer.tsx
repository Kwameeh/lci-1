import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Footer(props: Props) {
  return (
    <footer className="flex justify-center items-center mx-auto  bg-slate-100 w-full">
      <div className="text-center">
        <h1>@2024 life International church</h1>
        <h2 className="text-slate-400">All right reserved</h2>
      </div>
    </footer>
  );
}

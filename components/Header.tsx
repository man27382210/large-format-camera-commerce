'use client';

import Link from 'next/link';
import { useState } from 'react';

const nav = [
  { label: 'History', href: '/en/akademie/130-history' },
  { label: 'Organization', href: '/en/akademie/100-organization' },
  { label: 'Rundgang', href: '/en/akademie/67-rundgang' },
  { label: '250 Years', href: '/en/akademie/4764-250-jahre-kunstakademie' },
  { label: 'Fine Arts', href: '/en/studium/179-fine-arts' },
  { label: 'Art Education', href: '/en/studium/182-art-education' },
  { label: 'Architecture', href: '/en/studium/183-architecture' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-wide flex items-center justify-between py-3">
        <Link href="/" className="font-semibold tracking-tight text-lg md:text-xl">
          Kunstakademie Düsseldorf
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((n) => (
            <Link key={n.href} className="nav-link" href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden border rounded-lg px-3 py-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container-wide py-2 grid gap-2">
            {nav.map((n) => (
              <Link key={n.href} className="nav-link py-2" href={n.href}>
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}


'use client'

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

const links = [
  { name: 'Conócenos', href: '/conocenos' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Administración', href: '/administracion' },
  { name: 'Estrategias', href: '/estrategias' },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 bg-white z-20 border-b border-gray-100">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6 h-16">

        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logos/logo_azul.png"
            height={34}
            width={104}
            alt="Cassad"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.href}
              name={link.name}
              href={link.href}
              path={pathname}
            />
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="md:hidden p-2 text-gray-500 hover:text-cassad-blue transition-colors"
          aria-label="Abrir menú"
        >
          {isMenuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <ul className="px-6 py-2">
            {links.map((link) => (
              <NavLink
                key={link.href}
                name={link.name}
                href={link.href}
                path={pathname}
                mobile
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

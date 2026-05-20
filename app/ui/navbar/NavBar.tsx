'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="md:hidden p-2 text-gray-500 hover:text-cassad-blue transition-colors"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-40 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Menú de navegación"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100 flex-shrink-0">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/logos/logo_azul.png"
              height={30}
              width={92}
              alt="Cassad"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="p-2 text-gray-400 hover:text-cassad-blue transition-colors"
            aria-label="Cerrar menú"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="flex flex-col gap-1">
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
        </nav>

        {/* Drawer footer */}
        <div className="px-6 py-6 border-t border-gray-100 flex-shrink-0">
          <Link
            href="/#contacto"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-cassad-blue text-white text-sm font-medium py-2.5 rounded-lg hover:bg-cassad-blue/90 transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </aside>
    </>
  );
}

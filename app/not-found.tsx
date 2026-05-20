'use client'

import NavBar from "./ui/navbar/NavBar";
import Footer from "./ui/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />

      <div className="flex flex-1 items-center justify-center bg-white py-32">
        <div className="max-w-xl px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cassad-blue mb-6">
            Error 404
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-100 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Página no encontrada
          </h2>
          <p className="text-gray-400 mb-10">
            La página que buscas no existe o fue eliminada.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-cassad-blue text-white font-semibold text-[11px] tracking-[0.2em] uppercase hover:bg-[#0a3558] transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}

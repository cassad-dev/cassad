'use client'

import Image from "next/image";
import Link from "next/link";
import NavBar from "./ui/navbar/NavBar";
import Footer from "./ui/Footer";
import ContactForm from "./ui/ContactForm";

const services = [
  {
    number: '01',
    title: 'Administración de Propiedades',
    description: 'Gestión integral: cobro de rentas, resguardo de documentos, asesoría legal y coordinación de mantenimiento.',
  },
  {
    number: '02',
    title: 'Representación de Propietarios',
    description: 'Defensa de sus intereses en negociaciones y contratos, garantizando condiciones favorables y resolución de conflictos.',
  },
  {
    number: '03',
    title: 'Soluciones Inmobiliarias',
    description: 'Estrategias personalizadas para optimizar el valor y el rendimiento de sus activos inmobiliarios.',
  },
  {
    number: '04',
    title: 'Renegociación de Contratos',
    description: 'Análisis y modificación de términos contractuales para obtener las mejores condiciones posibles.',
  },
  {
    number: '05',
    title: 'Protección de Escrituras',
    description: 'Alertas inmobiliarias y estrategias para proteger la titularidad y seguridad documental de su patrimonio.',
  },
  {
    number: '06',
    title: 'Investigación de Propiedades',
    description: 'Análisis exhaustivo de títulos, verificación legal y evaluación de riesgos antes de cualquier transacción.',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

      <NavBar />

      {/* HERO */}
      <section
        className="relative flex items-center"
        style={{
          height: 'calc(100vh - 64px)',
          background: `linear-gradient(rgba(12,64,104,0.88), rgba(12,64,104,0.93)), url('/home2.jpg') center / cover no-repeat`,
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 w-full">
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/50 mb-10">
            Monterrey, México&nbsp;&nbsp;·&nbsp;&nbsp;Proptech &amp; Consultoría Legal
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-white leading-[1.08] tracking-tight mb-8 max-w-4xl">
            Protección, diagnóstico y estrategia para tu patrimonio inmobiliario
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mb-12 leading-relaxed font-light">
            Más de una década acompañando a propietarios con soluciones legales, análisis estratégico y gestión integral de activos inmobiliarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cassad-blue font-semibold text-[11px] tracking-[0.2em] uppercase hover:bg-gray-50 transition-colors duration-200"
            >
              Nuestros Servicios
            </Link>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-semibold text-[11px] tracking-[0.2em] uppercase hover:border-white/70 hover:bg-white/5 transition-all duration-200"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cassad-blue mb-8">
                Quiénes Somos
              </p>
              <Image
                src="/logos/logo_azul.png"
                alt="Cassad"
                width={180}
                height={60}
                className="mb-10"
              />
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Cassad ofrece soluciones integrales en servicios inmobiliarios y legales con más de 10 años de experiencia. Destacamos en gestión de propiedades, negociación de contratos y protección de activos.
              </p>
              <p className="text-gray-400 leading-relaxed mb-12">
                Nos diferenciamos por la atención personalizada, el análisis multidisciplinario y un enfoque orientado a la protección real de su patrimonio.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-2 border-cassad-blue pl-6">
                  <p className="text-4xl font-bold text-cassad-blue">+10</p>
                  <p className="text-sm text-gray-400 mt-1 tracking-wide">Años de experiencia</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-6">
                  <p className="text-4xl font-bold text-gray-900">6</p>
                  <p className="text-sm text-gray-400 mt-1 tracking-wide">Servicios especializados</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/home.jpg"
                alt="Asesoría profesional en soluciones legales e inmobiliarias"
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-28 h-28 pointer-events-none"
                style={{ backgroundColor: 'rgba(12,64,104,0.1)' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="max-w-screen-xl mx-auto px-6">

          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 mb-16">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cassad-blue mb-4">
                Lo que ofrecemos
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Servicios especializados para su patrimonio
              </h2>
            </div>
            <div className="lg:pt-10">
              <p className="text-gray-500 leading-relaxed">
                Cada servicio está diseñado para brindar certeza jurídica, protección patrimonial y acompañamiento estratégico a propietarios e inversionistas.
              </p>
            </div>
          </div>

          {/* Cards grid — gap-px with bg-gray-200 creates thin divider lines */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {services.map((service) => (
              <div
                key={service.number}
                className="group bg-white p-10 hover:bg-cassad-blue transition-colors duration-300 cursor-default"
              >
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cassad-blue group-hover:text-white/40 mb-6">
                  {service.number}
                </p>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-white mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cassad-blue tracking-[0.08em] uppercase hover:gap-4 transition-all duration-200"
            >
              Ver todos los servicios
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="bg-cassad-blue py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-8">
              Acompañamiento estratégico
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Cada propiedad tiene una historia. Nosotros la protegemos.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl">
              Diagnóstico multidisciplinario, protección de activos y acompañamiento estratégico para personas y empresas en Monterrey y su área metropolitana.
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cassad-blue font-semibold text-[11px] tracking-[0.2em] uppercase hover:bg-gray-50 transition-colors duration-200"
            >
              Iniciar Diagnóstico
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <div id="contacto">
        <ContactForm />
      </div>

      {/* CLIENT LOGOS */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gray-400 text-center mb-10">
            Algunos de nuestros clientes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-16">
            <img
              src="/logos/believebytere-logo.png"
              alt="Believe By Tere"
              className="h-12 object-contain opacity-50 hover:opacity-80 transition-opacity"
            />
            <img
              src="/logos/fanatiker-logo.png"
              alt="Fanatiker"
              className="h-12 object-contain opacity-50 hover:opacity-80 transition-opacity"
            />
            <img
              src="/logos/grupolomex-logo.png"
              alt="Grupo Lomex"
              className="h-12 object-contain opacity-50 hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}

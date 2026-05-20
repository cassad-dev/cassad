'use client'

import NavBar from "../ui/navbar/NavBar";
import Footer from "../ui/Footer";

const cards = [
  {
    number: '01',
    title: 'Asesoría Legal e Inmobiliaria',
    items: [
      'Asesoramiento experto en cuestiones legales y fiscales relacionadas con la propiedad.',
      'Resolución de conflictos con inquilinos y otros terceros.',
      'Asistencia en la redacción y negociación de contratos.',
    ],
  },
  {
    number: '02',
    title: 'Estrategia de Rentabilidad',
    items: [
      'Gestión puntual y eficiente del cobro de rentas.',
      'Seguimiento de pagos y recordatorios a inquilinos.',
      'Reportes detallados de ingresos y gastos.',
      'Análisis de factibilidad de uso de suelo.',
      'Revisión detallada de características conforme a la ley.',
    ],
  },
  {
    number: '03',
    title: 'Prospectación y Plusvalía',
    items: [
      'Análisis de la situación e ubicación de cada propiedad.',
      'Estrategias de rentabilidad para obtener una mejor plusvalía.',
      'Desarrollo y búsqueda de aportación a diferentes desarrolladoras.',
    ],
  },
];

const benefits = [
  {
    title: 'Tranquilidad y Seguridad',
    description: 'Confíe en nosotros para manejar todos los aspectos de la gestión de su propiedad, desde la administración de rentas hasta la resolución de problemas legales.',
  },
  {
    title: 'Profesionalismo y Eficiencia',
    description: 'Garantizamos un servicio profesional y eficiente en todo momento, asegurando que sus intereses estén siempre protegidos.',
  },
  {
    title: 'Comunicación Transparente',
    description: 'Mantenemos una comunicación abierta y transparente con nuestros clientes, proporcionando actualizaciones regulares sobre el estado y rendimiento de sus propiedades.',
  },
];

export default function Administracion() {
  return (
    <main className="flex min-h-screen flex-col">

      <NavBar />

      {/* PAGE HERO */}
      <section className="bg-cassad-blue py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-6">
            Cassad
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Administración en el ámbito legal e inmobiliario
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-2xl">
            Gestión integral de su patrimonio inmobiliario con protección jurídica, estrategia de rentabilidad y acompañamiento constante.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cassad-blue mb-6">
                Nuestro Enfoque
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Gestión integral para maximizar su inversión
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                En Cassad, comprendemos la importancia de una gestión eficiente y efectiva de propiedades para proteger y maximizar su inversión. Nuestro servicio de administración ofrece soluciones integrales diseñadas para brindarle tranquilidad y seguridad en la gestión de su patrimonio inmobiliario.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                className="w-full object-cover rounded-sm"
                src="/img/admin.jpg"
                alt="Administración inmobiliaria profesional"
                style={{ aspectRatio: '4/3' }}
              />
              <img
                className="w-full object-cover rounded-sm mt-8"
                src="/img/files.jpg"
                alt="Gestión documental de propiedades"
                style={{ aspectRatio: '4/3' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="max-w-screen-xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cassad-blue mb-4">
              Lo que incluye
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-md leading-tight">
              Áreas de administración
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {cards.map((card) => (
              <div key={card.number} className="bg-white p-10">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cassad-blue mb-6">
                  {card.number}
                </p>
                <h3 className="text-base font-bold text-gray-900 mb-6 leading-snug">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1 h-1 bg-cassad-blue flex-shrink-0" />
                      <span className="text-sm text-gray-500 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cassad-blue mb-4">
              Por qué elegirnos
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-md leading-tight">
              Beneficios de nuestro servicio
            </h2>
          </div>

          <div className="divide-y divide-gray-100">
            {benefits.map((benefit, index) => (
              <div key={index} className="py-10 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />

    </main>
  );
}

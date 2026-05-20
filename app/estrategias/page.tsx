'use client'

import NavBar from "@/app/ui/navbar/NavBar";
import Footer from "@/app/ui/Footer";

const strategies = [
  {
    eyebrow: 'Maximiza el Valor',
    title: 'Desarrollo y Evaluación de Propiedades',
    description: 'Evaluación exhaustiva de las propiedades para identificar oportunidades y riesgos. Desarrollo de proyectos y planes de acción personalizados para maximizar el valor y el rendimiento de cada activo.',
    image: '/img/E_casas_modelo.jpg',
    imageAlt: 'Modelos de viviendas para evaluación de desarrollo inmobiliario',
  },
  {
    eyebrow: 'Estrategias Fiscales',
    title: 'Soluciones Inmobiliarias sin Litigio',
    description: 'Resolución de problemas inmobiliarios complejos sin recurrir a litigios costosos y prolongados. Implementación de estrategias fiscales y económicas para optimizar los beneficios de los inmuebles.',
    image: '/img/E_analisis.jpg',
    imageAlt: 'Análisis de datos para estrategias fiscales inmobiliarias',
  },
  {
    eyebrow: 'Inversiones Seguras',
    title: 'Análisis Detallado de Propiedades',
    description: 'Investigación detallada de propiedades para identificar posibles problemas legales o fiscales. Alertas inmobiliarias y recomendaciones para garantizar una inversión segura y rentable.',
    image: '/img/E_llave_puerta.jpg',
    imageAlt: 'Llave de propiedad para inversión inmobiliaria segura',
  },
  {
    eyebrow: 'Control Eficiente',
    title: 'Proyectos Legales de Administración',
    description: 'Diseño y desarrollo de proyectos legales para una gestión eficiente y efectiva de la información y los casos. Implementación de sistemas de medición de procesos para garantizar seguimiento y control adecuados.',
    image: '/img/E_planta.jpg',
    imageAlt: 'Plano de planta para planeación legal de administración',
  },
];

const principles = [
  {
    title: 'Integridad',
    description: 'Nos comprometemos a actuar con honestidad y responsabilidad en todas nuestras interacciones y transacciones.',
  },
  {
    title: 'Respeto y Empatía',
    description: 'Fomentamos un ambiente que promueva la confianza, el respeto y la cooperación entre nuestro equipo y nuestros clientes.',
  },
  {
    title: 'Sinceridad en Resultados',
    description: 'Estamos comprometidos con la creación de valor y la mejora continua de nuestros servicios, con responsabilidad personal por el éxito de cada cliente.',
  },
  {
    title: 'Servicio Empresarial',
    description: 'Nos destacamos por nuestra disponibilidad, actitud proactiva y enfoque orientado al cliente en todas nuestras actividades.',
  },
];

export default function Estrategias() {
  return (
    <main className="flex min-h-screen flex-col">

      <NavBar />

      {/* PAGE HERO */}
      <section className="bg-cassad-blue py-14 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-4">
            Cassad
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            Estrategias
          </h1>
          <p className="mt-4 lg:mt-6 text-sm lg:text-lg text-white/60 leading-relaxed max-w-2xl">
            En Cassad, desarrollamos estrategias innovadoras y personalizadas para ayudar a nuestros clientes a alcanzar sus objetivos inmobiliarios y legales con resultados exitosos y beneficios a largo plazo.
          </p>
        </div>
      </section>

      {/* STRATEGIES GRID */}
      <section className="bg-white py-12 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6">

          <div className="mb-8 lg:mb-16">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cassad-blue mb-3">
              Nuestro Enfoque
            </p>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 max-w-lg leading-tight">
              Estrategias para cada etapa de su patrimonio
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {strategies.map((strategy, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden mb-5 lg:mb-8">
                  <img
                    src={strategy.image}
                    alt={strategy.imageAlt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ aspectRatio: '16/9' }}
                    loading="lazy"
                  />
                </div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cassad-blue mb-2 lg:mb-3">
                  {strategy.eyebrow}
                </p>
                <h3 className="text-base lg:text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {strategy.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-12 lg:py-32" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="max-w-screen-xl mx-auto px-6">

          <div className="mb-8 lg:mb-16">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cassad-blue mb-3">
              Cómo trabajamos
            </p>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 max-w-md leading-tight">
              Principios de actuación
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-200">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-6 lg:p-10">
                <h3 className="text-sm font-bold text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {principle.description}
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

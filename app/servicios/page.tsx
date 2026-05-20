'use client'

import NavBar from "../ui/navbar/NavBar";
import Footer from "../ui/Footer";

const services = [
  {
    id: 'administracionPropiedades',
    number: '01',
    title: 'Administración de Propiedades',
    description: 'Nuestro servicio de administración de propiedades ofrece una gestión integral y eficiente para propietarios. Nos encargamos de asegurar el cumplimiento de todas las obligaciones legales y fiscales, renegociar las cláusulas de los contratos y las nuevas condiciones del mercado, así como gestionar el cobro de rentas, el mantenimiento y la resolución de conflictos con los inquilinos.',
    image: '/img/propiedades.jpg',
    imageAlt: 'Gestión integral de propiedades',
  },
  {
    id: 'representacionPropiedades',
    number: '02',
    title: 'Representación de Propietarios',
    description: 'Representamos los intereses de los propietarios en negociaciones y contratos, asegurando condiciones favorables y protegiendo sus derechos. Garantizamos que cada acuerdo beneficie a nuestros clientes y resuelva eficazmente cualquier disputa o conflicto que pueda surgir.',
    image: '/img/representacion.jpg',
    imageAlt: 'Representación legal y negociación inmobiliaria para propietarios',
  },
  {
    id: 'solucionesInmobiliarias',
    number: '03',
    title: 'Soluciones Inmobiliarias',
    description: 'Ofrecemos soluciones innovadoras y personalizadas para optimizar el valor y el rendimiento de sus activos inmobiliarios. Desde la identificación de oportunidades de inversión hasta la implementación de estrategias de desarrollo y comercialización, nuestro enfoque integral garantiza resultados exitosos y beneficios a largo plazo.',
    image: '/img/soluciones.jpg',
    imageAlt: 'Soluciones estratégicas para optimizar activos inmobiliarios',
  },
  {
    id: 'renegociacionContratos',
    number: '04',
    title: 'Renegociación de Contratos',
    description: 'Nos encargamos de sugerir, proponer y modificar los términos y condiciones existentes para negociar nuevos contratos, ofreciendo asesoramiento experto y estrategias efectivas para garantizar acuerdos justos y favorables para todas las partes.',
    image: '/img/negociacion.jpg',
    imageAlt: 'Renegociación de contratos inmobiliarios con acompañamiento experto',
  },
  {
    id: 'proteccionEscrituras',
    number: '05',
    title: 'Protección de Escrituras',
    description: 'Nos encargamos de promover y solicitar alertas inmobiliarias para detectar a tiempo posibles fraudes y suplantaciones de identidad, protegiendo el patrimonio de las empresas y las personas. Cotizamos y planeamos estrategias integrales de protección al patrimonio.',
    image: '/img/escrituras.jpg',
    imageAlt: 'Protección de escrituras para seguridad patrimonial',
  },
  {
    id: 'investigacionPropiedades',
    number: '06',
    title: 'Investigación de Propiedades',
    description: 'Realizamos análisis exhaustivos de títulos de propiedades para proporcionar información necesaria y detallada sobre el estado y el potencial de cada activo. Desde la verificación de títulos de propiedad hasta la evaluación de riesgos y oportunidades de inversión, nuestras investigaciones ayudan a tomar decisiones informadas.',
    image: '/img/search.jpg',
    imageAlt: 'Investigación de propiedades para decisiones de inversión',
  },
];

export default function Servicios() {
  return (
    <main className="flex min-h-screen flex-col">

      <NavBar />

      {/* PAGE HERO */}
      <section className="bg-cassad-blue py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-6">
            Cassad
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            Nuestros Servicios
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-2xl">
            Soluciones especializadas y estratégicas para gestionar, proteger y optimizar su patrimonio inmobiliario con confianza y seguridad.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <div className="bg-white">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-24 lg:py-32 border-b border-gray-100 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="max-w-screen-xl mx-auto px-6">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:[&>div:first-child]:order-2' : ''}`}>

                  {/* Text */}
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cassad-blue mb-6">
                      {service.number}
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full object-cover"
                      style={{ aspectRatio: '4/3' }}
                      loading="lazy"
                    />
                    <div
                      className={`absolute ${isEven ? '-bottom-4 -right-4' : '-bottom-4 -left-4'} w-20 h-20 pointer-events-none`}
                      style={{ backgroundColor: 'rgba(12,64,104,0.08)' }}
                    />
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      <Footer />

    </main>
  );
}

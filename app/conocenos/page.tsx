'use client'

import NavBar from "../ui/navbar/NavBar";
import Footer from "../ui/Footer";

const values = [
  {
    number: '01',
    title: 'Confianza con el Cliente',
    description: 'Nos esforzamos por construir relaciones de confianza sólidas y duraderas con nuestros clientes, basadas en la transparencia, la integridad y el compromiso mutuo.',
  },
  {
    number: '02',
    title: 'Relaciones Interpersonales',
    description: 'Reconocemos la importancia de poner a la persona como centro. Nos comprometemos a comprender las necesidades individuales de cada cliente y a proporcionar un servicio verdaderamente personalizado.',
  },
  {
    number: '03',
    title: 'Experiencia en Administración',
    description: 'Contamos con el conocimiento legal y los mecanismos necesarios para llevar una administración eficaz y eficiente de cada activo patrimonial.',
  },
  {
    number: '04',
    title: 'Conocimiento del Ámbito Legal',
    description: 'Nos encontramos en constante actualización de regulaciones locales y nacionales para ofrecer el mejor servicio y estrategia posible en todo momento.',
  },
  {
    number: '05',
    title: 'Conexión con Autoridades',
    description: 'Mantenemos relaciones sólidas y colaborativas con las autoridades pertinentes, facilitando un proceso eficiente y sin contratiempos en todas nuestras operaciones.',
  },
];

export default function Conocenos() {
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
            Sobre Nosotros
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-2xl">
            Descubra quiénes somos y los valores fundamentales que guían cada decisión y relación en Cassad.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cassad-blue mb-6">
                Quiénes Somos
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Una firma multidisciplinaria de consultoría patrimonial
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Nos dedicamos a diagnosticar situaciones y problemáticas inmobiliarias y legales para satisfacer las necesidades de nuestros clientes. Con una experiencia sólida de más de una década en el sector, nos esforzamos por brindar un servicio personalizado que se adapte a las necesidades individuales de cada cliente.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Proporcionamos una amplia gama de servicios especializados en el ámbito inmobiliario y legal. Desde la gestión de propiedades hasta la representación legal, nuestro objetivo es ofrecer mayor rentabilidad y protección que supere las expectativas de nuestros clientes.
              </p>
            </div>

            <div className="relative">
              <img
                className="w-full object-cover"
                src="/img/bodegas.jpg"
                alt="Instalaciones industriales para gestión inmobiliaria"
                style={{ aspectRatio: '4/3' }}
              />
              <div
                className="absolute -bottom-6 -right-6 w-28 h-28 pointer-events-none"
                style={{ backgroundColor: 'rgba(12,64,104,0.1)' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* BLUE STATEMENT */}
      <section className="bg-cassad-blue py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="border-l-2 border-white/20 pl-8">
              <p className="text-white font-bold text-lg mb-2">Diagnóstico Multidisciplinario</p>
              <p className="text-white/55 text-sm leading-relaxed">
                Analizamos cada situación desde perspectivas legales, técnicas y estratégicas para encontrar la solución más efectiva.
              </p>
            </div>
            <div className="border-l-2 border-white/20 pl-8">
              <p className="text-white font-bold text-lg mb-2">Protección de Activos</p>
              <p className="text-white/55 text-sm leading-relaxed">
                Salvaguardamos el patrimonio de nuestros clientes a través de alertas, estrategias preventivas y gestión documental rigurosa.
              </p>
            </div>
            <div className="border-l-2 border-white/20 pl-8">
              <p className="text-white font-bold text-lg mb-2">Acompañamiento Estratégico</p>
              <p className="text-white/55 text-sm leading-relaxed">
                Más que un servicio, ofrecemos una relación de largo plazo orientada a maximizar el valor y la seguridad de cada activo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-cassad-blue mb-4">
              Nuestros Valores
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-md leading-tight">
              Los principios que guían nuestro trabajo
            </h2>
          </div>

          <div className="divide-y divide-gray-100">
            {values.map((value) => (
              <div key={value.number} className="py-10 grid md:grid-cols-[120px_1fr_2fr] gap-6 md:gap-12 items-start">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-cassad-blue">
                  {value.number}
                </p>
                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {value.description}
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

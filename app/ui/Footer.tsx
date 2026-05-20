import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-screen-xl mx-auto px-6 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/logos/logo_blanco.png" height={30} width={90} alt="Cassad" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Soluciones legales e inmobiliarias con visión tecnológica. Monterrey, Nuevo León, México.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <Link
                href="https://www.linkedin.com/company/cassad-proptech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:text-white hover:border-gray-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 30 30" fill="currentColor">
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                </svg>
              </Link>
              <a
                href="mailto:mmcassad@gmail.com"
                aria-label="Email"
                className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-500 hover:text-white hover:border-gray-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
              Navegación
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', href: '/' },
                { label: 'Conócenos', href: '/conocenos' },
                { label: 'Servicios', href: '/servicios' },
                { label: 'Administración', href: '/administracion' },
                { label: 'Estrategias', href: '/estrategias' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
              Servicios
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Administración de Propiedades', href: '/servicios#administracionPropiedades' },
                { label: 'Representación de Propietarios', href: '/servicios#representacionPropiedades' },
                { label: 'Soluciones Inmobiliarias', href: '/servicios#solucionesInmobiliarias' },
                { label: 'Renegociación de Contratos', href: '/servicios#renegociacionContratos' },
                { label: 'Protección de Escrituras', href: '/servicios#proteccionEscrituras' },
                { label: 'Investigación de Propiedades', href: '/servicios#investigacionPropiedades' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Cassad. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-sm">
            Monterrey, Nuevo León, México
          </p>
        </div>

      </div>
    </footer>
  );
}

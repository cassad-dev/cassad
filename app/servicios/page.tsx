'use client'
import NavBar from "../ui/navbar/NavBar";
import Footer from "../ui/Footer";

export default function Servicios() {
    return (
        <main className="flex min-h-screen flex-col">

            {/* NAVBAR */}
            <NavBar />

            {/* HERO */}
            <div className="bg-slate-200">
                <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                            Nuestros <span className="text-mainAzul-100">Servicios</span>
                        </h1>
                        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-md sm:text-lg">
                            Descubra nuestras soluciones especializadas y estratégicas para gestionar y proteger su patrimonio inmobiliario con confianza y seguridad.
                        </p>
                    </div>
                    {/* <div className="flex justify-center items-center">
                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</button>
                        <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Live Demo</button>
                    </div> */}
                </div>
            </div>


            {/* SERVICES */}
            <div className="relative overflow-hidden pt-16 pb-32 space-y-24">


                {/* Servicio #1 */}
                <div className="relative" id="administracionPropiedades">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mainAzul-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            className="h-8 w-8 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                        </svg>
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                        Administración de Propiedades:
                                    </h2>
                                    <p className="mt-4 text-lg text-slate-500">
                                        Nuestro servicio de administración de propiedades ofrece una gestión integral y eficiente para propietarios e inversores. Nos encargamos del cobro de rentas, mantenimiento, resolución de conflictos con inquilinos, y aseguramos el cumplimiento de todas las obligaciones legales y fiscales. Con más de una década de experiencia en el sector, garantizamos tranquilidad y seguridad en la gestión de su patrimonio inmobiliario.
                                    </p>
                                    {/* <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-mainAzul-100 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-800 hover:bg-blue-800 hover:ring-blue-900"
                                            href="/login">
                                            Learn More
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img loading="lazy" width="647" height="486"
                                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style={{ color: 'transparent' }} src="/img/propiedades.jpg">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Servicio #2 */}
                <div className="relative" id="representacionPropiedades">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mainAzul-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            className="h-8 w-8 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                        Representación de Propietarios:
                                    </h2>
                                    <p className="mt-4 text-lg text-slate-500">
                                        En Cassad, representamos los intereses de los propietarios en negociaciones y contratos, asegurando condiciones favorables y protegiendo sus derechos. Nuestro equipo legal altamente capacitado se encarga de garantizar que cada acuerdo beneficie a nuestros clientes y resuelva eficazmente cualquier disputa o conflicto que pueda surgir.
                                    </p>
                                    {/* <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-mainAzul-100 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-800 hover:bg-blue-800 hover:ring-blue-900"
                                            href="/login">
                                            Learn More
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style={{ color: 'transparent' }} src="/img/representacion.jpg">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Servicio #3 */}
                <div className="relative" id="solucionesInmobiliarias">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mainAzul-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            className="h-8 w-8 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                        Soluciones Inmobiliarias:
                                    </h2>
                                    <p className="mt-4 text-lg text-slate-500">
                                        Ofrecemos soluciones innovadoras y personalizadas para optimizar el valor y el rendimiento de sus activos inmobiliarios. Desde la identificación de oportunidades de inversión hasta la implementación de estrategias de desarrollo y comercialización, nuestro enfoque integral garantiza resultados exitosos y beneficios a largo plazo para nuestros clientes.
                                    </p>
                                    {/* <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-mainAzul-100 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-800 hover:bg-blue-800 hover:ring-blue-900"
                                            href="/login">
                                            Learn More
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img loading="lazy" width="646" height="485"
                                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style={{ color: 'transparent' }}
                                    src="/img/soluciones.jpg">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Servicio #4 */}
                <div className="relative" id="renegociacionContratos">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mainAzul-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            className="h-8 w-8 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                        Renegociación de Contratos:
                                    </h2>
                                    <p className="mt-4 text-lg text-slate-500">
                                        Nuestro servicio de renegociación de contratos está diseñado para proteger los intereses de nuestros clientes y maximizar sus beneficios. Ya sea para modificar términos y condiciones existentes o para negociar nuevos contratos, nuestro equipo legal ofrece asesoramiento experto y estrategias efectivas para garantizar acuerdos justos y favorables.
                                    </p>
                                    {/* <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-mainAzul-100 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-800 hover:bg-blue-800 hover:ring-blue-900"
                                            href="/login">
                                            Learn More
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style={{ color: 'transparent' }} src="/img/negociacion.jpg">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Servicio #5 */}
                <div className="relative" id="proteccionEscrituras">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mainAzul-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            className="h-8 w-8 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                                        </svg>
                                    </span>
                                </div>

                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                        Protección de Escrituras:
                                    </h2>
                                    <p className="mt-4 text-lg text-slate-500">
                                        En Cassad, entendemos la importancia de proteger su patrimonio inmobiliario. Nuestro servicio de protección de escrituras garantiza la legalidad y seguridad de todos los documentos relacionados con sus propiedades, evitando riesgos legales y asegurando una titularidad clara y transparente.
                                    </p>
                                    {/* <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-mainAzul-100 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-800 hover:bg-blue-800 hover:ring-blue-900"
                                            href="/login">
                                            Learn More
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img loading="lazy" width="647" height="486"
                                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style={{ color: 'transparent' }} src="/img/escrituras.jpg">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Servicio #6 */}
                <div className="relative" id="investigacionPropiedades">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mainAzul-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                            className="h-8 w-8 text-white">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                        Investigación de Propiedades:
                                    </h2>
                                    <p className="mt-4 text-lg text-slate-500">
                                        Realizamos análisis exhaustivos de propiedades para proporcionar a nuestros clientes información precisa y detallada sobre el estado y el potencial de cada activo. Desde la verificación de títulos de propiedad hasta la evaluación de riesgos y oportunidades de inversión, nuestras investigaciones inmobiliarias ayudan a tomar decisiones informadas y estratégicas.
                                    </p>
                                    {/* <div className="mt-6">
                                        <a className="inline-flex rounded-lg bg-mainAzul-100 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-800 hover:bg-blue-800 hover:ring-blue-900"
                                            href="/login">
                                            Learn More
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    style={{ color: 'transparent' }} src="/img/search.jpg">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* FOOTER */}
            <Footer />
        </main>
    );
}
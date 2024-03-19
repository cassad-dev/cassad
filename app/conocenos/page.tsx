'use client'
import NavBar from "../ui/navbar/NavBar";
import Footer from "../ui/Footer";

export default function Conocenos() {
    return (
        <main className="flex min-h-screen flex-col">

            {/* NAVBAR */}
            <NavBar />

            {/* HERO */}
            <div className="bg-gray-100 dark:bg-transparent">
                <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                            Sobre <span className="text-mainAzul-100">Nosotros</span>
                        </h1>
                        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-md sm:text-lg">Descubra quiénes somos y nuestros valores fundamentales en Cassad, donde la confianza, las relaciones interpersonales y la experiencia se combinan para ofrecer soluciones excepcionales. </p>
                    </div>
                    {/* <div className="flex justify-center items-center">
                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</button>
                        <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Live Demo</button>
                    </div> */}
                </div>
            </div>

            {/* CONTENT */}
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                        <defs>
                            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                        </svg>
                        <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-mainAzul-100">Cassad</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Quiénes Somos</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                    En Cassad, nos dedicamos a ofrecer soluciones inmobiliarias y legales de alta calidad para satisfacer las necesidades de nuestros clientes. Con una experiencia sólida de más de una década en el sector, nos esforzamos por brindar un servicio excepcional que se adapte a las necesidades individuales de cada cliente.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt=""></img>
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p>
                                    Proporcionamos una amplia gama de servicios especializados en el ámbito inmobiliario y legal. Desde la gestión de propiedades hasta la representación legal, nuestro objetivo es ofrecer soluciones integrales que superen las expectativas de nuestros clientes y les permitan alcanzar sus objetivos con confianza y tranquilidad.
                                </p>
                                <p>
                                    Nos basamos en los siguientes valores:
                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">

                                    <li className="flex gap-x-3">
                                        <svg className="mt-1 h-5 w-5 flex-none text-mainAzul-100" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                                        </svg>
                                        <span><strong className="font-semibold text-gray-900">Confianza con el Cliente.</strong> Nos esforzamos por construir relaciones de confianza sólidas y duraderas con nuestros clientes, basadas en la transparencia y el compromiso mutuo.</span>
                                    </li>

                                    <li className="flex gap-x-3">
                                        <svg className="mt-1 h-5 w-5 flex-none text-mainAzul-100" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                        </svg>
                                        <span><strong className="font-semibold text-gray-900">Relaciones Interpersonales.</strong> Valoramos las relaciones personales y nos comprometemos a establecer conexiones genuinas con nuestros clientes, comprendiendo sus necesidades individuales y proporcionando un servicio personalizado.</span>
                                    </li>

                                    <li className="flex gap-x-3">
                                        <svg className="mt-1 h-5 w-5 flex-none text-mainAzul-100" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                                            <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                                        </svg>
                                        <span><strong className="font-semibold text-gray-900">Experiencia en Administración.</strong> Con más de una década de experiencia en el sector, contamos con un equipo altamente capacitado y con un profundo conocimiento del mercado, garantizando una gestión eficiente y efectiva de propiedades.</span>
                                    </li>

                                    <li className="flex gap-x-3">
                                        <svg className="mt-1 h-5 w-5 flex-none text-mainAzul-100" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                                            <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                                        </svg>
                                        <span><strong className="font-semibold text-gray-900">Conocimiento del Ámbito Legal.</strong> Nuestro equipo cuenta con un sólido conocimiento del ámbito legal, asegurando un asesoramiento experto y estratégico en todas las cuestiones legales relacionadas con el sector inmobiliario.</span>
                                    </li>

                                    <li className="flex gap-x-3">
                                        <svg className="mt-1 h-5 w-5 flex-none text-mainAzul-100" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                                            <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                                        </svg>
                                        <span><strong className="font-semibold text-gray-900">Conexión con Autoridades.</strong> Mantenemos relaciones sólidas y colaborativas con las autoridades pertinentes, facilitando un proceso eficiente y sin contratiempos en todas nuestras transacciones.</span>
                                    </li>

                                </ul>

                                <p className="mt-8">Nuestras fortalezas se basan en nuestra vasta experiencia en el sector y en nuestro compromiso con la excelencia en todo lo que hacemos. Nos enorgullece ofrecer un servicio personalizado y de alta calidad, respaldado por un equipo altamente capacitado y comprometido con la satisfacción del cliente en todo momento.</p>
                                {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                                <p className="mt-6">Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.</p> */}
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
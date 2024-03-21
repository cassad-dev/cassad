'use client'
import NavBar from "../ui/navbar/NavBar";
import Footer from "../ui/Footer";


export default function Administracion() {

    return (
        <main className="flex min-h-screen flex-col">
            <NavBar />

            {/* WAVES y TITULO */}
            <section className="mb-6">

                <span className="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:m-auto [&>svg]:block [&>svg]:w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="500"
                        preserveAspectRatio="none" viewBox="0 0 1920 880">
                        <g transform="translate(960,300) scale(1,1) translate(-960,-440)">
                            <linearGradient id="lg-0.047955344060927496" x1="0" x2="1" y1="0" y2="0">
                                <stop stop-color="hsl(217, 88%, 13.7%)" offset="0"></stop>
                                <stop stop-color="hsl(217, 88%, 75.1%)" offset="1"></stop>
                            </linearGradient>
                            <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
                                <animate attributeName="d" dur="33.333333333333336s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1"
                                    calcMode="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="0s"
                                    values="M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z;M0 0L 0 877.6839081951588Q 320 668.0720922803877  640 649.0018928349388T 1280 328.7087077664202T 1920 162.95038242563396L 1920 0 Z;M0 0L 0 724.9886210051687Q 320 661.4364572061575  640 623.2173947479624T 1280 359.20353038907734T 1920 135.51673041732283L 1920 0 Z;M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z">
                                </animate>
                            </path>
                            <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
                                <animate attributeName="d" dur="33.333333333333336s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1"
                                    calcMode="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-6.666666666666667s"
                                    values="M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z;M0 0L 0 842.1984196370487Q 320 570.6690721707517  640 540.6844954979398T 1280 439.92879442880593T 1920 200.29713960445451L 1920 0 Z;M0 0L 0 796.6802345094818Q 320 721.9216894353016  640 696.8815669355181T 1280 373.6367381440213T 1920 196.63169821789495L 1920 0 Z;M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z">
                                </animate>
                            </path>
                            <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
                                <animate attributeName="d" dur="33.333333333333336s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1"
                                    calcMode="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-13.333333333333334s"
                                    values="M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z;M0 0L 0 821.0401780336218Q 320 670.8690783540507  640 637.0744123031742T 1280 456.40745286432224T 1920 278.1294357804296L 1920 0 Z;M0 0L 0 744.0534225112256Q 320 637.6425395409125  640 593.2079605185819T 1280 457.03995196824286T 1920 254.87693899994804L 1920 0 Z;M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z">
                                </animate>
                            </path>
                            <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
                                <animate attributeName="d" dur="33.333333333333336s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1"
                                    calcMode="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-20s"
                                    values="M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z;M0 0L 0 802.0504889976935Q 320 561.3963273210122  640 537.6024084387631T 1280 430.41283267566695T 1920 256.1972069733954L 1920 0 Z;M0 0L 0 789.4448177495887Q 320 561.9675446430498  640 531.6192318019404T 1280 414.76018143244175T 1920 265.9163329632971L 1920 0 Z;M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z">
                                </animate>
                            </path>
                            <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
                                <animate attributeName="d" dur="33.333333333333336s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1"
                                    calcMode="spline" keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1" begin="-26.666666666666668s"
                                    values="M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z;M0 0L 0 871.4928294956283Q 320 618.9784567388518  640 593.1183717103518T 1280 376.5051942642811T 1920 141.32293927545027L 1920 0 Z;M0 0L 0 782.0118384610068Q 320 727.3267836497654  640 694.0476176759635T 1280 518.1545471640493T 1920 276.0053882957168L 1920 0 Z;M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z">
                                </animate>
                            </path>
                        </g>
                    </svg>
                </span>

                <div className="w-100 mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
                    <div className="text-center">
                        <div
                            className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] py-12 md:px-12"
                            style={{
                                marginTop: "80px",
                                backdropFilter: "saturate(200%) blur(25px)",
                            }}>
                            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl xl:text-6xl">
                                Administración en el ámbito <br /><span className="text-mainAzul-100">legal</span> e <span className="text-mainAzul-100">inmobiliario</span>
                            </h1>
                            {/* <a className="mb-2 inline-block rounded bg-mainAzul-100 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
                            <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-mainAzul-100 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
                                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* TEXTO y FOTOS */}
            <section>
                <div className="gap-16 items-center py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-12 lg:px-6">
                    <div className="text-gray-500 text-xl">
                        {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2> */}
                        <p className="mb-4 text-center lg:text-left">En Cassad, comprendemos la importancia de una gestión eficiente y efectiva de propiedades para proteger y maximizar su inversión. Nuestro servicio de administración ofrece soluciones integrales diseñadas para brindarle tranquilidad y seguridad en la gestión de su patrimonio inmobiliario.</p>
                        {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="/img/admin.jpg" alt="office content 1" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/img/files.jpg" alt="office content 2" />
                    </div>
                </div>
            </section>

            {/* 3 CARDS */}
            <section className="pb-12 pt-10 lg:pb-[90px]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">

                        <div className="w-full px-4 md:w-1/2 lg:w-1/3 py-4">
                            <div className="mb-9 rounded-[20px] bg-white p-10 shadow-xl border hover:shadow-2xl md:px-7 xl:px-10 hover:cursor-pointer hover:text-mainAzul-100" style={{ height: '100%' }}>
                                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-mainAzul-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2} className="w-10 h-10">
                                        <path color="white" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                    </svg>

                                </div>
                                <h4 className="mb-[14px] text-2xl font-semibold text-dark">
                                    Asesoría Legal e Inmobiliaria
                                </h4>
                                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
                                    <li>
                                        Asesoramiento experto en cuestiones legales y fiscales relacionadas con la propiedad.
                                    </li>
                                    <li>
                                        Resolución de conflictos con inquilinos y otros terceros.
                                    </li>
                                    <li>
                                        Asistencia en la redacción y negociación de contratos.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 md:w-1/2 lg:w-1/3 py-4">
                            <div className="mb-9 rounded-[20px] bg-white p-10 shadow-xl border hover:shadow-2xl md:px-7 xl:px-10 hover:cursor-pointer hover:text-mainAzul-100" style={{ height: '100%' }}>
                                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-mainAzul-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} className="w-12 h-12">
                                        <path color="white" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                    </svg>


                                </div>
                                <h4 className="mb-[14px] text-2xl font-semibold text-dark">
                                    Cobro de Rentas
                                </h4>
                                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
                                    <li>
                                        Gestión puntual y eficiente del cobro de rentas.
                                    </li>
                                    <li>
                                        Seguimiento de pagos y recordatorios a inquilinos.
                                    </li>
                                    <li>
                                        Reportes detallados de ingresos y gastos.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 md:w-1/2 lg:w-1/3 py-4">
                            <div className="mb-9 rounded-[20px] bg-white p-10 shadow-xl border hover:shadow-2xl md:px-7 xl:px-10 hover:cursor-pointer hover:text-mainAzul-100" style={{ height: '100%' }}>
                                <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-mainAzul-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2} className="w-10 h-10">
                                        <path color="white" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>

                                </div>
                                <h4 className="mb-[14px] text-2xl font-semibold text-dark">
                                    Resguardo de Documentos
                                </h4>
                                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
                                    <li>
                                        Custodia segura de todos los documentos relacionados con la propiedad.
                                    </li>
                                    <li>
                                        Archivo y organización de contratos, facturas y otros documentos importantes.
                                    </li>
                                    <li>
                                        Acceso rápido y seguro a la información para propietarios e inquilinos.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* BENEFICIOS */}
            <section>
                <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
                    <div className="max-w-screen-md mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Beneficios de Nuestro Servicio</h2>

                        <p className="text-gray-500 sm:text-xl py-3">
                            <b>Tranquilidad y seguridad.</b> Confíe en nosotros para manejar todos los aspectos de la gestión de su propiedad, desde el cobro de rentas hasta la resolución de problemas legales, para que pueda concentrarse en otras áreas de su vida.
                        </p>

                        <p className="text-gray-500 sm:text-xl py-3">
                            <b>Profesionalismo y Eficiencia.</b> Nuestro equipo altamente capacitado y experimentado garantiza un servicio profesional y eficiente en todo momento, asegurando que sus intereses estén siempre protegidos.
                        </p>

                        <p className="text-gray-500 sm:text-xl py-3">
                            <b>Comunicación Transparente.</b> Mantenemos una comunicación abierta y transparente con nuestros clientes, proporcionando actualizaciones regulares sobre el estado y el rendimiento de sus propiedades.
                        </p>
                    </div>

                    {/* <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                                <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Marketing</h3>
                            <p className="text-gray-500">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                                <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Legal</h3>
                            <p className="text-gray-500">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                                <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Business Automation</h3>
                            <p className="text-gray-500">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                                <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Finance</h3>
                            <p className="text-gray-500">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                                <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Enterprise Design</h3>
                            <p className="text-gray-500">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                                <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Operations</h3>
                            <p className="text-gray-500">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* CARDS */}
            {/* <section
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-14 gap-x-14 mt-10 mb-16">

                {properties.map((property) => (
                    <PropertyCard property={property} key={property.id} />
                ))}

            </section> */}

            {/* FOOTER */}
            <Footer />

        </main>
    );
}

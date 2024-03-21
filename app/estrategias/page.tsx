'use client'

import NavBar from "@/app/ui/navbar/NavBar";
import Footer from "@/app/ui/Footer";
import clsx from "clsx";
import bgImage from "../../public/img/almacen.jpg";

export default function Estrategias() {

    const property =
    {
        id: '6',
        name: 'Casa en Bosques del Valle',
        location: 'Monterrey, Nuevo Leon, Mexico',
        address: 'Calle del Bosque 987, Bosques del Valle',
        price: 7500000,
        m_squared: 160,
        photo: '/img/almacen.jpg',
        description: 'Experimenta el lujo y la privacidad en esta espléndida casa ubicada en Bosques del Valle, en Monterrey, Nuevo León, México. Con una impresionante área de 160 metros cuadrados, esta residencia ofrece un diseño arquitectónico impecable, acabados de lujo y una vista panorámica que te dejará sin aliento. Perfecta para aquellos que buscan una vida de ensueño en una de las zonas más exclusivas de Monterrey.',
        type: 'Residencial',
    };

    return (
        <>
            {/* NAVBAR */}
            <NavBar />

            {/* FOTO background y TEXTO */}
            <section
                className="bg-center bg-no-repeat bg-blend-multiply bg-slate-600 bg-cover"
                style={{
                    backgroundImage: `url(${bgImage.src})`,
                    backgroundColor: "rgba(12, 64, 104, 0.8)",
                    // backgroundSize: "cover",
                    // backgroundPosition: "center",
                    // backgroundAttachment: "fixed",
                    // opacity: "0.5",
                    height: "50vh",
                }}
            >
                <div className="px-4 mx-auto max-w-screen-xl text-center flex flex-col items-center justify-center h-full">
                    <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
                        Estrategias
                    </h1>
                    {/* <p className="text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Nos diferenciamos en estrategias y soluciones de diagnóstico inmobiliario para conectar con clientes de una manera personal y sentido de pertenencia.          
                        </p> */}
                </div>
            </section>

            {/* HEADER */}
            <div className="overflow-y-hidden">

                <div className="my-6">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <dl className="rounded-lg">
                            <div
                                className="flex flex-col p-6 text-center">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    En Cassad, desarrollamos estrategias innovadoras y personalizadas para ayudar a nuestros clientes a alcanzar sus objetivos inmobiliarios y legales. Desde la optimización del valor de las propiedades hasta la resolución de problemas complejos, nuestro enfoque estratégico garantiza resultados exitosos y beneficios a largo plazo.
                                </dt>
                                {/* <dd className="order-1 text-5xl font-extrabold text-gray-700">${property.price.toLocaleString()}</dd> */}
                            </div>
                        </dl>
                    </div>
                </div>

            </div>


            {/* ESTRATEGIAS */}
            <ul className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-2 gap-y-10 gap-x-6 items-start p-8 bg-gray-100">

                <li className="relative flex flex-col sm:flex-row lg:flex-col items-start">
                    <div className="order-1 sm:ml-6 lg:ml-0">
                        <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                            <span className="mb-1 block text-sm leading-6 text-indigo-500">Maximiza el Valor</span>Desarrollo y Evaluación de Propiedades</h3>
                        <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                            <p>Evaluación exhaustiva de las propiedades para identificar oportunidades y riesgos. Desarrollo de proyectos y planes de acción personalizados para maximizar el valor y el rendimiento.</p>
                        </div>
                    </div>
                    <img src="/img/E_casas_modelo.jpg" alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 lg:mb-6 lg:w-full" width="1216" height="640" />
                </li>

                <li className="relative flex flex-col sm:flex-row lg:flex-col items-start">
                    <div className="order-1 sm:ml-6 lg:ml-0">
                        <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                            <span className="mb-1 block text-sm leading-6 text-indigo-500">Estrategias Fiscales</span>Soluciones Inmobiliarias sin Litigio</h3>
                        <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                            <p>Resolución de problemas inmobiliarios complejos sin recurrir a litigios costosos y prolongados. Implementación de estrategias fiscales y económicas para optimizar los beneficios de los inmuebles.</p>
                        </div>
                    </div>
                    <img src="/img/E_analisis.jpg" alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 lg:mb-6 lg:w-full" width="1216" height="640" />
                </li>

                <li className="relative flex flex-col sm:flex-row lg:flex-col items-start">
                    <div className="order-1 sm:ml-6 lg:ml-0">
                        <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                            <span className="mb-1 block text-sm leading-6 text-indigo-500">Inversiones Seguras</span>Análisis Detallado de Propiedades</h3>
                        <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                            <p>Investigación detallada de propiedades para identificar posibles problemas legales o fiscales. Alertas inmobiliarias y recomendaciones para garantizar una inversión segura y rentable.</p>
                        </div>
                    </div>
                    <img src="/img/E_llave_puerta.jpg" alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 lg:mb-6 lg:w-full" width="1216" height="640" />
                </li>

                <li className="relative flex flex-col sm:flex-row lg:flex-col items-start">
                    <div className="order-1 sm:ml-6 lg:ml-0">
                        <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                            <span className="mb-1 block text-sm leading-6 text-indigo-500">Control Eficiente</span>Proyectos Legales de Administración</h3>
                        <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                            <p>Diseño y desarrollo de proyectos legales para una gestión eficiente y efectiva de la información y los casos. Implementación de sistemas de medición de procesos para garantizar un seguimiento y control adecuados.</p>
                        </div>
                    </div>
                    <img src="/img/E_planta.jpg" alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 lg:mb-6 lg:w-full" width="1216" height="640" />
                </li>

            </ul>


            {/* PRINCIPIOS DE ACTUACION */}
            <section className="mt-10">
                <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
                    <div className="max-w-screen-md mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Principios de Actuación</h2>

                        <p className="text-gray-500 sm:text-xl py-3">
                            <b>Integridad.</b> Nos comprometemos a actuar con honestidad y responsabilidad en todas nuestras interacciones y transacciones.
                        </p>

                        <p className="text-gray-500 sm:text-xl py-3">
                            <b>Respeto y Empatía.</b> Fomentamos un ambiente de trabajo que promueva la confianza, el respeto y la cooperación entre nuestro equipo y nuestros clientes.
                        </p>

                        <p className="text-gray-500 sm:text-xl py-3">
                            <b>Sinceridad en Resultados.</b> Estamos comprometidos con la creación de valor y la mejora continua de nuestros servicios, demostrando una responsabilidad personal por el éxito de nuestros clientes.
                        </p>

                        <p className="text-gray-500 sm:text-xl py-3">
                            <b>Servicio Empresarial.</b> Nos destacamos por nuestra disponibilidad, actitud proactiva y enfoque orientado al cliente en todas nuestras actividades y servicios.
                        </p>

                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />

        </>
    );
}
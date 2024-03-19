'use client'

import NavBar from "@/app/ui/navbar/NavBar";
import Footer from "@/app/ui/Footer";
import clsx from "clsx";

export default function Estrategias() {

    const property =
    {
        id: '6',
        name: 'Casa en Bosques del Valle',
        location: 'Monterrey, Nuevo Leon, Mexico',
        address: 'Calle del Bosque 987, Bosques del Valle',
        price: 7500000,
        m_squared: 160,
        photo: '/casas/casa3.jpg',
        description: 'Experimenta el lujo y la privacidad en esta espléndida casa ubicada en Bosques del Valle, en Monterrey, Nuevo León, México. Con una impresionante área de 160 metros cuadrados, esta residencia ofrece un diseño arquitectónico impecable, acabados de lujo y una vista panorámica que te dejará sin aliento. Perfecta para aquellos que buscan una vida de ensueño en una de las zonas más exclusivas de Monterrey.',
        type: 'Residencial',
    };

    return (
        <>
            {/* NAVBAR */}
            <NavBar />


            <div className="bg-gray-100 overflow-y-hidden">
                <div className="w-full px-6">
                    <div className="mt-8 relative rounded-lg bg-mainAzul-100 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                        <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
                        <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
                        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-14 lg:mb-6">
                            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-white font-bold leading-tight">
                                {property.name}
                            </h1>
                            <p className="text-gray-100 mt-2 text-lg text-center flex items-center justify-center">
                                {property.location}
                            </p>
                        </div>
                    </div>
                    <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
                        <div className="relative sm:w-2/3 w-11/12">
                            <img src={property.photo} alt="Sample Page" className="rounded-3xl" role="img" />
                            <figcaption className="mt-2 text-lg text-center text-gray-500 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                {property.address}
                            </figcaption>
                        </div>
                    </div>
                </div>

                <div className="my-10">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <dl className="rounded-lg">
                            <div
                                className="flex flex-col p-6 text-center">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    Precio en pesos mexicanos
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">${property.price.toLocaleString()}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            <div className="container my-24 mx-auto px-6 text-center">
                <section>
                    {/* <h1 className="mb-4 text-4xl font-bold">
                        Descripción
                    </h1> */}

                    <p className="mb-6">
                        <span
                            className={clsx(
                                'text-xl font-medium me-2 px-2.5 py-1 rounded',
                                {
                                    'bg-gray-100 text-gray-800': property.type == 'Residencial',
                                    'bg-blue-100 text-blue-800': property.type == 'Comercial',
                                    'bg-green-100 text-green-800': property.type == 'Mixtas',
                                    'bg-yellow-100 text-yellow-800': property.type == 'Terrenos',
                                    'bg-indigo-100 text-indigo-800': property.type == 'Industrial',
                                    'bg-purple-100 text-purple-800': property.type == 'Especiales',
                                },
                            )}
                        >
                            {property.type}
                        </span>
                        <span
                            className={'text-xl font-medium me-2 px-2.5 py-1 rounded bg-gray-100 text-gray-800'}
                        >
                            {property.m_squared}m<sup>2</sup>
                        </span>
                    </p>

                    <p className="mb-6 text-xl text-gray-700">
                        {property.description}
                    </p>
                </section>
            </div>

            {/* FOOTER */}
            <Footer />

        </>
    );
}
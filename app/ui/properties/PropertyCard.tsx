import Link from "next/link";
import clsx from "clsx";
import { Property } from "@/app/lib/definitions";

export default function PropertyCard({
    property,
}: {
    property: Property;
}) {
    return (
        <Link
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:cursor-pointer"
            href={`/administracion/${property.id}`}
            target="_blank"
        >
            <div>
                <img src={property.photo} alt="Imagen de propiedad" className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">

                    {/* Ubicación */}
                    <span className="text-gray-400 mr-3 uppercase text-xs">{property.location}</span>

                    {/* Nombre */}
                    <p className="text-lg font-bold text-black truncate block capitalize">{property.name}</p>

                    <div className="flex items-center mt-2">

                        {/* Metros cuadrados */}
                        <p className="text-sm text-black cursor-auto">{property.m_squared} m<sup>2</sup></p>

                        {/* Tipo */}
                        <span
                            className={clsx(
                                'text-xs font-medium me-2 px-2.5 py-0.5 rounded ml-2',
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

                    </div>


                    <div className="flex items-center">

                        {/* Precio */}
                        <p className="text-lg font-semibold text-black cursor-auto my-3">{property.price.toLocaleString()} MXN</p>


                        {/* <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del> */}

                        {/* <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div> */}

                    </div>
                </div>
            </div>
        </Link>
    )
}
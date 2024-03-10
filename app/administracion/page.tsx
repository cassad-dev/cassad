'use client'
import NavBar from "../ui/navbar/NavBar";
import Footer from "../ui/Footer";
import PropertyCard from "../ui/properties/PropertyCard";

const properties = [
    {
        id: '1',
        name: 'Casa en Sierra Alta',
        location: 'Monterrey, Nuevo Leon, Mexico',
        address: 'Calle de la Montaña 123, Sierra Alta',
        price: 2500000,
        m_squared: 130,
        photo: '/casas/casa2.jpg',
        description: 'Descubre la elegancia y comodidad en esta encantadora casa en Sierra Alta, situada en Monterrey, Nuevo León, México. Con una impresionante área de 130 metros cuadrados, esta residencia ofrece amplios espacios llenos de luz natural, acabados de primera calidad y una vista panorámica que quita el aliento. Perfecta para aquellos que desean una vida lujosa en una de las zonas más exclusivas de Monterrey.',
        type: 'Residencial',
    },
    {
        id: '2',
        name: 'Casa en San Pedro',
        location: 'Monterrey, Nuevo Leon, Mexico',
        address: 'Avenida de las Palmas 456, San Pedro',
        price: 12500000,
        m_squared: 225,
        photo: '/casas/casa4.jpg',
        description: 'Adéntrate en el lujo y la sofisticación con esta elegante casa en San Pedro, una localidad privilegiada en Monterrey, Nuevo León, México. Con una impresionante área de 225 metros cuadrados, esta residencia cuenta con espacios magníficamente diseñados, acabados de alta gama y una vista panorámica que deleita los sentidos. Ideal para aquellos que buscan una residencia excepcional en una de las zonas más prestigiosas de Monterrey.',
        type: 'Residencial',
    },
    {
        id: '3',
        name: 'Terreno en San Agustín',
        location: 'Monterrey, Nuevo Leon, Mexico',
        address: 'Calle de la Colina 789, San Agustín',
        price: 3500000,
        m_squared: 90,
        photo: '/casas/terreno1.jpg',
        description: 'Explora las posibilidades en este amplio terreno ubicado en San Agustín, una joya escondida en Monterrey, Nuevo León, México. Con una extensión de 90 metros cuadrados, este terreno ofrece un lienzo en blanco para construir la casa de tus sueños, con vistas panorámicas y la tranquilidad que solo esta zona exclusiva puede ofrecer.',
        type: 'Terrenos',
    },
    {
        id: '4',
        name: 'Departamento en Cordillera',
        location: 'Monterrey, Nuevo Leon, Mexico',
        address: 'Boulevard de las Montañas 101, Cordillera',
        price: 1500000,
        m_squared: 70,
        photo: '/casas/casa1.jpg',
        description: 'Disfruta del estilo de vida moderno y urbano en este encantador departamento en Cordillera, ubicado en Monterrey, Nuevo León, México. Con una superficie de 70 metros cuadrados, este departamento ofrece comodidad, diseño contemporáneo y una vista impresionante de la ciudad. Perfecto para aquellos que buscan un hogar elegante en el corazón de Monterrey.',
        type: 'Residencial',
    },
    {
        id: '5',
        name: 'Local en Plaza Comercial colonia Chepevera',
        location: 'Monterrey, Nuevo Leon, Mexico',
        address: 'Avenida de los Comerciantes 555, Chepevera',
        price: 2000000,
        m_squared: 80,
        photo: '/casas/comercial1.png',
        description: 'Haz realidad tu negocio en este amplio local ubicado en Plaza Comercial colonia Chepevera, en Monterrey, Nuevo León, México. Con una superficie de 80 metros cuadrados, este local comercial ofrece una excelente ubicación, espacios versátiles y la oportunidad de atraer a una clientela exigente. Ideal para emprendedores que buscan destacar en una zona comercial de alta demanda.',
        type: 'Comercial',
    },
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
    }
];



export default function Administracion() {

    return (
        <main className="flex min-h-screen flex-col">
            <NavBar />

            {/* WAVES y TITULO */}
            <section className="mb-6">

                <span className="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:m-auto [&>svg]:block [&>svg]:w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="680"
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
                            <h1 className="mt-6 mb-16 text-4xl font-bold tracking-tight md:text-6xl xl:text-6xl">
                                Administración en el ámbito <br /><span className="text-mainAzul-100">legal</span> y <span className="text-mainAzul-100">tecnológico</span>
                            </h1>
                            <a className="mb-2 inline-block rounded bg-mainAzul-100 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
                            <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-mainAzul-100 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
                                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CARDS */}
            <section
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-14 gap-x-14 mt-10 mb-16">

                {properties.map((property) => (
                    <PropertyCard property={property} key={property.id} />
                ))}

            </section>

            {/* FOOTER */}
            <Footer />

        </main>
    );
}

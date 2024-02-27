import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const pathname = usePathname();
    console.log(pathname)

    return (
        <nav className="sticky top-0 bg-white z-20 shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/logos/logo_azul.png" height={40} width={120} alt="icon"></Image>
                </Link>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link
                                href="/conocenos"
                                className={pathname == '/conocenos' ? "block py-2 px-3 text-white bg-mainAzul-100 rounded md:rounded-none md:bg-transparent md:text-blue-700 hover:text-blue-700 md:p-0 border-b-2 border-transparent md:hover:border-b-2 md:hover:border-blue-700" : "block py-2 px-3 text-gray-900 rounded md:rounded-none hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:p-0 border-b-2 border-transparent md:hover:border-b-2 md:hover:border-blue-700"}
                                aria-current="page"
                            >
                                Conócenos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/servicios"
                                className={pathname == '/servicios' ? "block py-2 px-3 text-white bg-mainAzul-100 rounded md:rounded-none md:bg-transparent md:text-blue-700 hover:text-blue-700 md:p-0 border-b-2 border-transparent md:hover:border-b-2 md:hover:border-blue-700" : "block py-2 px-3 text-gray-900 rounded md:rounded-none hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:p-0 border-b-2 border-transparent md:hover:border-b-2 md:hover:border-blue-700"}
                            >
                                Servicios
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/administracion"
                                className={pathname == '/administracion' ? "block py-2 px-3 text-white bg-mainAzul-100 rounded md:rounded-none md:bg-transparent md:text-blue-700 hover:text-blue-700 md:p-0 border-b-2 border-transparent md:hover:border-b-2 md:hover:border-blue-700" : "block py-2 px-3 text-gray-900 rounded md:rounded-none hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:p-0 border-b-2 border-transparent md:hover:border-b-2 md:hover:border-blue-700"}
                            >
                                Administración
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
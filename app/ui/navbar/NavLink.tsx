import Link from "next/link";
import clsx from "clsx";

export default function NavLink({
    name, href, path,
}: {
    name: string;
    href: string;
    path: string;
}) {
    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    'block py-2 px-3 rounded md:rounded-none hover:text-blue-700 md:p-0 border-b-2 border-transparent md:hover:border-b-2 md:hover:border-blue-700',
                    {
                        'text-white bg-mainAzul-100 md:bg-transparent md:text-blue-700': path == href,
                        'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent': path != href,
                    },
                )}
            >
                {name}
            </Link>
        </li>
    )
}
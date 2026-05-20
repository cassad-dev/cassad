import Link from "next/link";
import clsx from "clsx";

export default function NavLink({
  name, href, path, mobile,
}: {
  name: string;
  href: string;
  path: string;
  mobile?: boolean;
}) {
  const isActive = path === href;

  if (mobile) {
    return (
      <li>
        <Link
          href={href}
          className={clsx(
            'block py-3 text-sm font-medium border-b border-gray-50 transition-colors duration-150',
            isActive
              ? 'text-cassad-blue'
              : 'text-gray-500 hover:text-gray-900',
          )}
        >
          <span className="flex items-center gap-2">
            {isActive && (
              <span className="w-1 h-1 rounded-full bg-cassad-blue flex-shrink-0" />
            )}
            {name}
          </span>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block text-sm font-medium py-1 transition-colors duration-150 group',
          isActive ? 'text-cassad-blue' : 'text-gray-500 hover:text-gray-900',
        )}
      >
        {name}
        {/* Underline indicator — always shown for active, slides in on hover */}
        <span
          className={clsx(
            'absolute left-0 -bottom-px h-px bg-cassad-blue transition-all duration-200',
            isActive ? 'w-full' : 'w-0 group-hover:w-full',
          )}
        />
      </Link>
    </li>
  );
}

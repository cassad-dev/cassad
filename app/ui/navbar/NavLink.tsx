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
            'flex items-center justify-between px-4 py-3.5 rounded-lg text-sm font-medium transition-colors duration-150',
            isActive
              ? 'bg-cassad-blue/8 text-cassad-blue'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
          )}
        >
          <span className="flex items-center gap-3">
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-cassad-blue flex-shrink-0" />
            )}
            {!isActive && (
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
            )}
            {name}
          </span>
          {isActive && (
            <svg className="h-3.5 w-3.5 text-cassad-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          )}
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

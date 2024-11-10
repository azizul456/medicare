"use client"; // Client directive

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      return { name: segment.charAt(0).toUpperCase() + segment.slice(1), href };
    })
  ];

  return (
    <nav aria-label="breadcrumb" className="py-4 px-6 bg-gray-100 ">
      <ol className="flex items-center space-x-2 text-gray-600 mx-auto container pl-8 pr-8">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link href={breadcrumb.href} className="hover:text-blue-600 transition">
                  {breadcrumb.name}
                </Link>
                <span className="mx-2">/</span>
              </>
            ) : (
              <span className="text-gray-800 font-semibold">{breadcrumb.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

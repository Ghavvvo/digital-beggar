'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/donors', label: 'Donors' },
    { href: '/story', label: 'Story' },
    { href: '/about', label: 'About' }
  ];

  return (
    <nav className="fixed mb-10 top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              💰
            </div>
            <span className="text-gray-800 font-semibold text-xl tracking-tight group-hover:text-gray-600 transition-colors duration-300">
              Digital Beggar
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-6 py-1 rounded-full  font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-gray-800 '
                    : 'text-gray-600 hover:text-gray-800 '
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

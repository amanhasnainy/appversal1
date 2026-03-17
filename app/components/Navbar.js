'use client';

import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

const NavDot = () => (
  <span className="h-5 w-5 rounded-full bg-red-900" aria-hidden="true" />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Solution', href: '/#solution' },
    { label: 'Journey', href: '/#journey' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Case Studies', href: '/#case-studies' },
    { label: 'Contact Us', href: '/contact' },
  ];
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white text-black border-b border-gray-200">
      <div className="w-full px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="AppVersal"
                width={220}
                height={60}
                priority
                className="h-14 w-auto"
              />
            </Link>

            <div className="hidden md:flex">
              <NavDot />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end gap-12 font-medium text-base">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex justify-end">
          <button
            type="button"
            className="bg-gray-100 p-2 rounded-md text-[#0F1934] hover:text-red-600"
            onClick={toggleMenu}
          >
            {isOpen ? <HiX className="h-6 w-6" aria-hidden="true" /> : <HiMenuAlt3 className="h-6 w-6" aria-hidden="true" />}
          </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="px-6 space-y-4 flex flex-col items-center text-[16px] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-red-600"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
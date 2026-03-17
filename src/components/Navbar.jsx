import { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import FloatingBalls from './FloatingBalls';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { label: 'About Us', to: '/about' },
    { label: 'Solution', to: '/#solution' },
    { label: 'Journey', to: '/#journey' },
    { label: 'Industries', to: '/#industries' },
    { label: 'Case Studies', to: '/#case-studies' },
    { label: 'Contact Us', to: '/get-started' },
  ];
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (location.pathname !== '/') return;
    if (!location.hash) return;

    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    // Let layout settle (esp. images/fonts) before scrolling.
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.pathname, location.hash]);

  const handleNavItemClick = (e, to) => {
    handleLinkClick();

    const hashIndex = typeof to === 'string' ? to.indexOf('#') : -1;
    if (hashIndex === -1) return;

    const targetHash = to.slice(hashIndex);
    const targetPath = to.slice(0, hashIndex) || '/';
    if (location.pathname === targetPath && location.hash === targetHash) {
      const id = targetHash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="bg-white text-black border-b border-gray-200">
      <div className="w-full px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src="/logo.png" alt="AppVersal" className="h-14 w-auto" />
            </Link>

            <div className="hidden md:block relative w-12 h-12 overflow-hidden">
              <FloatingBalls variant="single" />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end gap-12 font-medium text-base">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap"
                onClick={(e) => handleNavItemClick(e, link.to)}
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
                to={link.to}
                className="hover:text-red-600"
                onClick={(e) => handleNavItemClick(e, link.to)}
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

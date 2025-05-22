import { Briefcase, Home, Lightbulb, Mail, Puzzle } from 'lucide-react'; // Ensured Puzzle is used
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  to: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/skills", label: "Compétences", icon: Lightbulb },
  { to: "/projects", label: "Projets", icon: Puzzle }, // Ensured Puzzle is used
  { to: "/experience", label: "Expérience", icon: Briefcase },
  { to: "/contact", label: "Contact", icon: Mail },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
  };

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-yellow-400 font-bold text-xl">
              THIAM PAPA
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
                    ${location.pathname === item.to
                      ? 'bg-yellow-400 text-gray-900'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-yellow-400'
                    }`}
                >
                  <item.icon 
                    className={`mr-2 h-5 w-5 ${location.pathname === item.to ? 'text-gray-900' : 'text-yellow-500'}`} 
                  />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-yellow-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
              aria-label="Ouvrir le menu"
              onClick={handleMobileMenu}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg z-50">
              <div className="flex flex-col px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-150
                      ${location.pathname === item.to
                        ? 'bg-yellow-400 text-gray-900'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-yellow-400'
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon
                      className={`mr-2 h-5 w-5 ${location.pathname === item.to ? 'text-gray-900' : 'text-yellow-500'}`}
                    />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

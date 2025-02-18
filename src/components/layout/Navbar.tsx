import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code2, LogIn, LogOut, User } from 'lucide-react';
import { useBootcampStore } from '../../store/bootcampStore';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useBootcampStore();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/materials', label: 'Materials' },
    { href: '#programs', label: 'Programs' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  const isActive = (href: string) => {
    if (href.startsWith('#')) {
      return location.pathname === '/' && location.hash === href;
    }
    return location.pathname === href;
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">iOS Academy</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${isActive(link.href)
                      ? 'bg-indigo-700 text-white'
                      : 'hover:bg-indigo-500'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center ml-4 space-x-2">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center px-3 py-2 rounded-md bg-indigo-700">
                    <User className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{user?.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center px-3 py-2 rounded-md hover:bg-indigo-500 transition-colors"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Login</span>
                </Link>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium
                  ${isActive(link.href)
                    ? 'bg-indigo-700 text-white'
                    : 'hover:bg-indigo-500'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <div className="px-3 py-2 text-base font-medium">
                  <User className="h-4 w-4 inline mr-2" />
                  {user?.name}
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
                >
                  <LogOut className="h-4 w-4 inline mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
              >
                <LogIn className="h-4 w-4 inline mr-2" />
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
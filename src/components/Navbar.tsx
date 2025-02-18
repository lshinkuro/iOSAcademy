import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">iOS Academy</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Home</a>
              <a href="#programs" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Programs</a>
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">About</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Contact</a>
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
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500">Home</a>
            <a href="#programs" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500">Programs</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};
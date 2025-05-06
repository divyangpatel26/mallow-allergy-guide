
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-playfair font-bold">Mallow London</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Home
          </Link>
          <Link to="/menu" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Menu
          </Link>
          <Link to="/allergies" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Check Allergies
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900 py-2 font-medium" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/menu" className="text-gray-700 hover:text-gray-900 py-2 font-medium" onClick={toggleMenu}>
                Menu
              </Link>
              <Link to="/allergies" className="text-gray-700 hover:text-gray-900 py-2 font-medium" onClick={toggleMenu}>
                Check Allergies
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900 py-2 font-medium" onClick={toggleMenu}>
                About Us
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 py-2 font-medium" onClick={toggleMenu}>
                Contact
              </Link>
              <Button asChild className="bg-mallow-green-light text-gray-800 hover:bg-mallow-green border border-mallow-green">
                <Link to="/allergies">Check Your Allergies</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

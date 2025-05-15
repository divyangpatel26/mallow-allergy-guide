
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
        {/* Mobile Menu Button on left */}
        <button 
          className="md:hidden text-gray-700 p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Logo centered */}
        <div className="flex-grow flex justify-center">
          <a href="https://mallowlondon.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img 
              src="/lovable-uploads/0f33cca1-00d6-4cef-8413-8cebd45ed2e0.png" 
              alt="Mallow London" 
              className="h-10"
            />
          </a>
        </div>
        
        {/* Empty div to balance layout */}
        <div className="md:hidden w-10"></div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Button asChild className="bg-mallow-green-light text-gray-800 hover:bg-mallow-green border border-mallow-green">
                <Link to="/" onClick={toggleMenu}>Check Your Allergies</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

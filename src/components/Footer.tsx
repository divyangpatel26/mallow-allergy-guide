import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FAF3EB] pt-12 pb-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Mallow London - Canary Wharf</p>
            <p className="mb-2">123 Restaurant Row</p>
            <p className="mb-2">London, E14 5AB</p>
            <p className="mb-2">Phone: 020 1234 5678</p>
            <p>Email: info@mallowlondon.com</p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Opening Hours</h3>
            <p className="mb-2">Monday - Friday: 11am - 10pm</p>
            <p className="mb-2">Saturday: 10am - 11pm</p>
            <p className="mb-2">Sunday: 10am - 9pm</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>Allergen Disclaimer:</strong> While we make every effort to provide accurate allergen information,
            cross-contamination is possible. Please inform our staff of any allergies when dining with us.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Mallow London. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

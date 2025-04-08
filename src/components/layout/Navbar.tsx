
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            BiGe<span className="text-secondary">Brains</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-600 hover:text-primary transition-colors">
            Home
          </a>
          <a href="/about" className="text-gray-600 hover:text-primary transition-colors">
            About
          </a>
          <a href="/solutions" className="text-gray-600 hover:text-primary transition-colors">
            Solutions
          </a>
          <a href="/insights" className="text-gray-600 hover:text-primary transition-colors">
            Insights
          </a>
          <a href="/contact" className="text-gray-600 hover:text-primary transition-colors">
            Contact
          </a>
          <Button className="rounded-full px-6">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="/" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="/solutions" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Solutions
            </a>
            <a 
              href="/insights" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Insights
            </a>
            <a 
              href="/contact" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="pt-3">
              <Button className="rounded-full w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

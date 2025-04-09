
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`py-4 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/88d0f792-1f12-4f5e-9665-edc435ac38fa.png" 
              alt="BigClasses.AI Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold">
              Big<span className={`${isScrolled ? 'text-teal-600' : 'text-teal-200'}`}>Classes.AI</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className={`hover-underline ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-600 transition-colors`}>
            Home
          </a>
          <a href="#features" className={`hover-underline ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-600 transition-colors`}>
            Features
          </a>
          <a href="#courses" className={`hover-underline ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-600 transition-colors`}>
            Courses
          </a>
          <a href="#testimonials" className={`hover-underline ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-600 transition-colors`}>
            Testimonials
          </a>
          <Button className="rounded-md px-6 bg-orange-500 hover:bg-orange-600 text-white">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className={isScrolled ? 'text-gray-700' : 'text-white'}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-gray-700 hover:text-teal-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="text-gray-700 hover:text-teal-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#courses" 
              className="text-gray-700 hover:text-teal-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Courses
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-teal-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

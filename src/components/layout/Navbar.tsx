
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Youtube, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top info bar */}
      <div className="bg-blue-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+919666717099" className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-2" /> +91-9666717099
            </a>
            <a href="mailto:info@bigclasses.ai" className="flex items-center text-sm">
              <Mail className="h-4 w-4 mr-2" /> Info@bigclasses.ai
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="text-white hover:text-blue-200">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-blue-200">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-blue-200">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-blue-200">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-blue-200">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/88d0f792-1f12-4f5e-9665-edc435ac38fa.png" 
                alt="BigClasses.AI Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-blue-900">
                Big<span className="text-blue-600">Classes.AI</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors">
              Our Courses
            </a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              About us
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
              Our Blog
            </a>
            <Button className="rounded-md px-6 bg-blue-500 hover:bg-blue-600 flex items-center gap-1">
              Contact us
              <ExternalLink size={16} />
            </Button>
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
                href="#courses" 
                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={toggleMenu}
              >
                Our Courses
              </a>
              <a 
                href="#features" 
                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={toggleMenu}
              >
                About us
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-600 hover:text-blue-600 transition-colors py-2"
                onClick={toggleMenu}
              >
                Our Blog
              </a>
              <Button className="w-full rounded-md bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-1">
                Contact us
                <ExternalLink size={16} />
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

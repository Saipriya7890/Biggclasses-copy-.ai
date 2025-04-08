
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
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/88d0f792-1f12-4f5e-9665-edc435ac38fa.png" 
              alt="BigClasses.AI Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-primary">
              Big<span className="text-secondary">Classes.AI</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#courses" className="text-gray-600 hover:text-primary transition-colors">
            Courses
          </a>
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
            Pricing
          </a>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="rounded-full px-6">
              Log in
            </Button>
            <Button className="rounded-full px-6">Sign up</Button>
          </div>
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
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Courses
            </a>
            <a 
              href="#features" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-3 pt-3">
              <Button variant="outline" className="rounded-full">
                Log in
              </Button>
              <Button className="rounded-full">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

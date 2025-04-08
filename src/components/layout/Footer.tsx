
import React from "react";
import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between pb-12 border-b border-gray-200">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-6">
              BiGe<span className="text-secondary">Brains</span>
            </h3>
            <p className="text-gray-600 max-w-xs">
              Empowering businesses with innovative solutions for tomorrow's challenges.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-600 hover:text-primary">Home</a></li>
                <li><a href="/about" className="text-gray-600 hover:text-primary">About Us</a></li>
                <li><a href="/solutions" className="text-gray-600 hover:text-primary">Solutions</a></li>
                <li><a href="/case-studies" className="text-gray-600 hover:text-primary">Case Studies</a></li>
                <li><a href="/blog" className="text-gray-600 hover:text-primary">Blog</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Our Solutions</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-primary">Digital Transformation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Tech Solutions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Cloud Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">AI & Machine Learning</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Software Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Custom Solutions</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <address className="not-italic text-gray-600">
                <p>123 Business Avenue</p>
                <p>New York, NY 10001</p>
                <p className="mt-3">+1 (234) 567-8901</p>
                <p><a href="mailto:info@bigebrains.com" className="hover:text-primary">info@bigebrains.com</a></p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 BiGeBrains. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

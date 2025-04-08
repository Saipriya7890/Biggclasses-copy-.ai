
import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between pb-12 border-b border-gray-200">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-6">
              BigClasses<span className="text-secondary">.AI</span>
            </h3>
            <p className="text-gray-600 max-w-xs">
              Revolutionizing education with AI-powered interactive learning experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-primary">Courses</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Press</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold text-lg mb-4">Stay up to date</h4>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="border border-gray-300 rounded-full px-4 py-2 bg-white text-sm flex-grow"
                />
                <Button size="sm" className="rounded-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 BigClasses.AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-primary">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

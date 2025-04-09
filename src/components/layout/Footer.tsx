
import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/88d0f792-1f12-4f5e-9665-edc435ac38fa.png" 
                alt="BigClasses.AI Logo" 
                className="h-10 w-auto bg-white rounded-full p-1"
              />
              <h3 className="text-xl font-bold">Big<span className="text-blue-400">Classes.AI</span></h3>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming education through AI-powered learning experiences that adapt to your unique needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors p-2 bg-blue-800 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors p-2 bg-blue-800 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors p-2 bg-blue-800 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors p-2 bg-blue-800 rounded-full">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-xl">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-xl">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 AI Street, Tech Park, Hyderabad, India - 500081</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@bigclasses.ai</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-xl">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">Stay updated with the latest courses and AI learning tips.</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-blue-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-700"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BigClasses.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

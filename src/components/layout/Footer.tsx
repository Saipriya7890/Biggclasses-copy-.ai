
import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/88d0f792-1f12-4f5e-9665-edc435ac38fa.png" 
                alt="BigClasses.AI Logo" 
                className="h-10 w-auto"
              />
              <h3 className="text-xl font-bold">Big<span className="text-primary">Classes.AI</span></h3>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming education through AI-powered learning experiences that adapt to your unique needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">123 Learning Street, Education City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">info@bigclasses.ai</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with the latest courses and AI learning tips.</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BigClasses.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

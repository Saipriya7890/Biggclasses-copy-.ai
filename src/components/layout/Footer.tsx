
import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-teal-700 to-teal-900 text-white relative">
      {/* Wave separator */}
      <div className="w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
          className="relative block w-full h-[60px] rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          className="fill-gray-50"></path>
        </svg>
      </div>
      
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left section with logo and info - Taking 4 columns */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-6">
              {/* Blended logo with teal gradient background */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <img 
                  src="/lovable-uploads/88d0f792-1f12-4f5e-9665-edc435ac38fa.png" 
                  alt="BigClasses.AI Logo" 
                  className="h-10 w-auto brightness-150 mix-blend-lighten"
                />
                <h3 className="text-xl font-bold text-white">
                  Big<span className="text-teal-200">Classes.AI</span>
                </h3>
              </div>
            </div>
            
            <p className="text-teal-100 mb-6">
              Transforming education through AI-powered learning experiences that adapt to your unique needs.
            </p>
            
            <div className="mt-auto">
              {/* Call us 24/7 section */}
              <h4 className="font-bold text-lg">Call Us 24/7</h4>
              <p className="text-2xl font-bold text-white mb-4">+1 (555) 123-4567</p>
              
              <p className="text-teal-100 mb-6">
                BigClasses.AI is one of the best AI education platforms available globally.
              </p>
              
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Center quick links section - Taking 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="text-teal-100 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Courses
                </a>
              </li>
              <li>
                <a href="#features" className="text-teal-100 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-teal-100 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact info section - Taking 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-xl mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-teal-200 flex-shrink-0 mt-1" />
                <span className="text-teal-100">123 Learning Street, Education City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-teal-200 flex-shrink-0" />
                <span className="text-teal-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-teal-200 flex-shrink-0" />
                <span className="text-teal-100">info@bigclasses.ai</span>
              </li>
            </ul>
            
            <div className="flex space-x-3 mt-8">
              <a href="#" className="bg-teal-600/30 hover:bg-teal-600/50 p-2 rounded-full text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-teal-600/30 hover:bg-teal-600/50 p-2 rounded-full text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-teal-600/30 hover:bg-teal-600/50 p-2 rounded-full text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-teal-600/30 hover:bg-teal-600/50 p-2 rounded-full text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Subscribe section - Taking 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-xl mb-6 text-white">Subscribe</h4>
            <p className="text-teal-100 mb-4">Stay updated with the latest courses and AI learning tips.</p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-teal-600/30 focus:border-teal-400 text-white placeholder:text-teal-200/70"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md">
                Subscribe Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z\'/%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="border-t border-teal-600/30 mt-8 py-8 text-center text-teal-200 px-6">
          <p>&copy; {new Date().getFullYear()} BigClasses.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

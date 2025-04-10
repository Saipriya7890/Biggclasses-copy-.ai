
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-24 overflow-hidden bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-blue-600">Transform</span> Your Career with <span className="highlight-text">AI</span> Skills
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Master artificial intelligence with expert-led training, hands-on projects, and personalized mentorship. Get in-demand skills and standout in the job market.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Industry-Recognized Curriculum", 
                "Live Interactive Classes", 
                "100% Placement Assistance"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-3 h-5 w-5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-md px-8 py-6 bg-blue-600 hover:bg-blue-700">
                Explore Courses
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-md px-8 py-6 border-blue-600 text-blue-600 hover:bg-blue-50">
                Request Demo
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -z-10 top-1/4 -right-4 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop" 
                alt="AI Learning" 
                className="rounded-lg shadow-xl w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              AI-Powered Enterprise Solutions
            </div>
            <h1 className="mb-6">
              Enterprise Solutions for Your <span className="gradient-text">Business Challenges</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              We deliver comprehensive technology solutions designed to solve complex business problems and drive digital transformation for organizations of all sizes.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="rounded-full px-8 py-6">
                Explore Solutions
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6">
                Contact Sales
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative border border-gray-200 rounded-xl p-1 bg-white shadow-lg max-w-lg mx-auto animate-float">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1887&auto=format&fit=crop"
                  alt="AI-Powered Enterprise Solutions" 
                  className="w-full h-auto"
                />
              </div>
              <div className="p-6 bg-white rounded-b-lg">
                <h3 className="text-xl font-bold mb-2">Business Solutions</h3>
                <p className="text-gray-600">AI-powered solutions for enterprise challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

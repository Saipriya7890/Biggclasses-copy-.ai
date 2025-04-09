
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Briefcase } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-700 rounded-full filter blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 shadow-xl">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full py-2 px-4 mb-6">
                <Briefcase className="h-5 w-5" />
                <span className="font-medium">100% Placement Assistance</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Launch Your Career in AI & Data Science
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Join our program and get expert career guidance, interview prep, and placement support to land your dream job.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-white/90 rounded-md px-8"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 rounded-md px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-white/20">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png" 
                    alt="Microsoft" 
                    className="h-6 w-auto"
                  />
                </div>
                <div className="p-2 rounded-full bg-white/20">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
                    alt="Google" 
                    className="h-6 w-auto"
                  />
                </div>
                <div className="p-2 rounded-full bg-white/20">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/512px-Amazon_icon.svg.png" 
                    alt="Amazon" 
                    className="h-6 w-auto"
                  />
                </div>
              </div>
              <p className="text-white/80 text-center md:text-left">
                Our alumni work at top companies worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

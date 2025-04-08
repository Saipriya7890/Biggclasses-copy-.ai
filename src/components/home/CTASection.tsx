
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/90 to-secondary/90 text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-lg mb-8 text-white/90">
            Let's discuss how our solutions can address your unique challenges and drive your business forward. 
            Schedule a consultation with our experts today.
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-left">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <p>Personalized solutions tailored to your business</p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <p>Dedicated support from industry experts</p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <p>Scalable technology that grows with your business</p>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <p>Proven methodologies for consistent results</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
              Schedule a Consultation
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 rounded-full px-8"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

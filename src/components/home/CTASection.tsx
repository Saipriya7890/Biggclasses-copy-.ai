
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your learning journey?</h2>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of learners who are already experiencing the future of education with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
              Get started for free
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 rounded-full px-8"
            >
              Request a demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

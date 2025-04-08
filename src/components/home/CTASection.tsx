
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 z-0">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-white/5 rounded-full filter blur-2xl animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 shadow-xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to transform your learning journey?</h2>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Join thousands of learners who are already experiencing the future of education with our AI-powered platform.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-8 group relative overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <span className="relative z-10 flex items-center">
                    Get started for free
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white via-white to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 rounded-full px-8 group"
                >
                  <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Watch demo
                </Button>
              </div>
              
              <div className="flex items-center justify-center flex-wrap gap-6 pt-6 border-t border-white/10">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                        alt={`User ${i}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs text-white font-semibold">
                    +2k
                  </div>
                </div>
                <p className="text-white/80">
                  Join over <span className="font-bold text-white">2,000+</span> students who are already learning with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;


import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-teal-700 to-teal-900">
      {/* Background elements and patterns */}
      <div className="absolute inset-0 z-0">
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          }}
        ></div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-teal-200/10 rounded-full filter blur-3xl"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute top-20 right-20 w-3 h-3 bg-teal-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-10 w-2 h-2 bg-teal-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-teal-300 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-1.5 border border-teal-300/30 rounded-full text-teal-200 font-medium text-sm mb-6 backdrop-blur-sm bg-teal-500/10">
              <span className="w-2 h-2 rounded-full bg-teal-300 mr-2 animate-pulse"></span>
              Transform Your Learning with AI
            </div>
            
            <h1 className="text-white mb-6">
              <span className="block mb-2">Have Any</span>
              <span className="text-gradient bg-gradient-to-r from-teal-200 to-white">Project or Idea?</span>
            </h1>
            
            <p className="text-teal-100 mb-8 max-w-xl">
              Experience the future of education with our AI-powered platform. Personalized lessons, instant feedback, and interactive content that adapts to your unique learning style.
            </p>
            
            <div className="space-y-4 mb-8">
              {["Personalized learning paths", "Interactive AI-powered lessons", "Instant feedback and assessment"].map((feature, index) => (
                <div key={index} className="flex items-center group bg-white/5 backdrop-blur-sm border border-teal-400/30 rounded-lg p-3 hover:bg-white/10 transition-all">
                  <CheckCircle className="text-teal-300 mr-3 h-5 w-5" />
                  <span className="text-teal-100">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 border-0 rounded-md text-white px-8 hover:opacity-90 transition-opacity">
                Get started now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-teal-500/50 text-teal-100 hover:bg-white/10 hover:text-white rounded-md">
                View all courses
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            {/* Person with tablet image */}
            <img 
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Woman with tablet" 
              className="rounded-lg relative z-10 max-w-full h-auto"
            />
            
            {/* Speech bubble */}
            <div className="absolute top-0 right-0 bg-white rounded-full p-5 shadow-xl transform translate-x-10 -translate-y-5 z-20">
              <div className="relative">
                <p className="text-teal-700 text-sm font-bold">Have Any <br />Project or Idea?</p>
                <div className="absolute -bottom-8 -left-2 w-4 h-4 bg-white transform rotate-45"></div>
              </div>
            </div>
            
            {/* Floating glow elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-400/20 rounded-full filter blur-2xl animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-400/20 rounded-full filter blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

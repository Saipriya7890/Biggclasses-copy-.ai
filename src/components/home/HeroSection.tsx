
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-24 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-10 w-48 h-48 bg-primary/10 rounded-full filter blur-2xl animate-[pulse_6s_ease-in-out_infinite_1s]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 animate-fade-in">
              Learn better with AI
            </div>
            <h1 className="mb-6 animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <span className="gradient-text">Interactive AI-powered</span> learning experiences
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              Transform your learning experience with our AI-powered platform. Get instant feedback, personalized lessons, and interactive content that adapts to your needs.
            </p>
            
            <div className="space-y-3 mb-8 animate-fade-in opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
              {["Personalized learning paths", "Interactive AI-powered lessons", "Instant feedback and assessment"].map((feature, index) => (
                <div key={index} className="flex items-center group">
                  <CheckCircle className="text-success mr-2 h-5 w-5 transform transition-transform group-hover:scale-110" />
                  <span className="text-gray-700 group-hover:text-primary transition-colors">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-in opacity-0" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
              <Button size="lg" className="rounded-full px-8 py-6 group hover:shadow-lg transition-all">
                Get started
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 group hover:bg-gray-100 transition-all">
                View courses
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-in opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            <div className="relative border border-gray-200 rounded-xl p-1 bg-white shadow-lg max-w-lg mx-auto animate-float hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-4 -right-4 bg-secondary text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg">
                Most Popular
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1470&auto=format&fit=crop"
                  alt="AI Learning Interface" 
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white rounded-b-lg">
                <h3 className="text-xl font-bold mb-2 group">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-no-repeat bg-bottom transition-all duration-500">
                    Machine Learning Fundamentals
                  </span>
                </h3>
                <p className="text-gray-600">Interactive course with AI-powered practice sessions</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="text-yellow-500">★★★★★</div>
                    <span className="text-gray-600 text-sm">(4.9)</span>
                  </div>
                  <span className="text-primary font-semibold">15 modules</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

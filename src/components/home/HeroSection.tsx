
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle } from "lucide-react";

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
              Learn better with AI
            </div>
            <h1 className="mb-6">
              <span className="gradient-text">Interactive AI-powered</span> learning experiences
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Transform your learning experience with our AI-powered platform. Get instant feedback, personalized lessons, and interactive content that adapts to your needs.
            </p>
            
            <div className="space-y-3 mb-8">
              {["Personalized learning paths", "Interactive AI-powered lessons", "Instant feedback and assessment"].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-success mr-2 h-5 w-5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="rounded-full px-8 py-6">
                Get started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6">
                View courses
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative border border-gray-200 rounded-xl p-1 bg-white shadow-lg max-w-lg mx-auto animate-float">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1470&auto=format&fit=crop"
                  alt="AI Learning Interface" 
                  className="w-full h-auto"
                />
              </div>
              <div className="p-6 bg-white rounded-b-lg">
                <h3 className="text-xl font-bold mb-2">Machine Learning Fundamentals</h3>
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

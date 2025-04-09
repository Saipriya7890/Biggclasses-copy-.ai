
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      className="relative h-[90vh] flex items-center overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920&auto=format&fit=crop')` 
      }}
    >
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Your Career - Our Commitment
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            100% Placement Support
          </h2>
          
          <div className="space-y-4 mb-10 text-white text-lg">
            <p>Kick start your AI Journey with Placement Experts</p>
            <p>Get job support from AI experts</p>
          </div>
          
          <Button 
            size="lg" 
            className="rounded-md px-10 py-6 bg-blue-500 hover:bg-blue-600 text-lg"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

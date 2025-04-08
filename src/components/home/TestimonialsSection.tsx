
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Help us improve our productivity",
    description: "The AI tutor helped me understand complex algorithms in a way that traditional courses never could. I'm making progress twice as fast with personalized learning that adapts to my pace and learning style.",
    author: "Sarah Johnson",
    role: "Senior Designer at Design Studio",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "Transformed our team's learning approach",
    description: "As a working professional, I needed flexibility. BigClasses.AI allowed me to learn at my own pace with personalized guidance every step of the way. The interactive exercises make complex topics accessible.",
    author: "Michael Chen",
    role: "Software Engineer at TechCorp",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "Exceeded our expectations",
    description: "The interactive exercises and real-time feedback make learning programming concepts much easier. I've tried many platforms, this is by far the best for continuous learning and skill development.",
    author: "Emily Rodriguez",
    role: "Product Manager at InnovateTech",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  },
  {
    id: 4,
    quote: "Perfect solution for remote learning",
    description: "BigClasses.AI has transformed how I approach learning. The AI adapts to my needs and challenges me at just the right level. I can focus on what matters most while the platform tracks my progress.",
    author: "David Patel",
    role: "Marketing Director at GrowthFirst",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-40 h-40">
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="20" r="3" fill="#E5DEFF" />
            <circle cx="90" cy="40" r="3" fill="#E5DEFF" />
            <circle cx="70" cy="40" r="3" fill="#E5DEFF" />
            <circle cx="60" cy="20" r="3" fill="#E5DEFF" />
            <circle cx="80" cy="60" r="3" fill="#E5DEFF" />
            <circle cx="60" cy="60" r="3" fill="#E5DEFF" />
            <circle cx="40" cy="80" r="3" fill="#E5DEFF" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-40 h-40">
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="80" r="3" fill="#E5DEFF" />
            <circle cx="40" cy="90" r="3" fill="#E5DEFF" />
            <circle cx="40" cy="70" r="3" fill="#E5DEFF" />
            <circle cx="20" cy="60" r="3" fill="#E5DEFF" />
            <circle cx="60" cy="80" r="3" fill="#E5DEFF" />
            <circle cx="60" cy="60" r="3" fill="#E5DEFF" />
            <circle cx="80" cy="40" r="3" fill="#E5DEFF" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-left max-w-5xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers <br />Are Saying</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-none bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.author} 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute top-6 right-0 transform translate-x-1/2">
                  <div className="bg-primary text-white p-4 rounded-full">
                    <Quote className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{currentTestimonial.quote}</h3>
                <p className="text-gray-600 mb-8">{currentTestimonial.description}</p>
                <div className="mb-8">
                  <h4 className="font-semibold text-lg">{currentTestimonial.author}</h4>
                  <p className="text-gray-500">{currentTestimonial.role}</p>
                </div>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full h-10 w-10 border-gray-300"
                    onClick={prevTestimonial}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full h-10 w-10 border-gray-300"
                    onClick={nextTestimonial}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

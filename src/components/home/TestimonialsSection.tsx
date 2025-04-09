
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
    image: "/lovable-uploads/9e6c2a3a-9688-4e1f-96a4-39912b891c69.png"
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
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 relative overflow-hidden">
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
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our <span className="gradient-text">Students Say</span></h2>
          <p className="text-gray-600">Discover how our AI-powered courses have transformed learning experiences</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/5">
              {/* Testimonial navigation */}
              <div className="space-y-6">
                {testimonials.map((testimonial, idx) => (
                  <div 
                    key={testimonial.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      currentIndex === idx 
                        ? 'bg-white shadow-lg border-l-4 border-primary' 
                        : 'hover:bg-white/50'
                    }`}
                    onClick={() => setCurrentIndex(idx)}
                  >
                    <h3 className={`text-lg font-semibold ${currentIndex === idx ? 'text-primary' : 'text-gray-700'}`}>
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                ))}
              </div>
              
              {/* Navigation buttons for mobile */}
              <div className="flex justify-center space-x-4 mt-6 md:hidden">
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
            
            <div className="md:w-3/5">
              <Card className="overflow-hidden border-0 shadow-xl bg-white">
                <div className="p-6">
                  <div className="bg-primary/10 p-3 inline-block rounded-full mb-4">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{currentTestimonial.quote}</h3>
                  <p className="text-gray-600 mb-8">{currentTestimonial.description}</p>
                </div>
                <div className="relative h-64">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.author} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-4 left-6">
                      <h4 className="font-semibold text-lg text-white">{currentTestimonial.author}</h4>
                      <p className="text-white/80">{currentTestimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

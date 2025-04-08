
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    quote: "The AI tutor helped me understand complex algorithms in a way that traditional courses never could. I'm making progress twice as fast!",
    author: "Sarah Johnson",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "As a working professional, I needed flexibility. BigClasses.AI allowed me to learn at my own pace with personalized guidance every step of the way.",
    author: "Michael Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "The interactive exercises and real-time feedback make learning programming concepts much easier. I've tried many platforms, this is by far the best.",
    author: "Emily Rodriguez",
    role: "CS Student",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  },
  {
    id: 4,
    quote: "BigClasses.AI has transformed how I approach learning. The AI adapts to my needs and challenges me at just the right level.",
    author: "David Patel",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 5,
    quote: "I love how the courses connect theory with practical applications. The AI guidance has helped me apply these skills to real-world problems.",
    author: "Lisa Martinez",
    role: "Business Analyst",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">What our <span className="gradient-text">students say</span></h2>
          <p className="text-lg text-gray-600">
            Thousands of learners have transformed their careers with BigClasses.AI.
            Here's what some of them have to say.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="bg-white border-gray-200 h-full hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-8 flex flex-col h-full">
                      <Quote className="h-8 w-8 text-primary/30 mb-4" />
                      <p className="text-gray-700 mb-8 italic flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center">
              <CarouselPrevious className="static transform-none mr-2 bg-white" />
              <CarouselNext className="static transform-none ml-2 bg-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

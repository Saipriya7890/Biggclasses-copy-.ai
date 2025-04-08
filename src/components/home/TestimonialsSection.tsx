
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "BiGeBrains transformed our operations with their custom software solution. Their team's expertise and commitment to our success has made them an invaluable partner.",
    author: "Sarah Johnson",
    role: "CTO, TechForward Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "The cloud migration services provided by BiGeBrains were exceptional. They delivered on time, within budget, and the results have exceeded our expectations.",
    author: "Michael Chen",
    role: "IT Director, Global Logistics",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1770&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "We've seen a 40% increase in operational efficiency since implementing BiGeBrains' data analytics solution. Their insights have been game-changing for our business.",
    author: "Jennifer Williams",
    role: "CEO, Innovate Partners",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what industry leaders have to say about working with BiGeBrains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-gray-200">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-gray-700 mb-8 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

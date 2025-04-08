
import React from "react";
import { 
  Brain, 
  MessageSquare, 
  BarChart3, 
  Clock, 
  Code, 
  Video,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "AI-Powered Learning",
    description: "Our AI adapts lessons to your pace and learning style, providing personalized guidance along the way."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "Interactive Discussions",
    description: "Engage in meaningful conversations with our AI tutors to deepen your understanding of complex topics."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Real-time Progress Tracking",
    description: "Monitor your progress with detailed analytics and actionable insights to improve your learning."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Learn at Your Own Pace",
    description: "Access course materials 24/7 and learn at the time and pace that works best for you."
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Hands-on Coding Exercises",
    description: "Practice coding with interactive exercises and receive instant feedback from our code analysis AI."
  },
  {
    icon: <Video className="h-10 w-10 text-primary" />,
    title: "HD Video Lectures",
    description: "Watch high-definition video lectures with transcripts and smart search functionality."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 animate-fade-in">Why choose <span className="gradient-text">BigClasses.AI</span></h2>
          <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Our platform combines cutting-edge AI technology with expert-crafted content to deliver
            an unparalleled learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 relative">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

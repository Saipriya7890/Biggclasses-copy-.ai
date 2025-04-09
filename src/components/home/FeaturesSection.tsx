
import React from "react";
import { 
  Brain, 
  MessageSquare, 
  BarChart3, 
  Clock, 
  GraduationCap, 
  Video
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Brain className="h-10 w-10 text-blue-600" />,
    title: "AI-Powered Learning",
    description: "Our AI adapts lessons to your pace and learning style, providing personalized guidance along the way."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
    title: "Interactive Sessions",
    description: "Engage in meaningful conversations with our expert instructors to deepen your understanding of complex topics."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
    title: "Real-time Progress Tracking",
    description: "Monitor your progress with detailed analytics and actionable insights to improve your learning."
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    title: "Flexible Schedule",
    description: "Access course materials 24/7 and learn at the time and pace that works best for you."
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-blue-600" />,
    title: "100% Placement Assistance",
    description: "Get career guidance, interview preparation, and job placement support from our dedicated team."
  },
  {
    icon: <Video className="h-10 w-10 text-blue-600" />,
    title: "Live & Recorded Sessions",
    description: "Attend live interactive classes with expert instructors or watch recordings at your convenience."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-3">
            WHY CHOOSE US
          </div>
          <h2 className="mb-4">What Makes <span className="highlight-text">BigClasses.AI</span> Different</h2>
          <p className="text-lg text-gray-600">
            Our platform combines expert instruction, job-ready skills, and placement assistance to deliver
            an unparalleled learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white border-none hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-blue-100 p-3 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

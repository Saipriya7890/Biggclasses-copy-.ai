
import React from "react";
import { CheckCircle } from "lucide-react";

const TrainingHighlightsSection = () => {
  const highlights = [
    "Industry Expert Trainers with Real-time Experience",
    "Live Instructor-led Online Training",
    "Flexible Schedules and Weekend Batches",
    "Lifetime Learning Management System (LMS) Access",
    "24x7 Support and Doubt Clarification",
    "Hands-on Projects and Case Studies",
    "Resume Building and Interview Preparation",
    "Placement Assistance and Job Support"
  ];

  return (
    <section className="py-16 bg-white" id="highlights">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Our Training <span className="text-blue-600">Highlights</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="flex items-start p-6 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <CheckCircle className="flex-shrink-0 h-6 w-6 text-blue-600 mt-0.5 mr-3" />
              <span className="text-gray-700">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingHighlightsSection;

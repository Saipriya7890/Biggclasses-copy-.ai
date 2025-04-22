import React from "react";
import CourseOverview from "@/components/home/CourseOverview";
import Curriculum from "@/components/home/Curriculum";
import Highlights from "@/components/home/Highlights";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PlacementAssistance from "@/components/home/PlacementAssistance";
import CTASection from "@/components/home/CTASection";
import Navbar from "@/components/layout/Navbar";

const CourseDetails: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Highlights />
      <CourseOverview />
      <Curriculum />
      <TestimonialsSection />
      <PlacementAssistance />
      <CTASection />
    </div>
  );
};

export default CourseDetails;



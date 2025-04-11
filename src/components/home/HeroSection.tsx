import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://www.bolton.ac.uk/assets/Uploads/iStock-1356593648.jpg",
    title: "Unlock the Future with AI",
    subtitle: "Generative & Agentic AI Revolution",
    description: "Explore the power of LLM & AI Agents\nExperience AI with Live Projects",
  },
  {
    image: "https://blog.definedlearning.com/hubfs/iStock-1361844238-crop.webp",
    title: "Master AI Concepts",
    subtitle: "From Basics to Advanced Projects",
    description: "Gain real-time skills with top mentors\nWork on innovative capstone AI projects",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <>
      {/* Hero Image Section */}
      <section
        id="home"
        className="relative h-[80vh] w-full bg-cover bg-center overflow-hidden mx-auto mt-4 transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text content over image */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full max-w-2xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            {slide.title}
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300 mb-2 font-medium">
            {slide.subtitle}
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-6 whitespace-pre-line">
            {slide.description}
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-full text-white text-base">
            Enroll Now
          </Button>
        </div>

        {/* Next Slide Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-md shadow-md transition-all"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </section>
    </>
  );
};

export default HeroSection;

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
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
=======
import { CheckCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-32 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Network grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537138-5e513100b36e?q=80&w=2070&auto=format')] bg-no-repeat bg-cover opacity-20"></div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
        
        {/* Tech circuit lines */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10" viewBox="0 0 1440 320">
          <path fill="none" stroke="#4F46E5" strokeWidth="2" d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,165.3C672,192,768,224,864,213.3C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-1.5 border border-primary/30 rounded-full text-primary font-medium text-sm mb-6 backdrop-blur-sm bg-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Learn better with AI
            </div>
            
            <h1 className="text-white mb-6">
              <span className="block mb-2">Transform Your Learning</span>
              <span className="gradient-text">With AI-Powered Education</span>
            </h1>
            
            <p className="text-gray-300 mb-8 max-w-xl">
              Experience the future of education with our AI-powered platform. Personalized lessons, instant feedback, and interactive content that adapts to your unique learning style.
            </p>
            
            <div className="space-y-4 mb-8">
              {["Personalized learning paths", "Interactive AI-powered lessons", "Instant feedback and assessment"].map((feature, index) => (
                <div key={index} className="flex items-center group bg-white/5 backdrop-blur-sm border border-gray-700/30 rounded-lg p-3 hover:bg-white/10 transition-all">
                  <CheckCircle className="text-primary mr-3 h-5 w-5" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 border-0 rounded-lg text-white px-8 hover:opacity-90 transition-opacity">
                Get started now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-white/10 hover:text-white rounded-lg">
                View all courses
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            {/* Main card */}
            <div className="relative bg-gray-800/70 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 shadow-2xl shadow-primary/20">
              {/* Glowing effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-30 blur-sm"></div>
              
              <div className="relative rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" 
                  alt="AI Learning Platform" 
                  className="w-full h-auto"
                />
                {/* Overlay with tech effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-bold text-xl">AI-Powered Learning Platform</div>
                  <div className="text-gray-300 text-sm">Advanced algorithms that adapt to your learning style</div>
                </div>
              </div>
              
              {/* Stats cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-900/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/30">
                  <div className="text-gray-400 text-xs">Global Users</div>
                  <div className="text-white font-bold text-xl">148,500+</div>
                  <div className="text-green-500 text-xs flex items-center">+12.5% ↑</div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/30">
                  <div className="text-gray-400 text-xs">Course Completion</div>
                  <div className="text-white font-bold text-xl">89.7%</div>
                  <div className="text-green-500 text-xs flex items-center">+5.3% ↑</div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/30">
                  <div className="text-gray-400 text-xs">Avg. Rating</div>
                  <div className="text-white font-bold text-xl">4.8/5</div>
                  <div className="text-yellow-500 text-xs flex items-center">★★★★★</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full filter blur-2xl animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-600/20 rounded-full filter blur-xl animate-pulse"></div>
          </div>
>>>>>>> 27110f1e7dcd56e23f34bbe5523fa4edd2a1acef
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

import React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle, BrainCog, GraduationCap, Users, ArrowRightCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative h-[80vh] w-full bg-cover bg-center rounded-2xl overflow-hidden mx-auto mt-4"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1206796363/photo/ai-machine-learning-hands-of-robot-and-human-touching-on-big-data-network-connection.jpg?s=612x612&w=0&k=20&c=xIX5Bz7h50B83cCZG_gXkyZSOu-mG93DtOcNK7RNEAo=')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full max-w-2xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">Unlock the Future with AI</h1>
          <h2 className="text-lg md:text-xl text-gray-300 mb-2 font-medium">
            Generative & Agentic AI Revolution
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-6">
            Explore the power of LLM & AI Agents <br />
            Experience AI with Live Projects
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-full text-white text-base">
            Enroll Now
          </Button>
        </div>

        {/* Bottom Stats */}
<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-4/5 bg-blue-600 text-white grid grid-cols-2 md:grid-cols-4 gap-2 px-4 py-3 text-center rounded-xl shadow-lg">
  <Stat icon={<PlayCircle className="h-6 w-6" />} label="10+" text="AI Courses" />
  <Stat icon={<BrainCog className="h-6 w-6" />} label="300+" text="Expert Trainers" />
  <Stat icon={<GraduationCap className="h-6 w-6" />} label="20+" text="Years Experience" />
  <Stat icon={<Users className="h-6 w-6" />} label="50K+" text="Happy Learners" />
</div>


        {/* Next Arrow Button */}
        <a href="#next-section" className="absolute bottom-6 right-6 z-20 text-white hover:text-blue-300 transition-all">
          <ArrowRightCircle className="h-10 w-10" />
        </a>
      </section>

      {/* Next Section */}
      <section id="next-section" className="mt-12 flex flex-col md:flex-row items-center gap-6 px-6 md:px-16">
        <img
          src="https://blog.definedlearning.com/hubfs/iStock-1361844238-crop.webp"
          alt="Next Content"
          className="rounded-xl w-full md:w-1/2 shadow-lg"
        />
        <div className="text-left md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">What You'll Learn</h2>
          <p className="text-gray-600 text-base">
            Dive into the world of AI with expert guidance. Learn how generative models work, build intelligent agents,
            and work on real-time AI projects that push your limits and expand your skillset.
          </p>
        </div>
      </section>
    </>
  );
};

const Stat = ({ icon, label, text }) => (
  <div className="flex flex-col items-center justify-center space-y-1">
    <div className="bg-white/20 p-2 rounded-full">{icon}</div>
    <div className="font-semibold text-sm">{label}</div>
    <div className="text-xs">{text}</div>
  </div>
);

export default HeroSection;

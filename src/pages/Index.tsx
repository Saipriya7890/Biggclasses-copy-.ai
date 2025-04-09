
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CoursesSection from "@/components/home/CoursesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  // Add scroll reveal effect
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      if (!section.classList.contains('animate-fade-in')) {
        section.style.opacity = '0';
        observer.observe(section);
      }
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  // Add favicon
  useEffect(() => {
    // Update favicon
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = '/lovable-uploads/88d0f792-1f12-4f5e-9665-edc435ac38fa.png';
    document.getElementsByTagName('head')[0].appendChild(link);
    
    // Update page title with dynamic content
    document.title = "BigClasses.AI | Transform Your Learning with AI";
  }, []);

  // Background patterns for visual interest
  const backgroundPattern = {
    backgroundImage: `
      radial-gradient(circle at 25px 25px, rgba(64, 76, 255, 0.03) 2%, transparent 0%), 
      radial-gradient(circle at 75px 75px, rgba(255, 64, 128, 0.03) 2%, transparent 0%)
    `,
    backgroundSize: '100px 100px',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-white" style={backgroundPattern}>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

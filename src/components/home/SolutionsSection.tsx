
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Code, BarChart3, LineChart, ShieldCheck, Smartphone, BrainCircuit, Rocket, Puzzle } from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Cloud Services",
    description: "Scale your infrastructure with our managed cloud solutions that deliver reliability, security, and performance.",
    icon: Cloud
  },
  {
    id: 2,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs with modern technologies and agile methodologies.",
    icon: Code
  },
  {
    id: 3,
    title: "Data & Analytics",
    description: "Transform your data into actionable insights with our comprehensive data analytics services.",
    icon: BarChart3
  },
  {
    id: 4,
    title: "Business Intelligence",
    description: "Make informed decisions with our BI solutions that provide real-time insights into your operations.",
    icon: LineChart
  },
  {
    id: 5,
    title: "Cybersecurity",
    description: "Protect your digital assets with our enterprise-grade security solutions and compliance services.",
    icon: ShieldCheck
  },
  {
    id: 6,
    title: "Mobile Applications",
    description: "Engage your customers with intuitive and powerful mobile applications across platforms.",
    icon: Smartphone
  },
  {
    id: 7,
    title: "AI & Machine Learning",
    description: "Leverage the power of artificial intelligence to automate processes and gain competitive advantage.",
    icon: BrainCircuit
  },
  {
    id: 8,
    title: "Digital Transformation",
    description: "Navigate your digital journey with our comprehensive transformation strategy and implementation.",
    icon: Rocket
  },
  {
    id: 9,
    title: "Custom Solutions",
    description: "Tailored technology solutions designed to address your unique business challenges and requirements.",
    icon: Puzzle
  }
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Comprehensive Business Solutions</h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of technology solutions designed to help your business thrive in today's digital landscape. Our expert team delivers tailored services to address your specific challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <Card key={solution.id} className="border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

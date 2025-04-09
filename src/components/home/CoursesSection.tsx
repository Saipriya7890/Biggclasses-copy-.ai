
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Clock, Star, BookOpen, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Machine Learning Fundamentals",
    description: "Learn the core concepts and algorithms behind machine learning with hands-on projects.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    students: "2,345",
    duration: "8 weeks",
    level: "Beginner",
    rating: 4.9,
    modules: 12
  },
  {
    id: 2,
    title: "Advanced Data Science",
    description: "Dive deeper into statistical analysis, data visualization, and predictive modeling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    students: "1,892",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.7,
    modules: 15
  },
  {
    id: 3,
    title: "Natural Language Processing",
    description: "Explore how AI understands and generates human language with practical applications.",
    image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=2010&auto=format&fit=crop",
    students: "1,580",
    duration: "6 weeks",
    level: "Advanced",
    rating: 4.8,
    modules: 9
  },
  {
    id: 4,
    title: "Computer Vision Essentials",
    description: "Learn how to process and analyze visual data using cutting-edge AI techniques.",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=1470&auto=format&fit=crop",
    students: "1,243",
    duration: "7 weeks",
    level: "Intermediate",
    rating: 4.6,
    modules: 10
  }
];

const CoursesSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="mb-4">Featured <span className="gradient-text">Courses</span></h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Explore our most popular AI and data science courses, designed to help you master the skills that matter.
            </p>
          </div>
          <Button variant="outline" className="flex items-center group">
            View all courses
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              onMouseEnter={() => setHoveredId(course.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-52 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 transition-opacity duration-300 ${hoveredId === course.id ? 'opacity-100' : ''}`}></div>
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className={`w-full h-full object-cover transition-all duration-700 ${hoveredId === course.id ? 'scale-110' : ''}`}
                />
                <div className={`absolute bottom-0 left-0 right-0 p-4 z-20 transform transition-transform duration-300 ${hoveredId === course.id ? 'translate-y-0' : 'translate-y-full'}`}>
                  <Button className="w-full rounded-md" size="sm">View Course</Button>
                </div>
              </div>
              <CardContent className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      course.level === "Beginner" ? "bg-green-100 text-green-800" :
                      course.level === "Intermediate" ? "bg-blue-100 text-blue-800" :
                      "bg-purple-100 text-purple-800"
                    }`}>
                      {course.level}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium ml-1">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-no-repeat bg-bottom transition-all duration-500">
                      {course.title}
                    </span>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center text-sm text-primary">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{course.modules} modules</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="px-8 group">
            Browse all courses
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

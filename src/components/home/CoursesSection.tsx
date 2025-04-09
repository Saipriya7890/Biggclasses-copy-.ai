
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "NLP Essentials",
      description: "Master Natural Language Processing with hands-on projects and real-world applications.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
      level: "Intermediate",
      duration: "12 Weeks",
    },
    {
      id: 2,
      title: "Computer Vision Essentials",
      description: "Learn computer vision techniques from basic image processing to advanced deep learning models.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop",
      level: "Intermediate",
      duration: "10 Weeks",
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      description: "Build a strong foundation in ML algorithms, feature engineering, and model evaluation.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2000&auto=format&fit=crop",
      level: "Beginner",
      duration: "8 Weeks",
    },
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
          Our <span className="text-blue-600">Courses</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Comprehensive AI courses taught by industry experts with real-world applications and hands-on projects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 flex justify-between items-center">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-2 text-lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

import React, { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

const modules = [
  {
    title: "The Software Application Life Cycle",
    description: "Learn how software is planned, developed, and maintained.",
    topics: ["Requirements Gathering", "Design & Architecture", "Development", "Testing", "Deployment"],
  },
  {
    title: "Data Fundamentals",
    description: "Understand the basics of working with data.",
    topics: ["What is Data", "Types of Data", "Data Storage", "Data Analysis", "Data Engineering", "Data Science"],
  },
  {
    title: "Python Programming Basics",
    description: "Learn Python syntax, variables, and logic building.",
    topics: ["Variables & Data Types", "Control Flow", "Functions", "Loops", "Error Handling"],
  },
  {
    title: "Introduction to AI",
    description: "Explore foundational concepts of artificial intelligence.",
    topics: ["What is AI?", "Machine Learning Basics", "AI in Daily Life", "Ethics of AI"],
  },
];

const Curriculum: React.FC = () => {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(null);
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});

  const toggleModule = (index: number) => {
    setOpenModuleIndex(index === openModuleIndex ? null : index);
  };

  const toggleTopicCompletion = (topic: string) => {
    setCompletedTopics((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };

  return (
    <section className="p-8 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        Python Course Curriculum
      </h1>
      <p className="text-center text-gray-600 mt-3 text-lg">
        It Stretches Your Mind, Think Better And Create Even Better.
      </p>
      <div className="mt-8 bg-blue-600 text-white text-center py-3 rounded-lg shadow-lg transform transition hover:scale-105">
        Fundamentals of IT & AI
      </div>

      <div className="mt-8 space-y-6">
        {modules.map((module, idx) => {
          const isOpen = openModuleIndex === idx;

          return (
            <div
              key={idx}
              className="border rounded-xl bg-white shadow-md p-6 transition-transform transform hover:scale-105"
            >
              <div
                onClick={() => toggleModule(idx)}
                className="cursor-pointer flex justify-between items-center"
              >
                <div className="flex flex-col">
                  <span className="text-sm bg-gray-200 text-gray-700 font-medium px-3 py-1 rounded-full w-max mb-1">
                    Module {idx + 1}
                  </span>
                  <h3 className="font-semibold text-xl text-gray-800">
                    {module.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{module.description}</p>
                </div>
                <span className="text-purple-600 text-2xl transition-transform">
                  {isOpen ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
                </span>
              </div>

              {isOpen && (
                <ul className="mt-4 space-y-3 pl-4 list-disc text-gray-700">
                  {module.topics.map((topic, topicIdx) => (
                    <li
                      key={topicIdx}
                      className="text-sm font-medium flex items-center gap-2 cursor-pointer transition hover:text-blue-600"
                      onClick={() => toggleTopicCompletion(topic)}
                    >
                      <span
                        className={`${
                          completedTopics[topic] ? "text-green-500" : "text-gray-400"
                        }`}
                      >
                        <CheckCircle size={18} />
                      </span>
                      {topic}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Curriculum;

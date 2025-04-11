import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlacementAssistance = () => {
  return (
    <section className="px-4 md:px-16 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Placement Assistance</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="border border-blue-500 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold mb-4">Comprehensive Job Assistance</h3>
          <div className="h-1 w-20 bg-blue-500 mb-6 rounded"></div>
          <ul className="space-y-3 text-gray-700 text-sm">
            <ListItem text="Mastering the course" />
            <ListItem text="Hackathons and Mock-Interviews with SMEs" />
            <ListItem text="Quizzes and Assignments" />
            <ListItem text="Portfolio Building with SMEs Assistance" />
            <ListItem text="Resume Review" />
          </ul>
        </div>

        {/* Right Card */}
        <div className="border border-blue-500 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold mb-4">Job Support Program</h3>
          <div className="h-1 w-20 bg-blue-500 mb-6 rounded"></div>
          <ul className="space-y-3 text-gray-700 text-sm mb-6">
            <ListItem text="2,00,000 career transition across the globe." />
            <ListItem text="Get Job support from our World-class trainers as per your needs by paying hourly, Weekly and Monthly." />
          </ul>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Get Job Support
          </Button>
        </div>
      </div>
    </section>
  );
};

const ListItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="text-blue-500 w-4 h-4 mt-1" />
    <span>{text}</span>
  </li>
);

export default PlacementAssistance;

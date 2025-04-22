import React from "react";

const Highlights: React.FC = () => (
  <section className="p-6 bg-gray-50 grid md:grid-cols-2 gap-6 items-center">
    <div>
      <h2 className="text-2xl font-bold mb-4">Python Training & Certification</h2>
      <ul className="list-none space-y-2">
        <li className="flex items-center">
          <span className="text-green-500 mr-2">●</span> Fundamentals of IT & AI
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">●</span> Basic Python
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">●</span> Advanced Python
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">●</span> Django Python framework
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">●</span> Python for Data Science
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">●</span> Cloud & DevOps For Python
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">●</span> Gen AI & AI Agents
        </li>
      </ul>
      <ul className="list-none mt-6 space-y-2">
        <li className="flex items-center">
          <span className="text-blue-500 mr-2">✔</span> Online & ClassRoom Real-Time training
        </li>
        <li className="flex items-center">
          <span className="text-blue-500 mr-2">✔</span> Project & Task Based Learning
        </li>
        <li className="flex items-center">
          <span className="text-blue-500 mr-2">✔</span> 24/7 Learning Support with Dedicated Mentors
        </li>
        <li className="flex items-center">
          <span className="text-blue-500 mr-2">✔</span> Interviews, Jobs and Placement Support
        </li>
      </ul>
      <div className="mt-6 flex items-center space-x-4">
        <div className="text-lg font-bold">
          <span>50000+</span> <span className="text-gray-500">Students Enrolled</span>
        </div>
        <div className="text-lg font-bold">
          <span>4.7</span> <span className="text-yellow-500">★</span> <span className="text-gray-500">(500 Ratings)</span>
        </div>
        <div className="text-lg font-bold">
          <span>60 Days</span> <span className="text-gray-500">Duration</span>
        </div>
      </div>
      <div className="mt-6 flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Schedule Online Demo</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Contact Course Adviser</button>
      </div>
    </div>
    <img
        src="https://www.digitaledify.ai/images/pythonbanr.webp"
        alt="Python Training"
        title="Python Training"
        width="600"
        height="608"
        className="imgwh max-w-full h-auto"
        loading="lazy"
      />
  </section>
);

export default Highlights;

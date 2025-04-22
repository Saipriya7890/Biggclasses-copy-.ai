import React from "react";

const CourseOverview: React.FC = () => (
  <section className="grid md:grid-cols-3 gap-8 p-8 bg-gradient-to-b from-gray-50 to-gray-100">
    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition hover:scale-105 hover:shadow-2xl">
      <h2 className="text-4xl font-extrabold text-blue-600">₹ 8 LPA</h2>
      <p className="text-gray-600 text-lg mt-3">Average Package</p>
      <p className="text-2xl font-bold mt-5">44% Average Hike</p>
      <p className="text-gray-500 text-sm mt-3">3000+ Successful Transitions</p>
    </div>
    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition hover:scale-105 hover:shadow-2xl">
      <h3 className="text-2xl font-bold mb-6">Annual Salary Insights</h3>
      <div className="flex justify-center items-end space-x-6">
        <div className="text-center">
          <div className="bg-blue-300 h-16 w-10 mx-auto rounded"></div>
          <p className="text-sm mt-3">Min (7L)</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-600 h-28 w-10 mx-auto rounded"></div>
          <p className="text-sm mt-3">Avg (16L)</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-300 h-24 w-10 mx-auto rounded"></div>
          <p className="text-sm mt-3">Max (30L)</p>
        </div>
      </div>
    </div>
    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition hover:scale-105 hover:shadow-2xl">
      <h2 className="text-4xl font-extrabold text-red-500">87%</h2>
      <p className="text-gray-600 text-lg mt-3">
        Managers prioritize Python Training
      </p>
    </div>
  </section>
);

export default CourseOverview;

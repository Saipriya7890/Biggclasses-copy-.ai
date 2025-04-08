
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    id: 1,
    value: "250+",
    label: "Clients Served",
    description: "Trusted by businesses globally"
  },
  {
    id: 2,
    value: "15+",
    label: "Years Experience",
    description: "Industry expertise and knowledge"
  },
  {
    id: 3,
    value: "30+",
    label: "Countries",
    description: "Global reach and impact"
  },
  {
    id: 4,
    value: "100%",
    label: "Client Satisfaction",
    description: "Committed to your success"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.id} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{stat.value}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

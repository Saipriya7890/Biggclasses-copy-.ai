
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for beginners to explore AI learning",
    features: [
      "Access to 5 free courses",
      "Basic AI tutor assistance",
      "Limited progress tracking",
      "Community forum access"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$29/month",
    description: "Ideal for serious learners and professionals",
    features: [
      "Unlimited access to all courses",
      "Advanced AI tutoring with personalization",
      "Comprehensive progress analytics",
      "1-on-1 virtual lab sessions",
      "Course completion certificates",
      "Priority support"
    ],
    cta: "Start Pro Trial",
    popular: true
  },
  {
    name: "Teams",
    price: "$99/month",
    description: "For organizations and learning groups",
    features: [
      "Everything in Pro plan",
      "Up to 10 team members",
      "Team progress dashboard",
      "Custom learning paths",
      "Admin controls and analytics",
      "Dedicated account manager"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Simple, transparent <span className="gradient-text">pricing</span></h2>
          <p className="text-lg text-gray-600">
            Choose the plan that best fits your learning needs.
            All plans include access to our cutting-edge AI learning platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border ${plan.popular ? 'border-primary shadow-lg relative' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="pt-8 pb-4">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2 pb-8">
                <Button 
                  className={`w-full ${plan.popular ? '' : 'bg-gray-800 hover:bg-gray-900'}`} 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

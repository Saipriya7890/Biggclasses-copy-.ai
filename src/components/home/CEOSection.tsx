
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon, Twitter, Mail } from "lucide-react";

const CEOSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-6">Leadership</h2>
          <p className="text-lg text-gray-600">
            Meet the visionary behind BiGeBrains, driving innovation and excellence
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden border-none shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop" 
                alt="CEO of BiGeBrains" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-1">Dr. Michael Reynolds</h3>
                <p className="text-primary font-medium mb-4">Founder & Chief Executive Officer</p>
                <p className="text-gray-600 mb-6">
                  With over 20 years of experience in AI and enterprise solutions, Dr. Reynolds has led BiGeBrains 
                  from a startup to a global technology leader. His vision of leveraging artificial intelligence 
                  to solve complex business challenges has transformed how enterprises approach digital transformation.
                </p>
                <p className="text-gray-600 mb-6">
                  Prior to founding BiGeBrains, he served as CTO at TechVision Global and held research positions 
                  at MIT and Stanford in advanced machine learning technologies.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="mailto:michael.reynolds@bigebrains.com" className="text-gray-500 hover:text-primary">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CEOSection;

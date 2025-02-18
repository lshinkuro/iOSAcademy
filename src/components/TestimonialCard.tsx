import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  image,
  testimonial,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      {/* <Quote className="h-8 w-8 text-indigo-600 mb-4" /> */}
      <p className="text-gray-600 mb-6">{testimonial}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role} at {company}</p>
        </div>
      </div>
    </div>
  );
};
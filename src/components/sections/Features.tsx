import React from 'react';
import { GraduationCap, Clock, Users, Trophy, Code2, Laptop, BookOpen, Briefcase } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Mentors',
    description: 'Learn from industry professionals with years of iOS development experience'
  },
  {
    icon: Code2,
    title: 'Modern Curriculum',
    description: 'Stay updated with the latest iOS technologies and development practices'
  },
  {
    icon: Laptop,
    title: 'Hands-on Projects',
    description: 'Build real iOS apps that showcase your skills to potential employers'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Learning',
    description: 'From Swift basics to advanced iOS frameworks and architectures'
  },
  {
    icon: Users,
    title: 'Small Classes',
    description: 'Personalized attention with maximum 15 students per batch'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Choose between full-time and part-time learning options'
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    description: 'Resume building, interview prep, and job placement assistance'
  },
  {
    icon: Trophy,
    title: 'Industry Recognition',
    description: 'Get certified and join our network of successful developers'
  }
];

export const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 lg:text-5xl">
            Why Choose Our Bootcamp?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Comprehensive learning experience designed for your success in iOS development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 rounded-lg p-3 w-12 h-12 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
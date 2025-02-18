import React from 'react';
import { Building2 } from 'lucide-react';
import { useBootcampStore } from '../../store/bootcampStore';

export const About = () => {
  const { partners } = useBootcampStore();

  return (
    <div id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">About iOS Academy</h2>
          <p className="mt-4 text-xl text-gray-600">Building the next generation of iOS developers</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-0">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At iOS Academy, we're committed to transforming aspiring developers into professional iOS engineers. Our comprehensive curriculum is designed by industry experts and constantly updated to reflect the latest technologies and best practices in iOS development.
            </p>
            <p className="text-gray-600">
              With a focus on practical skills and real-world projects, we ensure our graduates are job-ready and equipped with the knowledge and experience demanded by top tech companies.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
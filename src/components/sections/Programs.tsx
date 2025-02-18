import React from 'react';
import { ProgramCard } from '../ProgramCard';
import { useBootcampStore } from '../../store/bootcampStore';

export const Programs = () => {
  const { programs } = useBootcampStore();

  return (
    <div id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Programs</h2>
          <p className="mt-4 text-xl text-gray-600">Choose the program that fits your schedule</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
};
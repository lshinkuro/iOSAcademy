import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Code2, Database, Layout, Smartphone, Terminal } from 'lucide-react';
import { useBootcampStore } from '../store/bootcampStore';

export const Materials = () => {
  const navigate = useNavigate();
  const { materials } = useBootcampStore();
  console.log(materials)

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Course Materials</h1>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive iOS development curriculum designed by industry experts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((material) => (
            <div
              key={material.ID}
              onClick={() => navigate(`/materials/${material.ID}`)}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all hover:scale-105"
            >
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                {material.icon === 'smartphone' && <Smartphone className="h-8 w-8 text-indigo-600" />}
                {material.icon === 'code' && <Code2 className="h-8 w-8 text-indigo-600" />}
                {material.icon === 'layout' && <Layout className="h-8 w-8 text-indigo-600" />}
                {material.icon === 'database' && <Database className="h-8 w-8 text-indigo-600" />}
                {material.icon === 'terminal' && <Terminal className="h-8 w-8 text-indigo-600" />}
                {material.icon === 'book' && <Book className="h-8 w-8 text-indigo-600" />}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{material.title}</h3>
              <p className="text-gray-600 mb-4">{material.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-indigo-600 font-semibold">
                  {material.duration} hours
                </span>
                <span className="text-gray-500">
                  {material.lessons} lessons
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useBootcampStore } from '../../store/bootcampStore';

interface ProgramCardProps {
  id: string;
  title: string;
  type: 'regular' | 'parttime';
  duration: string;
  price: number;
  features: string[];
}

export const ProgramCard: React.FC<ProgramCardProps> = (props) => {
  const { setSelectedProgram } = useBootcampStore();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <div className={`p-6 ${props.type === 'regular' ? 'bg-indigo-600' : 'bg-purple-600'}`}>
        <h3 className="text-xl font-bold text-white">{props.title}</h3>
        <p className="text-indigo-100 mt-1">{props.duration}</p>
      </div>
      <div className="p-6">
        <p className="text-3xl font-bold text-gray-900">
          Rp {props.price.toLocaleString('id-ID')}
        </p>
        <ul className="mt-6 space-y-4">
          {props.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setSelectedProgram(props)}
          className={`mt-8 w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors
            ${props.type === 'regular' 
              ? 'bg-indigo-600 hover:bg-indigo-700' 
              : 'bg-purple-600 hover:bg-purple-700'
            }`}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};
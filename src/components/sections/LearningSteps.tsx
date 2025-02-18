import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    title: "Selesaikan Materi Entry to iOS Academy",
    description: "Agar kami mengetahui minat dan bakatmu!",
    icon: "✅",
  },
  {
    title: "Planning Belajar sampai dengan 400 Jam",
    description: "Ketahui kemampuan belajarmu dalam sehari untuk hasil yang lebih maksimal",
    icon: "📅",
  },
  {
    title: "Zoom Assessment Bersama Mentor",
    description: "Zoom bersama Mentor Expert yang akan membimbing karir iOS Developermu",
    icon: "🎥",
  },
  {
    title: "Masuk ke Discord iOS Academy",
    description: "Bergabung ke Channel Discord untuk mendapatkan update dari materi yang kamu pilih",
    icon: "🎮",
  },
  {
    title: "Pilih Kelas yang Bersosialisasi",
    description: "Masuk ke kelas dan mulai bersosialisasi dengan teman baru!",
    icon: "📝",
  },
];

const LearningSteps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevStep = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const nextStep = () => {
    setCurrentIndex((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="w-full flex flex-col items-center bg-white py-20 py-10 px-4">
      <h2 className="text-teal-700 text-sm font-semibold">CARA BELAJAR</h2>
      <h1 className="text-3xl font-bold mt-2">Alur Belajar Program iOS Academy</h1>
      <div className="relative flex items-center w-full max-w-5xl mt-8">
        <button
          onClick={prevStep}
          className="absolute left-0 bg-gray-300 p-2 rounded-full shadow-md"
        >
        <ChevronLeft size={20} />
        </button>
        <div className="flex space-x-4 px-10 w-full justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`min-w-[250px] p-4 rounded-lg shadow-lg transition-all duration-300 ${
                index === currentIndex ? "bg-indigo-600 text-white" : "bg-white"
              }`}
            >
              <div className="text-3xl mb-2">{step.icon}</div>
              <h3 className="font-bold text-lg">{step.title}</h3>
              <p className="text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={nextStep}
          className="absolute right-0 bg-gray-300 p-2 rounded-full shadow-md"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="flex items-center mt-6 space-x-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LearningSteps;

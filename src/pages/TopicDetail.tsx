import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, CheckCircle2 } from 'lucide-react';

export const TopicDetail = () => {
  const { id, topic } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { sectionTitle, material } = location.state || {};

  const decodedTopic = decodeURIComponent(topic || '');

  if (!material || !sectionTitle) {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Topic not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(`/materials/${id}`)}
          className="flex items-center text-indigo-600 hover:text-indigo-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to {material.title}
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-indigo-600 p-8">
            <div className="text-indigo-100 mb-4">{sectionTitle}</div>
            <h1 className="text-3xl font-bold text-white">{decodedTopic}</h1>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-600">45 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-600">Reading material</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-600">Hands-on practice</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2>Overview</h2>
              <p>
                This lesson covers the fundamental concepts and practical applications of {decodedTopic}. 
                You'll learn through a combination of theoretical explanations and hands-on exercises.
              </p>

              <h2>Key Concepts</h2>
              <ul>
                <li>Understanding the basics of {decodedTopic}</li>
                <li>Common use cases and best practices</li>
                <li>Implementation techniques and patterns</li>
                <li>Performance considerations and optimization</li>
              </ul>

              <h2>Hands-on Practice</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Exercise: Hello World</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{`// Your first Swift program
print("Hello, World!")

// Variables and constants
var greeting = "Hello"
let name = "iOS Developer"
print("\\(greeting), \\(name)!")`}</code>
                </pre>
              </div>

              <h2>Additional Resources</h2>
              <ul>
                <li>Apple's Official Swift Documentation</li>
                <li>Swift Programming Language Guide</li>
                <li>iOS Developer Documentation</li>
              </ul>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                Previous Topic
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Next Topic
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
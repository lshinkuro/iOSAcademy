import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, Clock, BookOpen, ChevronRight, Play, BookOpen as BookOpenIcon, Video } from 'lucide-react';
import { useBootcampStore } from '../store/bootcampStore';

export const MaterialDetail = () => {
  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();
  const { getMaterialById } = useBootcampStore();
  const material = getMaterialById(id || '');
  const [activeTab, setActiveTab] = useState<'content' | 'videos'>('content');

  if (!material) {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Material not found</h1>
        </div>
      </div>
    );
  }

  const handleTopicClick = (sectionTitle: string, topic: string) => {
    navigate(`/materials/${id}/topics/${encodeURIComponent(topic)}`, {
      state: { sectionTitle, material }
    });
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-indigo-600 p-8">
            <h1 className="text-3xl font-bold text-white mb-4">{material.title}</h1>
            <p className="text-indigo-100 text-lg">{material.description}</p>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-600">{material.duration} hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-600">{material.lessons} lessons</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-600">Certificate included</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What you'll learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {material.learningPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('content')}
                  className={`${
                    activeTab === 'content'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  <BookOpenIcon className="h-5 w-5 mr-2" />
                  Course Content
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`${
                    activeTab === 'videos'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  <Video className="h-5 w-5 mr-2" />
                  Video Courses
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'content' ? (
              <div className="space-y-4">
                {material.content.map((section, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <h3 className="font-semibold text-gray-900 p-4 bg-gray-50">
                      {section.title}
                    </h3>
                    <ul className="divide-y">
                      {section.topics.map((topic, topicIndex) => (
                        <li 
                          key={topicIndex}
                          onClick={() => handleTopicClick(section.title, topic)}
                          className="p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center">
                            <div className="w-4 h-4 rounded-full bg-indigo-100 mr-3 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                            </div>
                            <span className="text-gray-600">{topic}</span>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {material.videoCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={`https://www.youtube.com/embed/${course.youtubeId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                          {course.level}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Play className="h-4 w-4 mr-1" />
                          {course.instructor}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code2, Sparkles, ArrowRight } from 'lucide-react';

const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    title: "Begin Your Journey as an iOS Developer",
    subtitle: "Master the art of iOS development with our comprehensive bootcamp programs",
    highlight: "Join 1000+ successful graduates"
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    title: "Learn from Industry Experts",
    subtitle: "Get mentored by experienced iOS developers from top tech companies",
    highlight: "Expert-led curriculum"
  },
  {
    image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    title: "Build Real-World Projects",
    subtitle: "Create production-ready iOS applications and build your portfolio",
    highlight: "Hands-on experience"
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 min-h-[700px] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
           ref={slideRef}>
        {carouselItems.map((item, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover opacity-10"
              />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="w-full md:w-3/4 lg:w-2/3">
                <div className="flex items-center space-x-2 mb-6">
                  <Code2 className="h-6 w-6 text-indigo-400" />
                  <span className="text-indigo-400 font-medium">{item.highlight}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {item.title}
                </h1>
                <p className="text-xl text-indigo-100 mb-8 max-w-2xl leading-relaxed">
                  {item.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#programs"
                    className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors group"
                  >
                    Explore Programs
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center bg-indigo-700/50 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700/60 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/90 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-indigo-200">Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">95%</div>
              <div className="text-indigo-200">Employment Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-indigo-200">Industry Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-indigo-200">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
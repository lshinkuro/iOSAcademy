import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Programs } from '../components/sections/Programs';
import { About } from '../components/sections/About';
import { Testimonials } from '../components/sections/Testimonials';
import LearningSteps from '../components/sections/LearningSteps';
import EventSection from '../components/sections/EventSections';
import HiringPartners from '../components/sections/HiringPartners';

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Programs />
      <Testimonials />
      <LearningSteps />
      <EventSection />
      <About />
      <HiringPartners/>
    </>
  );
};
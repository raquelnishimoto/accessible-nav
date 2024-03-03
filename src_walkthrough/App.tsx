import './App.scss';
import { AboutSection } from './AboutSection';
import React from 'react';
import { ContactSection } from './ContactSection';
import { WorkAndExperienceSection } from './WorkAndExperienceSection';
import { AppNavBar } from './AppNavBar';

export const App = () => {
  return (
    <>
      <AppNavBar />
      <AboutSection />
      <hr />
      <WorkAndExperienceSection />
      <hr />
      <ContactSection />
    </>
  );
};

import { AboutSection } from './AboutSection';
import './App.scss';
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

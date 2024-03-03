import './App.scss';

import { AboutSection } from './AboutSection';
import React, { useRef } from 'react';
import { ContactSection } from './ContactSection';
import { WorkAndExperienceSection } from './WorkAndExperienceSection';
import { AppNavBar } from './AppNavBar';

export const App = () => {
  const sectionRefs = useRef<(HTMLElement|null)[]>([]);

  return (
    <>
      <AppNavBar refs={sectionRefs}/>
      <AboutSection refs={(ref) => sectionRefs.current.push(ref)}/>
      <hr />
      <WorkAndExperienceSection refs={(ref) => sectionRefs.current.push(ref)}/>
      <hr />
      <ContactSection refs={(ref) => sectionRefs.current.push(ref)}/>
    </>
  );
};

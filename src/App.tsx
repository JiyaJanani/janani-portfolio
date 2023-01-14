import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './NavBar';
import ProfileImageSection from './components/ProfileImageSection/ProfileImageSection';
import IntroSection from './components/IntroSection/IntroSection';
import MyTechStack from './components/MyTechStack/MyTechStack';
import ProjectSection from './components/ProjectSection/ProjectSection';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <ProfileImageSection />
        <IntroSection />
        <MyTechStack />
        <ProjectSection />
      </header>
    </div>
  );
}

export default App;

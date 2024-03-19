import React from "react";
import "./App.css";
import ProfileImageSection from "./components/ProfileImageSection/ProfileImageSection";
import IntroSection from "./components/IntroSection/IntroSection";
import MyTechStack from "./components/MyTechStack/MyTechStack";
import ProjectSection from "./components/ProjectSection/ProjectSection";

function App() {
  return (
    <div className="App">
      <div className='nameWrapper'>
        <div className="name">Janani</div>
        <div className="name">Senrayaperumal</div>
      </div>

      <ProfileImageSection />
      <IntroSection />
      <MyTechStack />
      <ProjectSection />
    </div>
  );
}

export default App;

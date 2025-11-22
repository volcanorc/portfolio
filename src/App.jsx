import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

import Introduction from "./pages/Introduction.jsx";
import TechStack from "./pages/TechStack.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import GraphicDesignSection from "./components/GraphicDesignSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <main>
        <Introduction />
        <TechStack />
        <ProjectsSection />
        <GraphicDesignSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;

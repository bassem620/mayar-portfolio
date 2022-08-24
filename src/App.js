import NavBar from "./components/NavBar";
import Home from "./sections/Home";
// import Activities from "./sections/Activities";
import Contact from "./sections/Contact";
import activeMenu from './activeMenu';
import Clients from "./sections/Clients";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener('scroll', activeMenu);
  },[])

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
      {/* <Activities /> */}
      <Clients />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

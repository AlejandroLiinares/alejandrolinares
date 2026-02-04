import './styles/global.css';

import HeroHome from './components/home/HeroHome';
import ThemeToggle from './components/common/ThemeToggle/ThemeToggle';
import LanguajeToggle from './components/common/LenguageToggle/LenguageToggle';
import ProjectSection from './components/projects/ProjectSection';
import AboutMe from './components/aboutme/AboutMe';
import CallToAction from './components/calltoaction/CallToAction';

function App() {
  return (
    <>
      <ThemeToggle />
      <LanguajeToggle />
      <HeroHome />
      <ProjectSection />
      <AboutMe />
      <CallToAction />
    </>
  );
}

export default App;

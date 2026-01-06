import './styles/global.css'; 
import HeroHome from './components/home/HeroHome';
import ThemeToggle from './components/common/ThemeToggle/ThemeToggle';
import LanguajeToggle from './components/common/LenguageToggle/LenguageToggle';
import IntroSection from './components/intro/IntroSection';
import ProjectSection from './components/projects/ProjectSection';

function App() {
  return (
    <div className="app-layout">
        <ThemeToggle />
        <LanguajeToggle />
        <HeroHome /> 
        <IntroSection />
        <ProjectSection />
    </div>
  );
}

export default App;
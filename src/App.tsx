import './styles/global.css'; 
import Layout from './components/layout/Layout';
import HeroHome from './components/home/HeroHome';
import ThemeToggle from './components/common/ThemeToggle/ThemeToggle';
import LanguajeToggle from './components/common/LenguageToggle/LenguageToggle';
import ProjectSection from './components/projects/ProjectSection';

function App() {
  return (
    <Layout>
        <ThemeToggle />
        <LanguajeToggle />
        <HeroHome /> 
        <ProjectSection />
    </Layout>
  );
}

export default App;
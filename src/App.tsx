import './styles/global.css'; 
import HeroHome from './components/home/HeroHome';
import ThemeToggle from './components/common/ThemeToggle/ThemeToggle';
import LanguajeToggle from './components/common/LenguageToggle/LenguageToggle';

function App() {
  return (
    <div className="app-layout">
        <ThemeToggle />
        <LanguajeToggle />
        <HeroHome /> 
    </div>
  );
}

export default App;
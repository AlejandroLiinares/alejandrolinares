import './styles/global.css'; 
import HeroHome from './components/home/HeroHome';
import ThemeToggle from './components/common/ThemeToggle/ThemeToggle';

function App() {
  return (
    <div className="app-layout">
        <ThemeToggle />
        <HeroHome /> 
    </div>
  );
}

export default App;
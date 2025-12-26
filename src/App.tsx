// src/App.tsx
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { theme } from './MyTheme'; // Ojo con la ruta (theme.ts o MyTheme.ts)
import { GlobalStyles } from './layout/GlobalStyles';
import Home from './components/home/Home';
import BentoGrid from './components/projects/BentoGrid'; // 1. Importamos el BentoGrid

// 2. Modificamos el contenedor principal
const MainLayout = styled.main`
  width: 100%;
  min-height: 100vh; /* Cambiamos height fijo por min-height */
  /* Quitamos overflow: hidden vertical, dejamos solo horizontal para evitar scroll lateral */
  overflow-x: hidden; 
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout>
        {/* Sección 1: Hero (Tu nombre y esfera) */}
        <Home /> 
        
        {/* Sección 2: Proyectos (El Bento Grid) */}
        <section id="proyectos" style={{ padding: '4rem 0' }}>
           <h2 style={{ textAlign: 'center', fontSize: '3rem', fontFamily: theme.typography.heading }}>Proyectos</h2>
           <BentoGrid />
        </section>

      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
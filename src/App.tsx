// src/App.tsx
import { ThemeProvider } from 'styled-components';
import { theme } from './MyTheme'; // Ojo con la ruta (theme.ts o MyTheme.ts)
import { GlobalStyles } from './layout/GlobalStyles';
import Home from './components/home/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Home /> 
    </ThemeProvider>
  );
}

export default App;
// src/App.tsx
import { ThemeProvider } from 'styled-components';
import { theme } from './MyTheme';
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
// src/theme.ts

// 1. Definición de la Interfaz para asegurar tipado estricto
export interface DefaultTheme {
  colors: {
    background: string;
    text: string;
    dark: string;
    primary: string; // Para CTAs y enlaces
    secondary: string; // Para un fondo sutil o hover
  };
  typography: {
    heading: string;
    body: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
    huge: string;
  };
  borderRadius: string;
  shadows: {
    light: string;
  };
}

// 2. Implementación del Tema (Estética Apple Minimalista)
export const theme: DefaultTheme = {
  colors: {
    background: '#FFFFFF', // Blanco puro
    text: '#111111',       // Negro profundo para legibilidad
    dark: '#000000',
    primary: '#0070F3',    // Azul de acento (si lo usas) o un gris muy oscuro
    secondary: '#F5F5F7',  // Gris muy sutil para fondos de secciones (como en Apple)
  },
  typography: {
    // Fuentes limpias y geométricas (deberás importarlas en index.html o GlobalStyles)
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  spacing: {
    small: '0.5rem',
    medium: '1.5rem',
    large: '3rem', // Espacios amplios (whitespace)
    huge: '6rem',  // Separación entre secciones
  },
  borderRadius: '8px',
  shadows: {
    // Sombra sutil, casi imperceptible
    light: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
};
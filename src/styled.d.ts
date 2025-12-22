// src/styled.d.ts

// Importa la interfaz de tu tema (asegúrate que la ruta sea correcta)
import 'styled-components';
import { DefaultTheme } from './theme'; 

// Declara que el DefaultTheme de Styled Components es tu interfaz
declare module 'styled-components' {
  export interface DefaultTheme extends DefaultTheme {}
}
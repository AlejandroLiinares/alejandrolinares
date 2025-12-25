import 'styled-components';
import { MyTheme } from './MyTheme'; 

// Declara que el DefaultTheme de Styled Components es tu interfaz
declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}
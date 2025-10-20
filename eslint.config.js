// eslint.config.js
// **********************************************
// IMPORTACIONES NECESARIAS
// **********************************************
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin'; // <--- CORREGIDO: Usaremos el plugin directamente
import { defineConfig, globalIgnores } from 'eslint-define-config'; // <--- CORREGIDO: Usar 'eslint-define-config'

// IMPORTACIONES DE LOS PLUGINS INSTALADOS
import reactX from 'eslint-plugin-react-x';     // <--- AÑADIDO: Para reglas modernas de React
import reactDom from 'eslint-plugin-react-dom'; // <--- AÑADIDO: Para reglas específicas de React DOM
import parser from '@typescript-eslint/parser'; // <--- AÑADIDO: Necesitas el parser para las reglas TypeChecked

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],
    
    // 1. Configuración de Lenguaje/Parser para TypeChecking
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module', // Asegura el uso de 'import/export'
      globals: globals.browser,
      
      // CONFIGURACIÓN CLAVE PARA TYPESCRIPT
      parser: parser, // Usa el parser de TS
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },

    // 2. Extiende con las Reglas más Estrictas
    extends: [
      js.configs.recommended,
      
      // CAMBIAMOS: TSLINT.CONFIGS.RECOMMENDED por la TypeChecked estricta
      tseslint.configs.strictTypeChecked, // <--- CAMBIO CLAVE: Activamos la estricta validación de tipos
      
      // PLUGINS DE REACT
      reactHooks.configs['recommended-latest'], // Mantienes tus hooks
      reactRefresh.configs.vite,                // Mantienes el Fast Refresh
      
      // AÑADIDOS: Reglas React profesionales
      reactX.configs['recommended-typescript'], 
      reactDom.configs.recommended,
    ],
    
    // 3. Añade los plugins al array
    plugins: {
        '@typescript-eslint': tseslint,
        'react-x': reactX,
        'react-dom': reactDom,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh
    }
  },
]);
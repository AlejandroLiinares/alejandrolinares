import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

import sunIcon from '../../../assets/sun.svg';
import moonIcon from '../../../assets/moon.svg';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button 
      className={`${styles.toggleButton} ${theme === 'dark' ? styles.dark : styles.light}`}
      onClick={toggleTheme}
      aria-label="Cambiar tema de color"
    >
      {/* Texto fijo que cambia de lado */}
      <span className={styles.label}>
        {theme === 'light' ? 'Light' : 'Sleep'}
      </span>

      {/* Círculo de cristal gigante */}
      <div className={styles.slider}>
        <img 
          src={theme === 'light' ? sunIcon : moonIcon} 
          alt={theme === 'light' ? 'Sun' : 'Moon'} 
          className={styles.icon}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
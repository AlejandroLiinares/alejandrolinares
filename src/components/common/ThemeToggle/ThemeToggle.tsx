import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

import sunIcon from '../../../assets/sun.svg';
import moonIcon from '../../../assets/moon.svg';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  return (
    <button
      className={`${styles.toggleWrapper} ${isDark ? styles.dark : styles.light}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      aria-pressed={isDark}
    >
      {/* Fondo píldora */}
      <div className={styles.pillBase} />

      {/* Label: "Dark" o "Light" */}
      <span className={styles.label} aria-hidden="true">
        {isDark ? 'Día' : 'Noche'}
      </span>

      {/* Burbuja de cristal */}
      <div className={styles.slider}>
        <img
          src={isDark ? moonIcon : sunIcon}
          alt=""
          className={styles.icon}
          aria-hidden="true"
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
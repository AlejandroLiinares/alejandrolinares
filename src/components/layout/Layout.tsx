import React from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.globalWrapper}>
      {/* Aquí dejaré mi header en el futuro */}
      <main className={styles.mainContent}>
        {children}
      </main>
      {/* Y aquí el footer */}
    </div>
  );
};

export default Layout;
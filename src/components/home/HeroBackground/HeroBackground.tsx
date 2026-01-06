// src/components/home/HeroBackground/HeroBackground.tsx
import { motion } from 'framer-motion';
import styles from './HeroBackground.module.css';

const HeroBackground = () => {
  return (
    <div className={styles.container}>
      {/* Blob 1: Izquierda - Movimiento amplio circular */}
      <motion.div 
        className={`${styles.blob} ${styles.blob1}`}
        animate={{
          x: [-50, 150, -50],    // Mucho más recorrido lateral
          y: [-50, 100, -50],    // Mucho más recorrido vertical
          scale: [1, 1.4, 1],    // Cambia mucho de tamaño
          rotate: [0, 45, 0]     // Gira un poco
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 2: Derecha - Barrido vertical profundo */}
      <motion.div 
        className={`${styles.blob} ${styles.blob2}`}
        animate={{
          scale: [1, 0.8, 1],
          rotate: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Recorre desde la derecha profunda hasta la izquierda y vuelve */}
      <motion.div 
        className={`${styles.blob} ${styles.blob4}`}
        animate={{
          x: ["0vw", "-105vw", "0vw"], 
          y: [0, -30, 0],       // Curva vertical más sutil para que no "baile" tanto
          scale: [0.9, 1.2, 0.9], 
          opacity: [0.7, 1, 0.7] 
        }}
        transition={{ 
          duration: 10, // Mucho más rápido (antes 28)
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </div>
  );
};

export default HeroBackground;
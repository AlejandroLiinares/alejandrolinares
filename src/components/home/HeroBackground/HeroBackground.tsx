// src/components/home/HeroBackground/HeroBackground.tsx
import { motion } from 'framer-motion';
import styles from './HeroBackground.module.css';

const HeroBackground = () => {
  return (
    <div className={styles.container}>
      {/* --- GRUPO 1: Figuras Grandes (Base) --- */}
      
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
          x: [50, -50, 50],
          y: [-100, 100, -100],  // Sube y baja drásticamente
          scale: [1, 0.8, 1],
          rotate: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 3: Centro - Latido fuerte */}
      <motion.div 
        className={`${styles.blob} ${styles.blob3}`}
        animate={{
          scale: [0.8, 1.6, 0.8], // Se hace gigante y pequeño
          opacity: [0.4, 0.8, 0.4],
          x: [0, 60, -60, 0],     // Se mueve a los lados mientras late
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* --- GRUPO 2: Figuras Medianas (Energía) --- */}

      {/* Blob 4: Diagonal rápida */}
      <motion.div 
        className={`${styles.blob} ${styles.blob4}`}
        animate={{
          x: [-100, 100, -100],
          y: [80, -80, 80],
          rotate: [0, 180, 360], // Vuelta completa
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Blob 5: Barrido Horizontal */}
      <motion.div 
        className={`${styles.blob} ${styles.blob5}`}
        animate={{
          x: [100, -200, 100],   // Cruza casi toda la pantalla
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* --- GRUPO 3: Figuras Pequeñas (Caos) --- */}

      {/* Blob 6: El "nervioso" */}
      <motion.div 
        className={`${styles.blob} ${styles.blob6}`}
        animate={{
          x: [-50, 50, -20, 80, -50], // Trayectoria errática
          y: [20, -50, 40, -20, 20],
          scale: [1, 1.5, 0.5, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 7: Flotante esquina inferior */}
      <motion.div 
        className={`${styles.blob} ${styles.blob7}`}
        animate={{
          y: [0, -150, 0],      // Sube mucho
          x: [0, 50, 0],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 8: El satélite */}
      <motion.div 
        className={`${styles.blob} ${styles.blob8}`}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -80, -20, 0],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
      />

      {/* Recorre desde la derecha profunda hasta la izquierda y vuelve */}
      <motion.div 
        className={`${styles.blob} ${styles.blob9}`}
        animate={{
          x: [400, -1500, 400], // Viaje largo: De muy a la derecha a muy a la izquierda
          y: [0, -50, 0],       // Una curva sutil
          scale: [0.8, 1.2, 0.8], // Crece al pasar por el centro (protagonismo)
          opacity: [0.6, 0.9, 0.6] // Brilla más intensamente en el medio
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default HeroBackground;
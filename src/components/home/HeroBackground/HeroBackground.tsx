import { motion } from 'framer-motion';
import styles from './HeroBackground.module.css';

const HeroBackground = () => {
  return (
    <div className={styles.container}>
      {/* Mancha Izquierda */}
      <motion.div 
        className={styles.blobLeft}
        animate={{
          x: [-20, 40, -20],
          y: [0, 30, 0],
          // CAMBIO: De 0.08 a 0.4 para que se vea
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Mancha Derecha */}
      <motion.div 
        className={styles.blobRight}
        animate={{
          x: [20, -40, 20],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          // CAMBIO: De 0.05 a 0.4 para que se vea
          opacity: [0.3, 0.4, 0.3] 
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default HeroBackground;
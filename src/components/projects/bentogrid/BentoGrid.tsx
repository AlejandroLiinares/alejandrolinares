import { useState } from 'react';
import styles from './BentoGrid.module.css';

const projectsData = [
  {
    id: "sio",
    title: "SIO - Sistema Obstétrico",
    description: "Gestión clínica integral con enfoque en eficiencia médica.",
    type: "Fullstack / Software",
    // Aquí podrías definir sub-elementos para el bento de este proyecto específico
  },
  {
    id: "roraimax",
    title: "Roraimax - Elevate",
    description: "Rediseño de plataforma profesional con estética premium.",
    type: "Frontend / Design",
  },
  {
    id: "iwie",
    title: "Iwie Drones",
    description: "Soluciones tecnológicas para inspección y servicios aéreos.",
    type: "Professional Experience",
  },
  {
    id: "traumas",
    title: "Un Millón de Traumas",
    description: "Exploración visual y experiencia de usuario avanzada.",
    type: "In Construction",
  }
];

const BentoGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const currentProject = projectsData[currentIndex];

  return (
    <div className={styles.sliderWrapper}>
      {/* Botón Izquierdo */}
      <button className={styles.navButton} onClick={prevProject} aria-label="Anterior">
        ←
      </button>

      <div className={styles.gridContainer}>
        {/* Aquí renderizamos el "Bento" del proyecto actual */}
        <article className={`${styles.card} ${styles.large}`}>
          <div className={styles.cardContent}>
            {/* Espacio reservado para la imagen Desktop/Mobile */}
            <div className={styles.displayPreview}>
               <span className={styles.tag}>{currentProject.type}</span>
            </div>
            
            <div className={styles.textWrapper}>
              <h4 className={styles.cardTitle}>{currentProject.title}</h4>
              <p className={styles.cardDescription}>{currentProject.description}</p>
            </div>
          </div>
        </article>
      </div>

      {/* Botón Derecho */}
      <button className={styles.navButton} onClick={nextProject} aria-label="Siguiente">
        →
      </button>
    </div>
  );
};

export default BentoGrid;
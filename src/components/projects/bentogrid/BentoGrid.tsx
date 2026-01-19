import { useState } from "react";
import styles from "./BentoGrid.module.css";

const projectsData = [
  {
    id: "sio",
    title: "Obstetric Information System",
    description: "Gestión clínica integral con enfoque en eficiencia médica.",
    type: "Fullstack / Software",
  },
  {
    id: "roraimax",
    title: "Roraimax",
    description: "Rediseño de plataforma profesional con estética premium.",
    type: "Frontend / Design",
  },
  {
    id: "iwie",
    title: "Iwie Drones",
    description: "Soluciones tecnológicas para inspección aérea.",
    type: "Professional Experience",
  },
  {
    id: "traumas",
    title: "Un Millón de Traumas",
    description: "Narrativa visual y experiencia inmersiva.",
    type: "In Construction",
  },
];

const BentoGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  const currentProject = projectsData[currentIndex];

  return (
    <section className={styles.bentoSection}>
      <div className={styles.gridContainer} key={currentProject.id}>
        {/* Card grande */}
        <article className={`${styles.card} ${styles.large} ${styles.animate} ${styles.delay0}`}>
          <div className={styles.cardContent}>
            <div className={styles.displayPreview}>
              <span className={styles.tag}>{currentProject.type}</span>
            </div>

            <div className={styles.textWrapper}>
              <h4 className={styles.cardTitle}>{currentProject.title}</h4>
              <p className={styles.cardDescription}>{currentProject.description}</p>
            </div>
          </div>
        </article>

        {/* Cards secundarias */}
        <article className={`${styles.card} ${styles.medium} ${styles.animate} ${styles.delay1}`}>
          <h5>Offline-first</h5>
          <p>Funciona sin conexión, pensado para contextos clínicos reales.</p>
        </article>

        <article className={`${styles.card} ${styles.small} ${styles.animate} ${styles.delay2}`}>
          <h5>SQLite</h5>
          <p>Base de datos local altamente normalizada.</p>
        </article>

        <article className={`${styles.card} ${styles.medium} ${styles.speedCard} ${styles.animate} ${styles.delay1}`}>
          <span className={styles.eyebrow}>Up to</span>

          <div className={styles.speedValue}>
            4000<span>x</span>
          </div>

          <p className={styles.speedLabel}>
            Faster report generation
          </p>
        </article>
      </div>

      {/* Controles inferiores */}
      <div className={styles.controlsWrapper}>
        <button
          className={styles.controlButton}
          onClick={prevProject}
          aria-label="Anterior"
        >
          ‹
        </button>

        <div className={styles.pagination}>
          {projectsData.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.active : ""
              }`}
            />
          ))}
        </div>

        <button
          className={styles.controlButton}
          onClick={nextProject}
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default BentoGrid;

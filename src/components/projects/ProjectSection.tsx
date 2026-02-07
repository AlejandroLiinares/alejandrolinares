import styles from './ProjectSection.module.css';
import BentoGrid from './bentogrid/BentoGrid';

const ProjectSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2Title}>
        Solutions in Practice
      </h2>

      <BentoGrid />
    </section>
  );
};

export default ProjectSection;

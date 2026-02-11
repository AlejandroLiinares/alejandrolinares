import styles from './ProjectSection.module.css';
import ProjectsBento from './projectsbento/ProjectsBento';

const ProjectSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.h2Title}>
        Solutions in Practice
      </h2>

      <ProjectsBento />
    </section>
  );
};

export default ProjectSection;

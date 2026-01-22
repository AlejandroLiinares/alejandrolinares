import styles from './AboutMe.module.css';
import BentoGridMe from './bentogridme/BentoGridMe';

const AboutMe = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2Title}>Alejandro Linares</h2>
      <BentoGridMe />
    </section>
  );
};

export default AboutMe;
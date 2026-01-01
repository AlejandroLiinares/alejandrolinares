import styles from './HeroHome.module.css';

const HeroHome = () => {
  return (
    <section className={styles.section}>
      
      <h1 className={styles.title}>
        Alejandro Linares
      </h1>

      <p className={styles.description}>
        Crafting today's solutions for tomorrow's success. I guarantee perpetual growth 
        and refinement to ensure your impact remains enduring.
      </p>

    </section>
  );
};

export default HeroHome;
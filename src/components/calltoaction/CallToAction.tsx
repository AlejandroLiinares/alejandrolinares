import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2Title}> 
       <span className={styles.h2Cursive}> Contáctame</span>{' '}
       y construyamos soluciones de otro nivel, hoy.
      </h2>
    </section>
  );
};

export default CallToAction;
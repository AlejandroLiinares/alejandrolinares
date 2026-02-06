import styles from './HeroBackground.module.css';

const HeroBackground = () => {
  return (
    <div className={styles.heroBg}>
      <div className={styles.heroGradient} />
    </div>
  );
};

export default HeroBackground;

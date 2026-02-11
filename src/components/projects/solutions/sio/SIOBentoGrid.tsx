import styles from './SIOBentoGrid.module.css';

const SIOBentoGrid = () => {
  return (
    <div className={styles.sioGrid}>
      {/* Cada div representa una caja de tu boceto */}
      <div className={`${styles.card} ${styles.visualFriendly}`}></div>
      <div className={`${styles.card} ${styles.mainLaptop}`}></div>
      <div className={`${styles.card} ${styles.metricDays}`}></div>
      <div className={`${styles.card} ${styles.techStack}`}></div>
      <div className={`${styles.card} ${styles.featureRoles}`}></div>
      <div className={`${styles.card} ${styles.feature2FA}`}></div>
      <div className={`${styles.card} ${styles.metricSpeed}`}></div>
      <div className={`${styles.card} ${styles.themeToggle}`}></div>
      <div className={styles.offlinePill}></div>
    </div>
  );
};

export default SIOBentoGrid;
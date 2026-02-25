import styles from './UMDTBentoGrid.module.css';

import reactIcon from '../../../../assets/UMDT/react-logo.png';
import wordpressIcon  from '../../../../assets/RRMX/wordpress.svg';
import sureformsIcon  from '../../../../assets/RRMX/sureforms.png';
import laptopMockup   from '../../../../assets/RRMX/RRMX.png';
import mobileMockup   from '../../../../assets/RRMX/RRMX-mobile.png';
import arrowsReload   from '../../../../assets/RRMX/arrows-reload.svg';
import teamGridImg    from '../../../../assets/RRMX/team.png';
import rrmxLogo       from '../../../../assets/RRMX/rrmx-logo.png';
import circleGold     from '../../../../assets/RRMX/circle-gold.png';
import circleBlack    from '../../../../assets/RRMX/circle-black.png';
import montserratText from '../../../../assets/RRMX/montserrat.png';
import rrmxButton     from '../../../../assets/RRMX/rrmx-button.png';

// ── Tech stack ────────────────────────────────────────────
const techStack = [
  { name: 'React', icon: reactIcon, link: 'https://react.dev/' },
  { name: 'WordPress', icon: wordpressIcon, link: 'https://wordpress.org/' },
  { name: 'SureForms', icon: sureformsIcon, link: 'https://sureforms.com/' },
];

const UMDTBentoGrid = () => {
  return (
    <div className={styles.umdtGrid}>

      {/* ── 1. STACK TECNOLÓGICO ───────────────────────── */}
      <div className={`${styles.card} ${styles.cardTech} ${styles.animate} ${styles.delay1}`}>
        <span className={styles.cardLabel}>Stack tecnológico</span>
        <div className={styles.techGrid}>
          {techStack.map((tech) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.techItem}
              title={tech.name}
            >
              <img src={tech.icon} alt={tech.name} className={styles.techIcon} />
            </a>
          ))}
        </div>
      </div>

      {/* ── 3. HERO CENTRAL UNIFICADO ───────────────────── */}
      <div className={styles.heroCard}>
        <div className={styles.heroTitleWrapper}>
          <h3 className={styles.heroTitle}>Roraimax</h3>
          <span className={styles.gradientText}>Elevate Program</span>
        </div>

        <div className={styles.heroImages}>
          <img
            src={laptopMockup}
            alt="Laptop interface"
            className={styles.heroLaptop}
          />

          <img
            src={mobileMockup}
            alt="Mobile interface"
            className={styles.heroPhone}
          />

          <span className={styles.heroExperience}>
            Experiencia multiplataforma
          </span>
        </div>
      </div> 

      {/* ── 4. DIRECCIÓN VISUAL PREMIUM ────────────────── */}
      <div className={`${styles.card} ${styles.cardBranding} ${styles.animate} ${styles.delay1}`}>
        <span className={styles.cardLabel}>Dirección visual Premium</span>

        <div className={styles.brandingGrid}>
          <div className={styles.brandingTopRow}>
            <img src={rrmxLogo} alt="Logo" className={styles.brandingLogo} />
            <img src={montserratText} alt="Roraimax" className={styles.heroTextImg} />
          </div>

          <div className={styles.colorPalette}>
            <img src={circleGold} alt="Dorado" className={styles.colorCircle} />
            <img src={circleBlack} alt="Negro" className={styles.colorCircle} />
          </div>

          <img src={rrmxButton} alt="POSTULAR" className={styles.brandingButton} />
        </div>
      </div>

      {/* ── 5. DE NEGOCIO A DISEÑO ─────────────────────── */}
      <div className={`${styles.card} ${styles.cardReload} ${styles.animate} ${styles.delay2}`}>
        <img src={arrowsReload} alt="Reload" className={styles.reloadIcon} />
        <div className={styles.reloadText}>
          <span className={styles.reloadLabel}>De negocio a diseño.</span>
        </div>
      </div>

      {/* ── 6. LIDERAZGO Y MENTORÍA ────────────────────── */}
      <div className={`${styles.card} ${styles.cardMentorship} ${styles.animate} ${styles.delay2}`}>
        <span className={styles.cardLabel}>Liderazgo y mentoría</span>
        <img src={teamGridImg} alt="Equipo Roraimax" className={styles.teamImg} />
      </div>

    </div>
  );
};

export default UMDTBentoGrid;
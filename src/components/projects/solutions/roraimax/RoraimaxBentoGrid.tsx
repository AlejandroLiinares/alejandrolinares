import styles from './RoraimaxBentoGrid.module.css';

// ── Assets Roraimax ───────────────────────────────────────
import elementorIcon     from '../../../../assets/RRMX/elementor.svg';
import wordpressIcon     from '../../../../assets/RRMX/wordpress.svg';
import sureformsIcon     from '../../../../assets/RRMX/sureforms.png';
import laptopMockup      from '../../../../assets/RRMX/RRMX.png';
import mobileMockup      from '../../../../assets/RRMX/RRMX-mobile.png';
import arrowsReload      from '../../../../assets/RRMX/arrows-reload.svg';
import teamGridImg       from '../../../../assets/RRMX/team.png';
import rrmxLogo          from '../../../../assets/RRMX/rrmx-logo.png';
import circleGold        from '../../../../assets/RRMX/circle-gold.png';
import circleBlack       from '../../../../assets/RRMX/circle-black.png';
import montserratText    from '../../../../assets/RRMX/montserrat.png';
import rrmxButton        from '../../../../assets/RRMX/rrmx-button.png';

// ── Tech stack ────────────────────────────────────────────
const techStack = [
  { name: 'Elementor',  icon: elementorIcon, link: 'https://elementor.com/' },
  { name: 'WordPress',  icon: wordpressIcon, link: 'https://wordpress.org/' },
  { name: 'SureForms',  icon: sureformsIcon, link: 'https://sureforms.com/' },
];

const RoraimaxBentoGrid = () => {
  return (
    <div className={styles.roraimaxGrid}>

      {/* ── 1. STACK TECNOLÓGICO ───────────────────────── */}
      <div className={`${styles.card} ${styles.cardTech} ${styles.animate} ${styles.delay0}`}>
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

      {/* ── 2. HERO — Título + Mockup laptop ───────────── */}
      <div className={`${styles.card} ${styles.cardHero} ${styles.animate} ${styles.delay1}`}>
        <h3 className={styles.heroTitle}>
          <img src={montserratText} alt="Roraimax" className={styles.heroTextImg} /><br />
          <span className={styles.gradientText}>Elevate Program</span>
        </h3>
        <div className={styles.mockupArea}>
          <img src={laptopMockup} alt="Roraimax laptop" className={styles.mockupImg} />
        </div>
      </div>

      {/* ── 3. DIRECCIÓN VISUAL PREMIUM ────────────────── */}
      <div className={`${styles.card} ${styles.cardBranding} ${styles.animate} ${styles.delay2}`}>
        <span className={styles.cardLabel}>Dirección visual Premium</span>
        <div className={styles.brandingGrid}>
          <img src={rrmxLogo} alt="Logo Roraimax" className={styles.brandingLogo} />
          <div className={styles.colorPalette}>
            <img src={circleGold} alt="Dorado" className={styles.colorCircle} />
            <img src={circleBlack} alt="Negro" className={styles.colorCircle} />
          </div>
          <img src={rrmxButton} alt="Botón POSTULAR" className={styles.brandingButton} />
        </div>
      </div>

      {/* ── 4. DE NEGOCIO A DISEÑO (card naranja) ──────── */}
      <div className={`${styles.card} ${styles.cardReload} ${styles.animate} ${styles.delay1}`}>
        <img src={arrowsReload} alt="Reload" className={styles.reloadIcon} />
        <div className={styles.reloadText}>
          <span className={styles.reloadLabel}>De negocio</span>
          <span className={styles.reloadLabel}>a diseño</span>
        </div>
      </div>

      {/* ── 5. EXPERIENCIA MULTIPLATAFORMA + MOBILE ────── */}
      <div className={`${styles.card} ${styles.cardMultiplatform} ${styles.animate} ${styles.delay2}`}>
        <span className={styles.cardLabel}>Experiencia multiplataforma</span>
        <div className={styles.mobileWrapper}>
          <img src={mobileMockup} alt="Roraimax móvil" className={styles.mobileImg} />
        </div>
      </div>

      {/* ── 6. LIDERAZGO Y MENTORÍA ────────────────────── */}
      <div className={`${styles.card} ${styles.cardMentorship} ${styles.animate} ${styles.delay2}`}>
        <span className={styles.cardLabel}>Liderazgo y mentoría</span>
        <img src={teamGridImg} alt="Equipo" className={styles.teamImg} />
      </div>

    </div>
  );
};

export default RoraimaxBentoGrid;
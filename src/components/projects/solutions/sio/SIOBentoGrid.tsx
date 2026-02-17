import styles from './SIOBentoGrid.module.css';

// ── Assets SIO ────────────────────────────────────────────
import medicosImg       from '../../../../assets/SIO/medicos.png';
import sioMockup        from '../../../../assets/SIO/SIO.png';
import vanillaIcon      from '../../../../assets/SIO/vanilla.png';
import figmaIcon        from '../../../../assets/SIO/Figma-color.svg';
import githubIcon       from '../../../../assets/SIO/github-circular.svg';
import djangoIcon       from '../../../../assets/SIO/django-color.svg';
import postgresIcon     from '../../../../assets/SIO/postgresql-icon.png';
import reportLabIcon    from '../../../../assets/SIO/ReportLab.png';
import practitionerIcon from '../../../../assets/SIO/practitioner.svg';
import heartLockIcon    from '../../../../assets/SIO/red-heart-padlock.svg';
import noWifiIcon       from '../../../../assets/SIO/green-no-wifi.svg';
import timeIcon         from '../../../../assets/SIO/time.svg';
import sioThemeImg      from '../../../../assets/SIO/SIO-dark.png';
import sioLightImg      from '../../../../assets/SIO/SIO-light.png';

// ── Tech stack con links ──────────────────────────────────
const techStack = [
  { 
    name: 'HTML / CSS / JS',  
    icon: vanillaIcon,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    darkInvert: false
  },
  { 
    name: 'Figma',       
    icon: figmaIcon,
    link: 'https://www.figma.com/design/yDYdCQUM14nTt2R8Y1ylVn/HermindaMartinLayout?node-id=0-1&m=dev&t=9yIFBdvGDHkDd6SX-1',
    darkInvert: false
  },
  { 
    name: 'GitHub',      
    icon: githubIcon,
    link: 'https://github.com/DaniielVJ/sio_hospital',
    darkInvert: true
  },
  { 
    name: 'Django',      
    icon: djangoIcon,
    link: 'https://www.djangoproject.com/',
    darkInvert: false
  },
  { 
    name: 'PostgreSQL',  
    icon: postgresIcon,
    link: 'https://www.postgresql.org/',
    darkInvert: false
  },
  { 
    name: 'ReportLab',   
    icon: reportLabIcon,
    link: 'https://www.reportlab.com/',
    darkInvert: false
  },
];

const SIOBentoGrid = () => {
  return (
    <div className={styles.sioGrid}>

      {/* ── 1. DISEÑO AMIGABLE ─────────────────────────── */}
      <div className={`${styles.card} ${styles.cardDesign} ${styles.animate} ${styles.delay0}`}>
        <span className={styles.cardLabel}>Diseño amigable</span>
        <img src={medicosImg} alt="Médicos ilustración" className={styles.designImg} />
      </div>

      {/* ── 2. HERO — Título + Mockup ─────────────────── */}
      <div className={`${styles.card} ${styles.cardHero} ${styles.animate} ${styles.delay1}`}>
        <h3 className={styles.heroTitle}>
          Sistema de Información Obstétrico (SIO)
        </h3>
        <div className={styles.mockupArea}>
          <img src={sioMockup} alt="Mockup SIO" className={styles.mockupImg} />
        </div>
      </div>

      {/* ── 3. TECH STACK (con links) ──────────────────── */}
      <div className={`${styles.card} ${styles.cardDays} ${styles.animate} ${styles.delay2}`}>
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
              <img
                src={tech.icon} alt={tech.name} className={`${styles.techIcon} ${
                tech.darkInvert ? styles.darkInvert : "" }`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* ── 4. STAT — 28 días ───────────────────────────── */}
      <div className={`${styles.card} ${styles.cardTech} ${styles.animate} ${styles.delay0}`}>
        <span className={styles.cardLabel}>MVP desarrollado en</span>
        <p className={styles.statValue}>
          <span className={styles.gradientText}>28 días</span>
        </p>
      </div>

      {/* ── 5. ROLES + 2FA ──────────────────────────────── */}
      <div className={styles.cardSecurityWrapper}>
        <div className={`${styles.cardRoles} ${styles.animate} ${styles.delay1}`}>
          <img src={practitionerIcon} alt="Roles" className={`${styles.medicoIcon} ${styles.darkInvert}`} />
          <span className={styles.cardMedicoLabel}>Ingreso basado en roles</span>
        </div>
        <div className={`${styles.card2FA} ${styles.animate} ${styles.delay1}`}>
          <span className={styles.cardSubLabel}>Identificación de doble factor 2FA</span>
          <img src={heartLockIcon} alt="2FA" className={styles.Icon} />
        </div>
      </div>

      {/* ── 6. OFFLINE ──────────────────────────────────── */}
      <div className={`${styles.card} ${styles.cardOffline} ${styles.animate} ${styles.delay0}`}>
        <span className={styles.cardSubLabel}>Funcionando con conexión inestable de internet</span>
        <img src={noWifiIcon} alt="Sin conexión" className={styles.Icon} />
      </div>

      {/* ── 7. HISTORIAL ────────────────────────────────── */}
      <div className={`${styles.card} ${styles.cardHistory} ${styles.animate} ${styles.delay1}`}>
        <span className={styles.cardSubLabel}>
          Retroceder acciones mediante historial
        </span>
        <img src={timeIcon} alt="Historial" className={`${styles.Icon} ${styles.darkInvert}`} />
      </div>

      {/* ── 8. TEMA CLARO/OSCURO ────────────────────────── */}
      <div className={`${styles.card} ${styles.cardSpeed} ${styles.animate} ${styles.delay2}`}>
        <span className={styles.cardLabel}>Tema claro y oscuro</span>
        <div className={styles.themeWrapper}>
          <img src={sioLightImg} alt="Tema claro" className={styles.themeImg} />
          <img src={sioThemeImg} alt="Tema oscuro" className={styles.themeImg} />
        </div>
      </div>

      {/* ── 9. STAT — x4000 ─────────────────────────────── */}
      <div className={`${styles.card} ${styles.cardTheme} ${styles.animate} ${styles.delay2}`}>
        <span className={styles.cardLabel}>Generación de reportes</span>
        <p className={styles.speedValue}>
          <span className={styles.gradientText}>x4000</span>
        </p>
        <span className={styles.cardLabel}>Veces más rápido</span>
      </div>

    </div>
  );
};

export default SIOBentoGrid;
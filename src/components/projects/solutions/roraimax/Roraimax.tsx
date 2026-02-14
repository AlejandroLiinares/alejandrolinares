import styles from './Roraimax.module.css';

// ── Iconos de tecnologías (SVG inline o puedes reemplazar con tus imágenes) ──
const techStack = [
  { name: 'HTML5',      emoji: '🌐' },
  { name: 'CSS3',       emoji: '🎨' },
  { name: 'Figma',      emoji: '✏️' },
  { name: 'GitHub',     emoji: '🐙' },
  { name: 'Django',     emoji: '🐍' },
  { name: 'PostgreSQL', emoji: '🐘' },
];

const Roraimax = () => {
  return (
    <div className={styles.sioGrid}>

      {/* ── 1. DISEÑO AMIGABLE ─────────────────────────── */}
      <div className={`${styles.card} ${styles.cardDesign} ${styles.animate} ${styles.delay0}`}>
        <span className={styles.cardLabel}>Reuniones semanales</span>
        <span className={styles.bigEmoji}>👩‍⚕️</span>
      </div>

      {/* ── 2. HERO — Título + Mockup ─────────────────── */}
      <div className={`${styles.card} ${styles.cardHero} ${styles.animate} ${styles.delay1}`}>
        <h3 className={styles.heroTitle}>Roraimax</h3>
        <div className={styles.mockupArea}>
          {/* Reemplaza el src con tu imagen real */}
          <img
            src="/images/sio-mockup-laptop.png"
            alt="Mockup SIO en laptop"
            className={styles.mockupLaptop}
          />
          <img
            src="/images/sio-mockup-mobile.png"
            alt="Mockup SIO en móvil"
            className={styles.mockupMobile}
          />
        </div>
      </div>

      {/* ── 3. STAT — 28 días ─────────────────────────── */}
      <div className={`${styles.card} ${styles.cardDays} ${styles.animate} ${styles.delay2}`}>
        <span className={styles.statEyebrow}>MVP Desarrollado en</span>
        <p className={styles.statValue}>
          28<span className={styles.statUnit}> días</span>
        </p>
      </div>

      {/* ── 4. TECH STACK ─────────────────────────────── */}
      <div className={`${styles.card} ${styles.cardTech} ${styles.animate} ${styles.delay0}`}>
        <div className={styles.techGrid}>
          {techStack.map((tech) => (
            <div key={tech.name} className={styles.techItem} title={tech.name}>
              <span className={styles.techEmoji}>{tech.emoji}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. ROLES + 2FA (card doble) ───────────────── */}
      <div className={`${styles.card} ${styles.cardSecurity} ${styles.animate} ${styles.delay1}`}>
        <div className={styles.securityItem}>
          <span className={styles.securityEmoji}>🔐</span>
          <span className={styles.securityLabel}>Ingreso basado en roles</span>
        </div>
        <div className={styles.securityDivider} />
        <div className={styles.securityItem}>
          <span className={styles.securityEmoji}>🔒</span>
          <span className={styles.securityLabel}>Identificación de doble factor 2FA</span>
        </div>
      </div>

      {/* ── 6. OFFLINE ────────────────────────────────── */}
      <div className={`${styles.card} ${styles.cardOffline} ${styles.animate} ${styles.delay0}`}>
        <span className={styles.offlineEmoji}>🌐</span>
        <span className={styles.cardLabel}>Funcionando sin conexión</span>
      </div>

      {/* ── 7. HISTORIAL ──────────────────────────────── */}
      <div className={`${styles.card} ${styles.cardHistory} ${styles.animate} ${styles.delay1}`}>
        <span className={styles.historyLabel}>
          Retroceder acciones mediante historial
        </span>
        <span className={styles.historyEmoji}>⏳</span>
      </div>

      {/* ── 8. STAT — x4000 ───────────────────────────── */}
      <div className={`${styles.card} ${styles.cardSpeed} ${styles.animate} ${styles.delay2}`}>
        <span className={styles.statEyebrow}>Generación de reportes</span>
        <p className={styles.speedValue}>x4000</p>
        <span className={styles.speedSublabel}>Veces más rápido</span>
      </div>

      {/* ── 9. TEMA CLARO / OSCURO ────────────────────── */}
      <div className={`${styles.card} ${styles.cardTheme} ${styles.animate} ${styles.delay2}`}>
        <span className={styles.cardLabel}>Tema claro y oscuro</span>
        {/* Reemplaza src con tu screenshot real */}
        <img
          src="/images/sio-theme-preview.png"
          alt="Tema claro y oscuro del SIO"
          className={styles.themeImg}
        />
      </div>

    </div>
  );
};

export default Roraimax;
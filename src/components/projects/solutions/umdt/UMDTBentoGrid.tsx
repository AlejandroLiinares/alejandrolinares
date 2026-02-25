import styles from './UMDTBentoGrid.module.css';

// Importamos en orden nuestras imagenes y svgs para usarlos después.
import pencilIcon     from '../../../../assets/UMDT/red-pencil.svg';
import novelIcon      from '../../../../assets/UMDT/UMDT.png';
import reactIcon      from '../../../../assets/UMDT/react-logo.png'; 
import typescriptIcon from '../../../../assets/UMDT/typescript.svg';
import canvaIcon      from '../../../../assets/UMDT/canva.png';
import githubIcon     from '../../../../assets/UMDT/github-circular.svg';
import postgreIcon    from '../../../../assets/UMDT/postgresql-icon.png';
import djangoIcon     from '../../../../assets/UMDT/django-color.svg';

// ── Tech stack icons ────────────────────────────────────────────
const techStack = [
  { name: 'React',      icon: reactIcon,      link: 'https://react.dev/' },
  { name: 'TypeScript', icon: typescriptIcon, link: 'https://www.typescriptlang.org/' },
  { name: 'Canva',      icon: canvaIcon,      link: 'https://canva.com/' },
  { name: 'GitHub',     icon: githubIcon,     link: 'https://github.com/AlejandroLiinares/UnMillonDeTraumas.git' },
  { name: 'PostgreSQL', icon: postgreIcon,    link: 'https://www.postgresql.org/' },
  { name: 'Django',     icon: djangoIcon,     link: 'https://www.djangoproject.com/' },
];

const UMDTBentoGrid = () => {
  return (
    <div className={styles.umdtGrid}>

      {/* ── CARD 1: EN CONSTRUCCIÓN... ─────────────────────── */}
      <div className={`${styles.card} ${styles.cardPencil} ${styles.animate} ${styles.delay2}`}>
        <img src={pencilIcon} alt="Building" className={styles.pencilIcon} />
        <div className={styles.buildingText}>
          <span className={styles.cardLabel}>En construcción...</span>
        </div>
      </div>
      
      {/* ── CARD 2: HERO DE LA NOVELA ───────────────────── */}
      <div className={styles.heroCard}>
        <div className={styles.heroTitleWrapper}>
          <h3 className={styles.heroTitle}>
            Un <span className={styles.blueText}>millón</span><br />
            de <span className={styles.redText}>traumas</span>
          </h3>
        </div>

        <div className={styles.heroImage}>
          <img
            src={novelIcon}
            alt="UMDT hero"
            className={styles.umdtNovel}
          />
        </div>
      </div> 

      {/* ── CARD 3: STACK TECNOLÓGICO ───────────────────────── */}
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

    </div>
  );
};

export default UMDTBentoGrid;
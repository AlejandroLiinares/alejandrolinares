import styles from './AboutMe.module.css';

import myselfIcon   from '../../assets/aboutme/myself.jpg';
import githubIcon   from '../../assets/SIO/github-circular.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import cvIcon       from '../../assets/aboutme/cv.svg';

import userIcon   from '../../assets/aboutme/person-orange.svg';
import starIcon   from '../../assets/aboutme/star.svg';
import upIcon     from '../../assets/aboutme/up.svg';
import targetIcon from '../../assets/aboutme/target.svg';


const AboutMe = () => {
  return (
    <section className={styles.section}>

      <h2 className={styles.h2Title}>Soy Alejandro Linares.</h2>

      <div className={styles.wrapper}>

        {/* ── Izquierda: foto + redes ── */}
        <div className={styles.left}>
          <img
            src={myselfIcon}
            alt="Foto de Alejandro Linares"
            className={styles.photo}
          />
          <div className={styles.socialIcons}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
              <img src={githubIcon} alt="GitHub" className={styles.socialIcon} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
              <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
            </a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="CV" className={styles.socialLink}>
              <img src={cvIcon} alt="CV" className={styles.socialIcon} />
            </a>
          </div>
        </div>

        {/* ── Derecha: descripción + cards ── */}
        <div className={styles.right}>

          <h3 className={styles.h3Description}>
            Diseño productos digitales que aumentan el valor percibido de tu servicio o 
            producto, con extrema cercanía, personalización y calidad.
          </h3>

          <div className={styles.cardsGrid}>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <h4 className={styles.cardTitle}>Usuario y negocio</h4>
                <img src={userIcon} alt="" aria-hidden="true" className={styles.cardIcon} />
              </div>
              <p className={styles.cardDescription}>
                Diseño productos pensando en el usuario, pero tomando decisiones desde el negocio.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <h4 className={styles.cardTitle}>Calidad digital superior</h4>
                <img src={starIcon} alt="" aria-hidden="true" className={styles.cardIcon} />
              </div>
              <p className={styles.cardDescription}>
                Cuando un negocio ofrece algo valioso, su presencia digital debería reflejar esa misma calidad.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <h4 className={styles.cardTitle}>Tecnología como medio</h4>
                <img src={upIcon} alt="" aria-hidden="true" className={styles.cardIcon} />
              </div>
              <p className={styles.cardDescription}>
                La tecnología no es el fin. Es la herramienta para generar impacto real.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <h4 className={styles.cardTitle}>Velocidad de ejecución</h4>
                <img src={targetIcon} alt="" aria-hidden="true" className={styles.cardIcon} />
              </div>
              <p className={styles.cardDescription}>
                Prefiero construir algo funcional en 30 días, validarlo en el mundo real y mejorarlo continuamente.
              </p>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
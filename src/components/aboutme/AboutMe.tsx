import styles from './AboutMe.module.css';

import myselfIcon      from '../../assets/aboutme/myself.jpg';
import githubIcon      from '../../assets/SIO/github-circular.svg';
import linkedinIcon    from '../../assets/linkedin.svg';
import cvIcon          from '../../assets/aboutme/cv.svg';

import userIcon        from '../../assets/aboutme/person-orange.svg';
import starIcon        from '../../assets/aboutme/star.svg';
import handshakeIcon     from '../../assets/aboutme/handshake.svg';
import targetIcon      from '../../assets/aboutme/target.svg';



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
            <a href="https://github.com/AlejandroLiinares" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
              <img src={githubIcon} alt="GitHub" className={styles.socialIcon} />
            </a>
            <a href="https://www.linkedin.com/in/alejandroliinares/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
              <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
            </a>
            <a href="https://docs.google.com/document/d/1jDdF2QN2e-lKu-L5uxZBg_Bhuc25xTyTcS40d9Yyn6Y/edit?usp=sharing" 
            target="_blank" rel="noopener noreferrer" aria-label="CV" className={styles.socialLink}>
              <img src={cvIcon} alt="CV" className={styles.socialIcon} />
            </a>
          </div>
        </div>

        {/* ── Derecha: descripción + cards ── */}
        <div className={styles.right}>

          <h3 className={styles.h3Description}>
            Diseño productos digitales que aumentan el valor de tu servicio o 
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
                <h4 className={styles.cardTitle}>Velocidad de ejecución</h4>
                <img src={targetIcon} alt="" aria-hidden="true" className={styles.cardIcon} />
              </div>
              <p className={styles.cardDescription}>
                Prefiero algo funcionando en 30 días que una promesa perfecta dentro de seis meses.
              </p>
            </article>

            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <h4 className={styles.cardTitle}>Cercanía y personalización</h4>
                <img src={handshakeIcon} alt="" aria-hidden="true" className={styles.cardIcon} />
              </div>
              <p className={styles.cardDescription}>
                Porque mereces un trato cercano en todo momento y software creado con atención real a cada detalle.
              </p>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
import styles from "./SioBentoGrid.module.css";

/**
 * NOTAS:
 * - i18n → solo ids, tú conectas luego
 * - Imágenes → reemplaza src por tus assets reales
 * - Global CSS → asume variables tipo:
 *   --color-bg-surface
 *   --color-text
 *   --color-text-muted
 *   --color-accent
 *   --radius-xl
 */

export default function SioBentoGrid() {
  return (
    <div className={styles.grid}>
      {/* HERO / PROYECTO PRINCIPAL */}
      <article className={`${styles.card} ${styles.hero}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h3 data-i18n="projects.sio.title">
              Sistema de Información Obstétrico (SIO)
            </h3>

            <p data-i18n="projects.sio.description">
              Gestión clínica integral con foco en eficiencia real en contextos médicos.
            </p>
          </div>

          <div className={styles.heroMedia}>
            {/* Laptop preview */}
            <img
              src="/assets/projects/sio/laptop.png"
              alt="SIO Desktop Preview"
              loading="lazy"
            />

            {/* Mobile preview */}
            <img
              src="/assets/projects/sio/mobile.png"
              alt="SIO Mobile Preview"
              loading="lazy"
              className={styles.mobilePreview}
            />
          </div>
        </div>
      </article>

      {/* UX / FRIENDLY DESIGN */}
      <article className={`${styles.card} ${styles.design}`}>
        <h4 data-i18n="projects.sio.design.title">
          Diseño amigable
        </h4>

        <img
          src="/assets/projects/sio/friendly.png"
          alt=""
          loading="lazy"
          className={styles.emojiImage}
        />
      </article>

      {/* MVP SPEED */}
      <article className={`${styles.card} ${styles.mvp}`}>
        <span className={styles.eyebrow} data-i18n="projects.sio.mvp.label">
          MVP desarrollado en
        </span>

        <div className={styles.metricValue}>
          28 <span data-i18n="projects.sio.mvp.days">días</span>
        </div>
      </article>

      {/* STACK */}
      <article className={`${styles.card} ${styles.stack}`}>
        <div className={styles.stackGrid}>
          <img src="/assets/stack/html.svg" alt="HTML" />
          <img src="/assets/stack/css.svg" alt="CSS" />
          <img src="/assets/stack/js.svg" alt="JavaScript" />
          <img src="/assets/stack/figma.svg" alt="Figma" />
          <img src="/assets/stack/github.svg" alt="GitHub" />
          <img src="/assets/stack/django.svg" alt="Django" />
          <img src="/assets/stack/postgres.svg" alt="PostgreSQL" />
          <img src="/assets/stack/python.svg" alt="Python" />
        </div>
      </article>

      {/* RBAC */}
      <article className={`${styles.card} ${styles.security}`}>
        <img
          src="/assets/projects/sio/rbac.svg"
          alt=""
          className={styles.iconLarge}
        />

        <p data-i18n="projects.sio.rbac">
          Ingreso basado en roles
        </p>
      </article>

      {/* OFFLINE */}
      <article className={`${styles.card} ${styles.offline}`}>
        <div className={styles.offlineRow}>
          <img src="/assets/icons/offline.svg" alt="" />
          <span data-i18n="projects.sio.offline">
            Funcionando sin conexión
          </span>
        </div>
      </article>

      {/* 2FA */}
      <article className={`${styles.card} ${styles.auth}`}>
        <img
          src="/assets/projects/sio/2fa.svg"
          alt=""
          className={styles.iconLarge}
        />

        <p data-i18n="projects.sio.2fa">
          Identificación de doble factor
        </p>
      </article>

      {/* PERFORMANCE */}
      <article className={`${styles.card} ${styles.performance}`}>
        <span className={styles.eyebrow} data-i18n="projects.sio.performance.label">
          Generación de reportes
        </span>

        <div className={styles.metricValueHighlight}>
          x4000
        </div>

        <p data-i18n="projects.sio.performance.desc">
          Veces más rápido
        </p>
      </article>

      {/* THEME */}
      <article className={`${styles.card} ${styles.theme}`}>
        <h4 data-i18n="projects.sio.theme">
          Tema claro y oscuro
        </h4>
      </article>
    </div>
  );
}

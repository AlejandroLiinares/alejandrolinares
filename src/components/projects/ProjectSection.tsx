import styles from './ProjectSection.module.css';

const ProjectSection = () => {
  return (
    <section className={styles.container}>
      {/* El título que pediste para marcar el inicio de tus soluciones */}
      <h2 className={styles.title}>Solutions in Practice</h2>
      
      {/* Espacio temporal para que puedas probar el final de la animación */}
      <div style={{ height: '100vh' }}></div>
    </section>
  );
};

export default ProjectSection;
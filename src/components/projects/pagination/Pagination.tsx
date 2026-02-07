import styles from "./Pagination.module.css";

interface PaginationProps {
  total: number;
  current: number;
  onNext: () => void;
  onPrev: () => void;
}

const Pagination = ({ total, current, onNext, onPrev }: PaginationProps) => {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <div className={styles.controlsWrapper}>
      {/* Botón Izquierdo: Se desactiva si es el primer proyecto */}
      <button 
        className={`${styles.controlButton} ${isFirst ? styles.disabled : ""}`} 
        onClick={onPrev}
        disabled={isFirst}
        aria-label="Previous"
      >
        <img src="/arrowleft.svg" alt="" />
      </button>

      {/* Paginación central */}
      <div className={styles.paginationPill}>
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === current ? styles.active : ""}`}
          />
        ))}
      </div>

      {/* Botón Derecho: Se desactiva si es el último proyecto */}
      <button 
        className={`${styles.controlButton} ${isLast ? styles.disabled : ""}`} 
        onClick={onNext}
        disabled={isLast}
        aria-label="Next"
      >
        <img src="/arrowright.svg" alt="" />
      </button>
    </div>
  );
};

export default Pagination;
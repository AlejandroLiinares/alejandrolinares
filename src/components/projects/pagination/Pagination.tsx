import styles from './Pagination.module.css';

interface PaginationProps {
  total: number;
  current: number;
  onNext: () => void;
  onPrev: () => void;
}

// Tus SVGs optimizados para React
const ArrowLeft = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
    <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="currentColor"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="currentColor"/>
  </svg>
);

const Pagination = ({ total, current, onNext, onPrev }: PaginationProps) => {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <div className={styles.controlsWrapper}>
      <button 
        className={`${styles.controlButton} ${isFirst ? styles.disabled : ''}`} 
        onClick={onPrev}
        disabled={isFirst}
      >
        <ArrowLeft />
      </button>

      <div className={styles.paginationPill}>
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === current ? styles.active : ''}`}
          />
        ))}
      </div>

      <button 
        className={`${styles.controlButton} ${isLast ? styles.disabled : ''}`} 
        onClick={onNext}
        disabled={isLast}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
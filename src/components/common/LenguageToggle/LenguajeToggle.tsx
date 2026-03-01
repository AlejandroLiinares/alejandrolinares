import { useLanguage } from '../../../context/LanguageContext';
import styles from './LanguageToggle.module.css'; 

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage} 
      className={styles.button}
      aria-label="Cambiar idioma"
    >
      {language === 'en' ? 'ES' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
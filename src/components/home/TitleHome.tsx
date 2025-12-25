import React from 'react';
import Typewriter from "typewriter-effect";
// Subimos dos niveles (../..) para llegar a src, luego entramos en estilos
import styles from "../../styles/global/home.module.css"; 

const TitleHome: React.FC = () => {
  return (
    <h1 className={styles.title}>
      <Typewriter
        options={{
          strings: ["Alejandro Linares"],
          autoStart: true,
          loop: false,
          delay: 80,
        }}
      />
    </h1>
  );
};

export default TitleHome;
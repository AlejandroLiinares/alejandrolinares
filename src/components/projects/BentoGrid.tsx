import styled from 'styled-components';
import { motion } from 'framer-motion';

// EL CONTENEDOR MAESTRO
const GridContainer = styled.div`
  display: grid;
  /* Dos columnas: la izquierda es un poco más ancha (1.4 partes) que la derecha (1 parte) */
  grid-template-columns: 1.4fr 1fr; 
  /* Altura automática de filas, con un gap de 20px estilo Apple */
  grid-template-rows: auto auto auto; 
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  /* RESPONSIVE: En móvil se vuelve una sola columna */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

// LA TARJETA BASE (Estilo Apple: bordes redondeados, sombra suave, fondo sutil)
const Card = styled(motion.div)`
  background: #F5F5F7; /* Gris muy clarito estilo Apple */
  border-radius: 24px;   /* Bordes muy redondeados */
  padding: 2rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }
`;

/* --- TARJETAS ESPECÍFICAS (Mapeadas a tu dibujo) --- */

// 1. Título + Video (Top Left)
const MainCard = styled(Card)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  min-height: 300px;
  background: #FFFFFF; /* O un color de acento */
`;

// 2. Frase Enganchadora (Top Right)
const PhraseCard = styled(Card)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background: ${(props) => props.theme.colors.primary}; /* Color distintivo */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

// 3. Desafío (Mid Left)
const ChallengeCard = styled(Card)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  min-height: 150px;
`;

// 4. El "No se que poner" -> Links (Bottom Left)
const LinksCard = styled(Card)`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  min-height: 100px;
  display: flex;
  gap: 1rem; /* Espacio entre botones */
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; /* Para que bajen si no caben en móvil */
`;

// 5. Tecnologías (Bottom Right) - ¡Esta es la que ocupa 2 espacios de altura!
const TechCard = styled(Card)`
  grid-column: 2 / 3;
  grid-row: 2 / 4; /* Abarca desde la línea 2 hasta la 4 (ocupa 2 filas) */
  background: #1c1c1e; /* Fondo oscuro para que los iconos de tech resalten */
  color: white;
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.text}; /* Borde sutil */
  border-radius: 50px; /* Botones tipo píldora */
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.background};
    transform: translateY(-2px);
  }
`;

const BentoGrid = () => {
  return (
    <GridContainer>
      
      <MainCard layoutId="main-card">
        <h3>Gestión de Partos (SIO)</h3>
        {/* Aquí iría la imagen rotada */}
      </MainCard>

      <PhraseCard layoutId="phrase-card">
        <h2>¿Alguien dijo bebés?</h2>
      </PhraseCard>

      <ChallengeCard layoutId="challenge-card">
        <h4>El Desafío</h4>
        <p>Optimizar tiempos en quirófano...</p>
      </ChallengeCard>

      <TechCard layoutId="tech-card">
        <h4>Stack Tecnológico</h4>
        {/* Aquí irían los iconos de React, Django, etc */}
      </TechCard>

      <LinksCard layoutId="links-card">
        <span>GitHub</span>
        <span>Live View</span>
      </LinksCard>

      <LinksCard layoutId="links-card">
        <ActionButton href="https://github.com/DaniielVJ/sio_hospital.git" target="_blank" rel="noopener noreferrer">
          GitHub
        </ActionButton>
        <ActionButton href="https://www.youtube.com/@alejandroliinares" target="_blank" rel="noopener noreferrer">
          Visitar Web
        </ActionButton>
      </LinksCard>

    </GridContainer>
  );
};

export default BentoGrid;
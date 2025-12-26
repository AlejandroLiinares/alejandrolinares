// src/components/home/GradientHome.tsx
import { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// El contenedor que asegura que la esfera no se salga de la pantalla ni tape el texto
const GradientContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* CRUCIAL: Esto la pone DETRÁS del texto */
  pointer-events: none; /* Para que no interfiera con clicks */
`;

// La esfera en sí misma
const Sphere = styled(motion.div)`
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    ${(props) => props.theme.colors.primary} 0%, 
    rgba(255, 124, 17, 0.4) 40%, 
    rgba(255, 255, 255, 0) 70%
  );
  border-radius: 50%;
  filter: blur(60px); /* El secreto del efecto "luz suave" */
  opacity: 0.8;
  position: absolute;

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
    filter: blur(40px); /* Menos blur para mantener definición en pantalla chica */
  }
`;

const GradientHome = () => {
  // Coordenadas del mouse (motion values para rendimiento)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Suavizado del movimiento (Spring Physics para que se sienta orgánico)
  const springConfig = { damping: 25, stiffness: 100 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Restamos la mitad del tamaño (300px) para centrar la esfera en el cursor
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <GradientContainer>
      <Sphere 
        style={{ x: xSpring, y: ySpring }} 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1 }}
      />
    </GradientContainer>
  );
};

export default GradientHome;
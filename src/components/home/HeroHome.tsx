import styled from 'styled-components';
import Typewriter from "typewriter-effect";
import ColorBends from '../ColorBends/ColorBends';


const MainWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Ocupa exactamente toda la pantalla */
  overflow: hidden; /* Corta cualquier cosa que se salga */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Al fondo del Hero */
`;

const HeroContentLayer = styled.div`
  position: relative;
  z-index: 10; /* Encima del ColorBends */
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentSection = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 4rem 1.5rem;
  background-color: ${(props) => props.theme.colors.background}; /* Fondo sólido para tapar el final del canvas si fuera necesario */
  display: flex;
  flex-direction: column;
  align-items: center; /* O 'flex-start' si quieres todo a la izquierda */
  min-height: 50vh; /* Solo para dar espacio visual en este ejemplo */
`;

const StyledTitle = styled.h1`
  font-family: ${(props) => props.theme.typography.heading};
  font-size: 8rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 0;
  margin-bottom: 1rem; 
  color: ${(props) => props.theme.colors.text};
  text-shadow: 0 4px 30px rgba(0,0,0,0.1);

  @media (max-width: 1024px) { font-size: 5rem; }
  @media (max-width: 768px) { font-size: 3.5rem; letter-spacing: -0.01em; }
`;

const StyledDescription = styled.p`
  font-family: ${(props) => props.theme.typography.body};
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0;
  max-width: 50ch; 
  color: ${(props) => props.theme.colors.text};
  text-shadow: 0 2px 10px rgba(0,0,0,0.1);

  @media (max-width: 768px) { font-size: 1rem; max-width: 100%; }
`;

// Estilos para lo que va debajo (Proyectos, etc)
const StyledH2 = styled.h2`
  font-family: ${(props) => props.theme.typography.heading};
  font-size: 6rem;
  font-weight: 400;
  margin-top: 4rem; /* Espacio generoso entre secciones */
  margin-bottom: 1rem;
  align-self: flex-start; /* Alineado a la izquierda según tu código anterior */
  padding-left: 5%; /* Un poco de margen lateral visual */
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 1024px) { font-size: 4.5rem; }
  @media (max-width: 768px) { 
    font-size: 2.8rem; 
    margin-top: 2rem; 
    padding-left: 0; 
  }
`;

const StyledH3 = styled.h3`
  font-family: ${(props) => props.theme.typography.heading};
  font-size: 4rem;
  font-weight: 400;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  align-self: flex-start;
  padding-left: 5%;
  color: ${(props) => props.theme.colors.text};
  
  @media (max-width: 768px) { font-size: 2rem; padding-left: 0; }
`;

const StyledH4 = styled.h4`
  font-family: ${(props) => props.theme.typography.heading};
  font-size: 3rem;
  font-weight: 400;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  align-self: flex-start;
  padding-left: 5%;
  color: ${(props) => props.theme.colors.text};
  
  @media (max-width: 768px) { font-size: 1.5rem; padding-left: 0; }
`;


const HeroHome = () => {
  return (
    <MainWrapper>
      
      <HeroSection>
        
        <BackgroundLayer>
          <ColorBends />
        </BackgroundLayer>

        <HeroContentLayer>
          <StyledTitle>
            <Typewriter
              options={{
                autoStart: true,
                loop: false, 
                delay: 70,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Alejandro Linares")
                  .pauseFor(3500) 
                  .deleteAll()

                  .typeString("I serve you today")
                  .pauseFor(1700)
                  .deleteAll()

                  .typeString("So")
                  .pauseFor(1150)
                  .deleteAll()

                  .typeString("You can serve others tomorrow")
                  .pauseFor(1700)
                  .deleteAll()

                  .typeString("Alejandro Linares") 
                  .start(); 
              }}
            />
          </StyledTitle>

          <StyledDescription>
            Crafting today's solutions for tomorrow's success. I guarantee perpetual growth 
            and refinement to ensure your impact remains enduring.
          </StyledDescription>
        </HeroContentLayer>

      </HeroSection>

      <ContentSection>
        <StyledH2>Projects</StyledH2>
        <StyledH2>Technologies</StyledH2>
        <StyledH2>About Me</StyledH2>
        
        <StyledH2>Example H2</StyledH2>
        <StyledH3>Example H3</StyledH3>
        <StyledH4>Example H4</StyledH4>
      </ContentSection>

    </MainWrapper>
  );
};

export default HeroHome;
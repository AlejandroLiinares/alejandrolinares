import styled from 'styled-components';
import Typewriter from "typewriter-effect";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  text-align: center; 
  width: 100%;
  padding: 0 1.5rem; 
  margin-top: 15rem; 
`;

const StyledTitle = styled.h1`
  font-family: ${(props) => props.theme.typography.heading};
  font-size: 7rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 0;
  margin-bottom: 1rem; 
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 1024px) {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    letter-spacing: -0.01em;
  }
`;

const StyledDescription = styled.p`
  font-family: ${(props) => props.theme.typography.body};
  font-size: 1.3rem;
  font-weight: 450;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 3rem; 
  opacity: 0.8;
  max-width: 60ch; 
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const StyledH2 = styled.h2`
  font-family: ${(props) => props.theme.typography.heading};
  font-size: 6rem;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 1rem;
  align-self: flex-start;
  color: ${(props) => props.theme.colors.text};
`;

const StyledH3 = styled.h3`
  font-family: ${(props) => props.theme.typography.heading};
  font-size: 4rem;
  font-weight: 400;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  align-self: flex-start;
  color: ${(props) => props.theme.colors.text};
`;

const StyledH4 = styled.h4`
  font-family: ${(props) => props.theme.typography.heading};
  font-size: 2rem;
  font-weight: 400;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  align-self: flex-start;
  color: ${(props) => props.theme.colors.text};
`;

const TextHome = () => {
  return (
    <Container>
      
     <StyledTitle>
  <Typewriter
    options={{
      autoStart: true,
      loop: true,
      delay: 70,
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString("Alejandro Linares")
        .pauseFor(4000) 
        .deleteAll()
        
        .typeString("Building your vision today")
        .pauseFor(1700)
        .deleteAll()

        .typeString("So")
        .pauseFor(1250)
        .deleteAll()
        
        .typeString("You can impact others tomorrow")
        .pauseFor(1700)
        .deleteAll()
        
        .start();
    }}
  />
</StyledTitle>

      <StyledDescription>
        Crafting today's solutions for tomorrow's success. I guarantee perpetual growth 
        and refinement to ensure your impact remains enduring.
      </StyledDescription>

      <StyledH2>Projects</StyledH2>
      <StyledH2>Tecnologies</StyledH2>
      <StyledH2>About Me</StyledH2>
      <StyledH2>Example</StyledH2>
      <StyledH3>Example</StyledH3>
      <StyledH4>Example</StyledH4>

    </Container>
  );
};

export default TextHome;
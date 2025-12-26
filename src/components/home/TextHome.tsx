// src/components/home/TitleHome.tsx
import styled from 'styled-components';
import Typewriter from "typewriter-effect";

const StyledTitle = styled.h1`
  font-family: ${(props) => props.theme.typography.heading};
  font-size: 7.5rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  padding-left: 2.5rem;
  margin-top: 28rem;
  margin-bottom: 0;
  max-width: fit-content;

  @media (max-width: 1024px) {
    font-size: 5rem;
    margin-top: 20rem;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;     
    margin-top: 12rem;     
    padding-left: 1.5rem;  
    letter-spacing: -0.01em;
  }

`;

const StyledDescription = styled.p`
  font-family: ${(props)=> props.theme.typography.body};
  font-size: 1.3rem;
  font-weight: 450;
  line-height: 1.2;
  padding-left: 2.5rem;
  margin-top: 0.5rem;
  opacity: 0.8;
  max-width: 60ch;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 1rem;       
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    max-width: 100%;
    margin-top: 1rem;      
  }

`;

const TextHome = () => {
  return (
    <div>
    <StyledTitle>
      <Typewriter
        options={{
          strings: ["Alejandro Linares"],
          autoStart: true,
          loop: false,
          delay: 80,
          deleteSpeed: Infinity, // Para que no se borre al terminar
        }}
      />
    </StyledTitle>

    <StyledDescription>
      Crafting today's solutions for tomorrow's success. I guarantee perpetual growth 
      and refinement to ensure your impact remains enduring.
    </StyledDescription>
    </div>
  );
};


export default TextHome;
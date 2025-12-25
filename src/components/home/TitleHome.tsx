// src/components/home/TitleHome.tsx
import styled from 'styled-components';
import Typewriter from "typewriter-effect";

const StyledTitle = styled.h1`
  font-family: ${(props) => props.theme.typography.heading};
  font-size: clamp(6rem, 8vw, 5rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  padding-left: 2rem;
  .Typewriter-cursor {
    font-weight: 200;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const TitleHome = () => {
  return (
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
  );
};

export default TitleHome;
// src/components/home/TitleHome.tsx
import styled from 'styled-components';
import Typewriter from "typewriter-effect";

const StyledTitle = styled.h1`
  font-family: ${(props) => props.theme.typography.heading};
  font-size: 8rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  padding-left: 2.5rem;
  margin-top: 27rem;
  margin-bottom: 0;
`;

const StyledDescription = styled.p`
  font-family: ${(props)=> props.theme.typography.body};
  font-size: 1.3rem;
  font-weight: 450;
  line-height: 1.2;
  padding-left: 2.5rem;
  padding-right: 8rem;
  margin-top: 0.5rem;
  opacity: 0.8;
  color: ${(props) => props.theme.colors.text};
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
      Desarrollador Full Stack
    </StyledDescription>
    </div>
  );
};


export default TextHome;
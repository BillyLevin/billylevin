import * as React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  color: red;
  font-size: 10rem;
  font-weight: 300;
`;

const Hero: React.FC = () => {
  return (
    <div>
      <Heading>Hello, I'm Billy</Heading>
    </div>
  );
};

export default Hero;

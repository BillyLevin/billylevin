import * as React from 'react';
import styled from 'styled-components';
import heroImg from '../img/hero.jpg';
import Attributes from './Attributes';
import Technologies from './Technologies';

interface Props {
  image: string;
}

const HeroContainer = styled.div<Props>`
  width: 100%;
  background-image: ${props =>
    `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 110rem;
  margin: 0 auto;
  padding: 15rem 0;
`;

const Heading = styled.h1`
  color: ${props => props.theme.colors.dark[0]};
  font-size: 6.4rem;
  font-weight: 600;
  margin-bottom: 3.2rem;

  span {
    color: ${props => props.theme.colors.primary[0]};
  }
`;

const Subtitle = styled.h2`
  font-weight: 300;
  margin-bottom: 3.2rem;
`;

const Emphasis = styled.span`
  color: ${props => props.theme.colors.primary[0]};
  font-weight: 400;
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer image={heroImg}>
      <HeroWrapper>
        <Heading>
          Hello, I'm <span>Billy.</span>
        </Heading>
        <Subtitle>
          I'm a <Emphasis>Web Developer</Emphasis> based in London, with a special interest in{' '}
          <Emphasis>React.</Emphasis> I love to build beautiful, functional websites and
          applications. Here's some more about me...
        </Subtitle>
        <SkillsContainer>
          <Attributes />
          <Technologies />
        </SkillsContainer>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;

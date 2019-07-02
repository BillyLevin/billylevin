import * as React from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import heroImg from '../img/hero.jpg';
import { hexToRgb } from '../utils/hexToRgb';
import Skills from './Skills';

interface Props {
  image: string;
}

const HeroContainer = styled.div<Props>`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  background-image: ${props => {
    const rgb = hexToRgb(props.theme.colors.primary[0]);
    if (rgb) {
      const rgbaString = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.95)`;
      return `linear-gradient(${rgbaString}, ${rgbaString}), url(${props.image})`;
    }
    return '';
  }};
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 110rem;
  margin: 0 auto;
  padding: 6.4rem;
  border-radius: 3px;
  text-align: center;
  background-image: linear-gradient(rgba(81, 66, 245, 0.5), rgba(81, 66, 245, 0.5));
`;

const Heading = styled.h1`
  color: ${props => props.theme.colors.light[0]};
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 3.2rem;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 5rem;
    height: 2px;
    background-color: ${props => props.theme.colors.light[0]};
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: calc(100% + 1.6rem - 1px);
  }
`;
const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.light[0]};
  letter-spacing: 1px;
  margin-bottom: 3.2rem;
`;

const Emphasis = styled.span`
  color: ${props => props.theme.colors.light[0]};
  font-weight: 400;
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.6rem;
`;

const GithubLink = styled.a`
  color: ${props => props.theme.colors.light[0]};
  transition: color 0.3s;
  outline: 0;
  margin-bottom: 3.2rem;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.dark[0]};
  }

  svg {
    width: 4.8rem;
    height: 4.8rem;
  }
`;
const Hero: React.FC = () => {
  return (
    <HeroContainer image={heroImg}>
      <HeroWrapper>
        <Heading>Billy Levin</Heading>
        <Subtitle>Web Developer. I love to build beautiful, functional web applications.</Subtitle>
        <GithubLink href="https://github.com/billylevin" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </GithubLink>
        <Skills />
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;

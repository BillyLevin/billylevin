import * as React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import heroImg from '../img/hero.jpg';
import { theme } from '../theme';
import { hexToRgb } from '../utils/hexToRgb';
import Link from './Link';
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
  background-image: linear-gradient(rgba(31, 95, 196, 0.5), rgba(31, 95, 196, 0.5));
`;

const Heading = styled.h1`
  color: ${props => props.theme.colors.light[0]};
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 6.4rem;
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
    top: calc(100% + 3.2rem - 1px);
  }
`;
const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  color: ${props => props.theme.colors.light[0]};
  letter-spacing: 1px;
  margin-bottom: 3.2rem;
`;

const ContactDetails = styled.div`
  display: flex;
  margin-bottom: 3.2rem;
  padding: 1.6rem;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 1.6rem;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${props => props.theme.colors.dark[0]};
    margin-right: 0.8rem;
  }
  a:link,
  a:visited {
    text-decoration: none;
    font-weight: 400;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer image={heroImg}>
      <HeroWrapper>
        <Heading>Billy Levin</Heading>
        <Subtitle>Web Developer. I love to build beautiful, functional web applications.</Subtitle>
        <ContactDetails>
          <ContactDetail>
            <FaGithub />
            <Link
              href="https://github.com/billylevin"
              target="_blank"
              rel="noopener noreferrer"
              variant="link"
              primaryColor={theme.colors.light[0]}
            >
              billylevin
            </Link>
          </ContactDetail>
          <ContactDetail>
            <FaEnvelope />
            <Link
              href="mailto:billy.levin97@gmail.com"
              variant="link"
              primaryColor={theme.colors.light[0]}
            >
              billy.levin97@gmail.com
            </Link>
          </ContactDetail>
          <ContactDetail>
            <FaLinkedin />
            <Link
              variant="link"
              primaryColor={theme.colors.light[0]}
              href="https://www.linkedin.com/in/billylevin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              in/billylevin
            </Link>
          </ContactDetail>
        </ContactDetails>
        <Skills />
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;

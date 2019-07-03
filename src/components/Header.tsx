import * as React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
// @ts-ignore
import cv from '../img/cvBillyLevin.pdf';

interface Props {
  hoverColor: string;
}

const HeaderContainer = styled.header`
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85));
  padding: 1.6rem 3.2rem;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1000;
  overflow-x: none;

  @media only screen and (max-width: ${props => props.theme.breakpoints.medium}) {
    padding: 1.2rem 1.6rem;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialMediaItem = styled.a<Props>`
  color: ${props => props.theme.colors.light[0]};
  transition: color 0.3s;
  outline: 0;

  &:hover,
  &:focus {
    color: ${props => props.hoverColor};
  }

  svg {
    margin-right: 1.6rem;
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const DownloadCV = styled.a`
  margin-left: auto;
  text-decoration: none;
  color: ${props => props.theme.colors.light[0]};
  outline: 0;
  text-transform: uppercase;
  transition: color 0.3s;
  letter-spacing: 1px;

  @media only screen and (max-width: ${props => props.theme.breakpoints.medium}) {
    font-size: 1.4rem;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.primary[0]};
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <SocialMediaContainer>
        <SocialMediaItem
          hoverColor="#745f8c"
          href="https://github.com/billylevin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </SocialMediaItem>
        <SocialMediaItem
          hoverColor="#0077B5"
          href="https://www.linkedin.com/in/billylevin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </SocialMediaItem>
      </SocialMediaContainer>
      <DownloadCV href={cv} target="_blank" rel="noopener noreferrer">
        Download My CV
      </DownloadCV>
    </HeaderContainer>
  );
};

export default Header;

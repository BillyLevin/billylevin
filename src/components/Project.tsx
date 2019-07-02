import * as React from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import { theme } from '../theme';
import Link from './Link';
interface Props {
  title: string;
  image: string;
  subtitle: string;
  demoLink?: string;
  codeLink?: string;
  features: string[];
}

const ProjectContainer = styled.div`
  margin: 6.4rem 0;
  text-decoration: none;
  outline: 0;
  display: flex;
`;

const ProjectImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectDesc = styled.div`
  flex: 1;
  padding: 1.6rem 3.2rem;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.primary[0]};
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
`;

const ProjectSubtitle = styled.h4`
  color: ${props => props.theme.colors.dark[1]};
  font-weight: 400;
  margin-bottom: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;

  a:nth-child(1),
  div:nth-child(1) {
    margin-right: 0.8rem;
  }
`;

const NoLink = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primary[0]};
  padding: 0.8rem 1.6rem;
  border: ${props => '2px solid ' + props.theme.colors.primary[0]};
  border-radius: 3px;

  svg {
    margin-right: 0.8rem;
  }

  span {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const ProjectFeatures = styled.ul`
  padding: 1.6rem 0;
  margin-left: 1.6rem;

  li {
    margin-bottom: 0.8rem;
  }
`;

const Project: React.FC<Props> = ({ title, image, subtitle, codeLink, demoLink, features }) => {
  return (
    <ProjectContainer>
      <ProjectImage>
        <img src={image} alt={title} />
      </ProjectImage>
      <ProjectDesc>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectSubtitle>{subtitle}</ProjectSubtitle>

        <ProjectLinks>
          {codeLink ? (
            <Link
              variant="secondaryButton"
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              primaryColor={theme.colors.primary[0]}
            >
              View Code
            </Link>
          ) : (
            <NoLink>
              <FaEyeSlash />
              <span>Private Code</span>
            </NoLink>
          )}
          {demoLink ? (
            <Link
              variant="primaryButton"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              primaryColor={theme.colors.primary[0]}
            >
              View Demo
            </Link>
          ) : (
            <NoLink>
              <FaEyeSlash />
              <span>No Demo</span>
            </NoLink>
          )}
        </ProjectLinks>
        <ProjectFeatures>
          {features.map(feature => (
            <li key={uuid()}>{feature}</li>
          ))}
        </ProjectFeatures>
      </ProjectDesc>
    </ProjectContainer>
  );
};

export default Project;

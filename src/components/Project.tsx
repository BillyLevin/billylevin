import * as React from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

interface Props {
  title: string;
  image: string;
  url: string;
}

interface ImageProps {
  url: string;
}

const ProjectContainer = styled.div<LinkProps>`
  flex: 0 0 30%;
  margin: 3.2rem;
  text-decoration: none;
  outline: 0;

  &:hover div:first-child::after,
  &:focus div:first-child::after {
    opacity: 0.7;
  }
`;

const ProjectImage = styled.div<ImageProps>`
  background-image: ${props => `url(${props.url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: red;
  height: 30rem;
  border-radius: 5px;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.2;
    border-radius: 5px;
    transition: opacity 0.3s;
  }
`;

const ProjectTitle = styled.h3`
  text-align: center;
  color: ${props => props.theme.colors.light[0]};
  margin-top: 1.6rem;
`;

const Project: React.FC<Props> = ({ title, image, url }) => {
  return (
    <ProjectContainer as={Link} to={url}>
      <ProjectImage url={image} />
      <ProjectTitle>{title}</ProjectTitle>
    </ProjectContainer>
  );
};

export default Project;

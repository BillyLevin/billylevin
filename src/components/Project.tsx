import * as React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  image: string;
  description: string;
}

const ProjectContainer = styled.div`
  max-width: 50rem;

  img {
    width: 100%;
    border-radius: 3px;
  }
`;

const ProjectTitle = styled.h3`
  text-align: center;
  color: ${props => props.theme.colors.light[0]};
  margin-top: 1.6rem;
`;

const Project: React.FC<Props> = ({ title, image, description }) => {
  return (
    <ProjectContainer>
      <img src={image} alt={title} />
      <ProjectTitle>ONE-MENU Landing Page</ProjectTitle>
    </ProjectContainer>
  );
};

export default Project;

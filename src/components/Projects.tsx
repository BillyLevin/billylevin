import * as React from "react";
import styled from "styled-components";
import oneMenuImg from "../img/one-menu.png";
import Project from "./Project";
import SectionHeading from "./SectionHeading";
import SectionSubheading from "./SectionSubheading";

const ProjectsContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.primary[0]};
  padding: 3.2rem;
`;

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <SectionHeading variant="light">My Projects</SectionHeading>
      <SectionSubheading variant="light">
        Here's a few things I've built so far...
      </SectionSubheading>
      <Project
        title="ONE-MENU Landing Page"
        image={oneMenuImg}
        description="jifjif"
      />
    </ProjectsContainer>
  );
};

export default Projects;

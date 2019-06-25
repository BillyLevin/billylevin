import * as React from 'react';
import styled from 'styled-components';
import booklistImg from '../img/booklist-thumbnail.png';
import mealplannerImg from '../img/mealplanner-thumbnail.png';
import oneMenuImg from '../img/one-menu.png';
import Project from './Project';
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';

const ProjectsContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.primary[0]};
  padding: 3.2rem;
`;

const ProjectsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <SectionHeading variant="light">My Projects</SectionHeading>
      <SectionSubheading variant="light">
        Here's a few things I've built so far...
      </SectionSubheading>
      <ProjectsGrid>
        <Project title="ONE-MENU Landing Page" image={oneMenuImg} url="/one-menu" />
        <Project title="ONE-MENU Landing Page" image={oneMenuImg} url="/one-menu" />
        <Project title="React Booklist" image={booklistImg} url="/one-menu" />
        <Project title="MealPlanner" image={mealplannerImg} url="/one-menu" />
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;

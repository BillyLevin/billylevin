import * as React from 'react';
import styled from 'styled-components';
import booklistImg from '../img/booklist-thumbnail.png';
import gymtrackerImg from '../img/gymtracker-thumbnail.png';
import mealplannerImg from '../img/mealplanner-thumbnail.png';
import oneMenuImg from '../img/one-menu.png';
import Project from './Project';
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';

const ProjectsContainer = styled.div`
  background-color: ${props => props.theme.colors.light[0]};
  margin: 0 auto;
  padding: 3.2rem;
  max-width: 130rem;
`;

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <SectionHeading textColor="dark">Projects</SectionHeading>
      <SectionSubheading textColor="dark">
        Here's a few things I've built so far...
      </SectionSubheading>
      <Project
        title="GymTracker"
        image={gymtrackerImg}
        url="/one-menu"
        subtitle="Full stack app allowing you to track your exercises and meals"
        codeLink="https://github.com/billylevin/gymtracker"
        demoLink="https://www.gymtracker.xyz/"
        features={[
          'A fully responsive navigation system (with a hamburger menu)',
          'A multi-step form that makes use of local storage so a user can pick up from where they left off',
          'Parallax scrolling effect to showcase different features of the app in one location',
          'Implemented unit tests on appropriate functions',
          'Smooth scrolling navigation to different parts of the page',
          'HTML emails',
        ]}
      />
      <Project
        title="ONE-MENU Landing Page"
        image={oneMenuImg}
        url="/one-menu"
        subtitle="Full stack app allowing you to track your exercises and meals"
        demoLink="https://friendly-goodall-8021fb.netlify.com/"
        features={[
          'A fully responsive navigation system (with a hamburger menu)',
          'A multi-step form that makes use of local storage so a user can pick up from where they left off',
          'Parallax scrolling effect to showcase different features of the app in one location',
          'Implemented unit tests on appropriate functions',
          'Smooth scrolling navigation to different parts of the page',
          'HTML emails',
        ]}
      />
      <Project
        title="React Booklist"
        image={booklistImg}
        url="/one-menu"
        subtitle="Full stack app allowing you to track your exercises and meals"
        features={[
          'A fully responsive navigation system (with a hamburger menu)',
          'A multi-step form that makes use of local storage so a user can pick up from where they left off',
          'Parallax scrolling effect to showcase different features of the app in one location',
          'Implemented unit tests on appropriate functions',
          'Smooth scrolling navigation to different parts of the page',
          'HTML emails',
        ]}
      />
      <Project
        title="MealPlanner"
        image={mealplannerImg}
        url="/mealplanner"
        subtitle="Full stack app allowing you to track your exercises and meals"
        features={[
          'A fully responsive navigation system (with a hamburger menu)',
          'A multi-step form that makes use of local storage so a user can pick up from where they left off',
          'Parallax scrolling effect to showcase different features of the app in one location',
          'Implemented unit tests on appropriate functions',
          'Smooth scrolling navigation to different parts of the page',
          'HTML emails',
        ]}
      />
    </ProjectsContainer>
  );
};

export default Projects;

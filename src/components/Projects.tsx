import * as React from 'react';
import styled from 'styled-components';
import booklistImg from '../img/booklist-thumbnail.png';
import gymtrackerImg from '../img/gymtracker-thumbnail.png';
import mealplannerImg from '../img/mealplanner-thumbnail.png';
import oneMenuImg from '../img/one-menu-thumbnail.png';
import Project from './Project';
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';

interface Props {
  projectsRef: React.MutableRefObject<null>;
}

const ProjectsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.light[0]};
  margin: 0 auto;
  padding: 3.2rem;
  max-width: 150rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.breakpoints.medium}) {
    padding: 1.6rem;
  }
`;

const Projects: React.FC<Props> = ({ projectsRef }) => {
  return (
    <ProjectsContainer ref={projectsRef}>
      <SectionHeading textColor="dark">Projects</SectionHeading>
      <SectionSubheading textColor="dark">
        Here's a few things I've built so far...
      </SectionSubheading>
      <Project
        title="GymTracker"
        image={gymtrackerImg}
        subtitle="Full stack app allowing you to track your exercises and meals"
        codeLink="https://github.com/billylevin/gymtracker"
        demoLink="https://www.gymtracker.xyz/"
        features={[
          'Built using NextJS, GraphQL/Apollo, Express, Typeorm, PostgresQL, TypeGraphQL',
          'Full user authentication using sessions and cookies',
          'Both frontend and backend form validation with Formik and Yup',
          'Yarn Workspace monorepo deployed to DigitalOcean using Docker',
          'Uses Redis to store sessions',
        ]}
      />
      <Project
        title="ONE-MENU Landing Page"
        image={oneMenuImg}
        subtitle="Frontend for the ONE-MENU website"
        features={[
          'Built using Gatsby for React',
          'A multi-step form that makes use of local storage so a user can pick up from where they left off',
          'Parallax scrolling effect to showcase different features of the app in one location',
          'Implemented unit tests on appropriate functions with Enzyme/Jest',
          'Smooth scrolling navigation to different parts of the page',
          'Used Storybook to develop UI components in isolation',
        ]}
      />
      <Project
        title="React Booklist"
        image={booklistImg}
        subtitle="Frontend app for managing your books"
        codeLink="https://github.com/billylevin/react-booklist"
        demoLink="https://billylevin.github.io/react-booklist/"
        features={[
          'Built with React and SCSS for custom styling',
          'Able to create and edit books on your book list',
          'Able to add and delete books on your wishlist',
          "Uses local storage to store the user's books",
          'Responsive design',
        ]}
      />
      <Project
        title="MealPlanner"
        image={mealplannerImg}
        subtitle="Frontend meal planning app "
        codeLink="https://github.com/BillyLevin/mealplanner"
        demoLink="https://billylevin.github.io/mealplanner/"
        features={[
          'Built with the module design pattern in JavaScript',
          'Can create ingredients and meals, and add meals to specific days',
          'Keeps track of total calories and protein per meal and per day',
          'Uses local storage to keep track of all the necessary data for when the user revisits the page',
          'SCSS used for custom styles',
        ]}
      />
    </ProjectsContainer>
  );
};

export default Projects;

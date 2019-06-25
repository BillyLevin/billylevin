import * as React from 'react';
import ProjectOverview from '../components/ProjectOverview';
import mainImg from '../img/one-menu-main.png';

const OneMenu: React.FC = () => {
  return (
    <ProjectOverview
      primaryColor="#fcd230"
      secondaryColor="#eee"
      tagColor="#222"
      title="ONE-MENU Landing Page"
      technologies={[
        'React',
        'Gatsby',
        'Storybook',
        'HTML5',
        'SCSS',
        'Bitbucket',
        'Enzyme',
        'Jest',
        'Webpack',
      ]}
      mainImg={mainImg}
    >
      <>
        <p>
          During my internship at ONE-MENU, I created a new landing page for their website. There
          were many challenges and problems to solve, and I think this helped me to become a much
          better developer. I worked with many new technologies such as Gatsby, Storybook, Enzyme,
          and Jest, and got my first real taste of what it was like to use Git in a professional
          collaborative environment.
        </p>
        <br />
        <h3>Project Features</h3>
        <ul>
          <li>A fully responsive navigation system (with a hamburger menu)</li>
          <li>
            A multi-step form that makes use of local storage so a user can pick up from where they
            left off
          </li>
          <li>
            Parallax scrolling effect to showcase different features of the app in one location
          </li>
          <li>Implemented unit tests on appropriate functions</li>
          <li>Smooth scrolling navigation to different parts of the page</li>
          <li>HTML emails</li>
        </ul>
        <br />
        <h3>Problems and Solutions</h3>
        <ul>
          <li>hello</li>
        </ul>
      </>
    </ProjectOverview>
  );
};

export default OneMenu;

import * as React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  color: ${props => props.theme.colors.dark[0]};
`;

const Title = styled.h3`
  text-transform: uppercase;
  margin-bottom: 3.2rem;
`;

const Table = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: 1;
`;

const ColTitle = styled.h4`
  margin-bottom: 3.2rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.light[0]};
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 3rem;
    height: 2px;
    background-color: ${props => props.theme.colors.light[0]};
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: calc(100% + 1.6rem - 1px);
  }
`;

const List = styled.ul`
  list-style: none;
  font-weight: 400;

  li {
    margin-bottom: 0.8rem;
  }
`;

const Skills: React.FC = () => {
  return (
    <Container>
      <Table>
        <Col>
          <ColTitle>Frontend</ColTitle>
          <List>
            <li>HTML5</li>
            <li>CSS3 &amp; SCSS</li>
            <li>ES6 JavaScript</li>
            <li>React / Gatsby / NextJS</li>
            <li>Styled Components</li>
            <li>Formik</li>
          </List>
        </Col>
        <Col>
          <ColTitle>Backend</ColTitle>
          <List>
            <li>Node.js</li>
            <li>Express.js </li>
            <li>GraphQL</li>
            <li>PostgreSQL</li>
            <li>TypeORM</li>
          </List>
        </Col>
        <Col>
          <ColTitle>Tools</ColTitle>
          <List>
            <li>Version control (Git)</li>
            <li>TypeScript</li>
            <li>Yarn</li>
            <li>Docker</li>
            <li>Storybook</li>
            <li>Redis</li>
            <li>Enzyme / Jest</li>
          </List>
        </Col>
      </Table>
    </Container>
  );
};

export default Skills;

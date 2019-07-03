import * as React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styled from 'styled-components';

interface Props {
  projectsRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: ${props => props.theme.colors.light[0]};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 1.6rem;
  }
`;
const Button = styled.button`
  background: transparent;
  border: 0;
  color: ${props => props.theme.colors.light[0]};
  cursor: pointer;
  width: 3.2rem;
  height: 3.2rem;
  transition: color 0.3s;
  outline: 0;

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.colors.dark[1]};
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ProjectsLink: React.FC<Props> = ({ projectsRef }) => {
  const handleClick = () => {
    window.scrollTo({
      left: 0,
      top: projectsRef.current!.offsetTop - 60,
      behavior: 'smooth',
    });
  };
  return (
    <Container>
      <span>View Projects</span>
      <Button onClick={handleClick}>
        <FaChevronDown />
      </Button>
    </Container>
  );
};

export default ProjectsLink;

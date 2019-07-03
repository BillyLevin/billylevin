import * as React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components';
import { theme } from '../theme';
import { hexToRgb } from '../utils/hexToRgb';

const darkRgb = hexToRgb(theme.colors.dark[0]);

const Button = styled.button`
  position: fixed;
  bottom: 1.6rem;
  left: 1.6rem;
  width: 4.8rem;
  height: 4.8rem;
  outline: 0;
  border: 0;
  border-radius: 2.4rem;
  background-color: white;
  padding: 0.8rem;
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: ${props => props.theme.breakpoints.small}) {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    padding: 0.4rem;
  }

  &:active,
  &:focus,
  &:hover {
    box-shadow: ${props => `0 0 1rem rgba(${darkRgb!.r}, ${darkRgb!.b}, ${darkRgb!.g}, 0.3)`};
  }

  svg {
    width: 100%;
    height: 100%;
    color: ${props => props.theme.colors.primary[0]};
  }
`;

const BackToTop: React.FC = () => {
  return (
    <Button
      onClick={() =>
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth',
        })
      }
    >
      <FaChevronUp />
    </Button>
  );
};

export default BackToTop;

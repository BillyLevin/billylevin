import * as React from 'react';
import styled from 'styled-components';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  primaryColor: string;
}

interface StyleProps {
  primaryColor: string;
}

const StyledLink = styled.a<StyleProps>`
  outline: 0;

  &:link,
  &:visited {
    background-color: ${props => props.theme.colors.light[0]};
    color: ${props => props.primaryColor};
    border: ${props => '2px solid ' + props.primaryColor};
    text-decoration: none;
    padding: 0.8rem 1.6rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    transition: all 0.3s;
    border-radius: 3px;
  }

  &:hover,
  &:focus,
  &:active {
    color: ${props => props.theme.colors.light[0]};
    background-color: ${props => props.primaryColor};
  }
`;

const Link: React.FC<Props> = props => {
  return <StyledLink {...props} />;
};

export default Link;

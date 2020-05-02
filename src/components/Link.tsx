import * as React from 'react';
import styled from 'styled-components';
import { alterColor } from '../utils/alterColor';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  primaryColor: string;
  variant: 'primaryButton' | 'secondaryButton' | 'link';
}

interface StyleProps {
  primaryColor: string;
  variant: 'primaryButton' | 'secondaryButton' | 'link';
}

const getInitialBackgroundColor = (props: any) => {
  const { variant } = props;

  if (variant === 'primaryButton') {
    return props.primaryColor;
  }

  if (variant === 'secondaryButton') {
    return props.theme.colors.light[0];
  }

  return 'transparent';
};

const getHoverBackgroundColor = (props: any) => {
  const { variant } = props;

  if (variant === 'primaryButton') {
    return alterColor(props.primaryColor, -25);
  }

  if (variant === 'secondaryButton') {
    return props.primaryColor;
  }

  return 'transparent';
};

const StyledLink = styled.a<StyleProps>`
  &:link,
  &:visited {
    background-color: ${getInitialBackgroundColor};
    color: ${(props) =>
      props.variant === 'primaryButton'
        ? props.theme.colors.light[0]
        : props.primaryColor};
    border: ${(props) =>
      props.variant === 'link' ? 0 : '2px solid ' + props.primaryColor};
    text-decoration: ${(props) =>
      props.variant === 'link' ? 'underline' : 'none'};
    padding: ${(props) => (props.variant === 'link' ? 0 : '0.8rem 1.6rem')};
    text-transform: ${(props) =>
      props.variant === 'link' ? 'none' : 'uppercase'};
    font-size: ${(props) => (props.variant === 'link' ? '' : '1.2rem')};
    font-weight: 600;
    transition: all 0.3s;
    border-radius: 3px;
  }

  &:hover,
  &:focus,
  &:active {
    color: ${(props) =>
      props.variant === 'link'
        ? alterColor(props.primaryColor, -25)
        : props.theme.colors.light[0]};
    background-color: ${getHoverBackgroundColor};
    border-color: ${(props) =>
      props.variant === 'primaryButton'
        ? alterColor(props.primaryColor, -25)
        : props.primaryColor};
  }
`;

const Link: React.FC<Props> = (props) => {
  return <StyledLink {...props} />;
};

export default Link;

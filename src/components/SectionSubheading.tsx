import * as React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  textColor: string;
}

const Heading = styled.h3<Props>`
  color: ${props => props.theme.colors[props.textColor][0]};
  text-align: center;
  font-size: 2.4rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 3.2rem;

  @media only screen and (max-width: ${props => props.theme.breakpoints.medium}) {
    font-size: 1.8rem;
    margin-bottom: 1.6rem;
  }
`;

const SectionSubheading: React.FC<Props> = props => {
  return <Heading {...props} />;
};

export default SectionSubheading;

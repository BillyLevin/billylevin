import * as React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  textColor: string;
}

const Heading = styled.h2<Props>`
  color: ${props => props.theme.colors[props.textColor][0]};
  text-align: center;
  font-size: 4.8rem;
  margin-bottom: 3.2rem;

  @media only screen and (max-width: ${props => props.theme.breakpoints.medium}) {
    font-size: 4rem;
  }
`;

const SectionHeading: React.FC<Props> = props => {
  return <Heading {...props} />;
};

export default SectionHeading;

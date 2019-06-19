import * as React from "react";
import styled from "styled-components";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: "primary" | "dark" | "light";
}

const Heading = styled.h3<Props>`
  color: ${props =>
    (props.variant === "primary" && props.theme.colors.primary[0]) ||
    (props.variant === "dark" && props.theme.colors.dark[0]) ||
    (props.variant === "light" && props.theme.colors.light[0])};
  text-align: center;
  font-size: 2.4rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 3.2rem;
`;

const SectionSubheading: React.FC<Props> = props => {
  return <Heading {...props} />;
};

export default SectionSubheading;

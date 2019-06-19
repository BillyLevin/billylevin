import * as React from "react";
import styled from "styled-components";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: "primary" | "dark" | "light";
}

const Heading = styled.h2<Props>`
  color: ${props =>
    (props.variant === "primary" && props.theme.colors.primary[0]) ||
    (props.variant === "dark" && props.theme.colors.dark[0]) ||
    (props.variant === "light" && props.theme.colors.light[0])};
  text-align: center;
  font-size: 4.8rem;
  margin-bottom: 3.2rem;
`;

const SectionHeading: React.FC<Props> = props => {
  return <Heading {...props} />;
};

export default SectionHeading;

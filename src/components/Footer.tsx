import * as React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.dark[0]};
  color: ${props => props.theme.colors.light[0]};
  text-align: center;
  padding: 1.6rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <span>&copy; 2019 Billy Levin</span>
    </FooterContainer>
  );
};

export default Footer;

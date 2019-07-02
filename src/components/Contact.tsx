import * as React from 'react';
import { FaEnvelope, FaPhone, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import SectionSubheading from './SectionSubheading';

const ContactContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.light[0]};
  padding: 3.2rem;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.4rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.2rem;

  &:first-child svg {
    transform: rotate(90deg);
  }

  svg {
    color: ${props => props.theme.colors.primary[0]};
    width: 6.4rem;
    height: 6.4rem;
    margin-right: 3.2rem;
  }

  span {
    color: ${props => props.theme.colors.primary[0]};
    font-size: 4rem;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <SectionHeading textColor="dark">Get in touch</SectionHeading>
      <SectionSubheading textColor="dark">Here's some easy ways to contact me...</SectionSubheading>
      <ContactList>
        <ContactItem>
          <FaPhone />
          <span>+44 74460 20950</span>
        </ContactItem>
        <ContactItem>
          <FaEnvelope />
          <span>billy.levin97@gmail.com</span>
        </ContactItem>
        <ContactItem>
          <FaTwitter />
          <span>billy_levin97</span>
        </ContactItem>
      </ContactList>
    </ContactContainer>
  );
};

export default Contact;

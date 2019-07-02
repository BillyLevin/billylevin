import * as React from 'react';
import styled from 'styled-components';

interface Props {
  marginLeft?: string;
}

const AttributesList = styled.ul`
  color: ${props => props.theme.colors.light[0]};
  background-color: ${props => props.theme.colors.dark[0]};
  padding: 2.4rem;
  border-radius: 3px;
  min-width: 50rem;
  text-align: left;
`;

const AttributesItem = styled.li<Props>`
  list-style: none;
  margin-left: ${props => props.marginLeft || 0};
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const Keyword = styled.span`
  color: ${props => props.color};
`;

const Attributes: React.FC = () => {
  return (
    <AttributesList>
      <AttributesItem>
        const <Keyword color="#23b9ff">attributes</Keyword> = &#91;
      </AttributesItem>
      <AttributesItem marginLeft="1.6rem">
        <Keyword color="#f49e42">'Web Developer',</Keyword>
      </AttributesItem>
      <AttributesItem marginLeft="1.6rem">
        <Keyword color="#f49e42">'Enthusiastic learner',</Keyword>
      </AttributesItem>
      <AttributesItem marginLeft="1.6rem">
        <Keyword color="#f49e42">'Team player',</Keyword>
      </AttributesItem>
      <AttributesItem>&#93;</AttributesItem>
    </AttributesList>
  );
};

export default Attributes;

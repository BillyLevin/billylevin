import * as React from "react";
import {
  FaCss3Alt,
  FaGit,
  FaHtml5,
  FaJs,
  FaNode,
  FaReact,
  FaSass
} from "react-icons/fa";
import styled from "styled-components";

const TechnologiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  svg {
    width: 6.4rem;
    height: 6.4rem;
    margin: 0 2.4rem;
  }
`;

const Technologies: React.FC = () => {
  return (
    <TechnologiesGrid>
      <FaHtml5 color="#f16529" />
      <FaCss3Alt color="#264de4" />
      <FaJs color="#f0db4f" />
      <FaReact color="#61dbfb" />
      <FaNode color="#3C873A" />
      <FaGit color="#f1502f " />
      <FaSass color="#cd6799" />
    </TechnologiesGrid>
  );
};

export default Technologies;

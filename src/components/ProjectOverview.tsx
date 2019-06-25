import * as React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  primaryColor: string;
  secondaryColor: string;
  tagColor: string;
  technologies?: string[];
  mainImg: string;
}

interface StyleProps {
  primaryColor: string;
  secondaryColor: string;
}

interface ImgProps {
  borderColor: string;
}

interface TechProps extends StyleProps {
  tagColor: string;
}

interface DescProps {
  primaryColor: string;
}

const Header = styled.header<StyleProps>`
  background-color: ${props => props.primaryColor};
  height: 30rem;
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;

  h1 {
    color: ${props => props.secondaryColor};
    text-align: center;
    font-size: 4.5rem;
    margin-bottom: 6rem;
  }
`;

const ContentContainer = styled.article`
  margin: 3.2rem auto;
  padding: 3.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 120rem;
`;

const Techs = styled.div<TechProps>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3.2rem;

  div {
    margin: 0.8rem;
    color: ${props => props.tagColor};
    background-color: ${props => props.primaryColor};
    padding: 0.8rem;
    font-weight: 400;
    border-radius: 3px;
  }
`;

const MainImage = styled.div<ImgProps>`
  border: ${props => '5px solid ' + props.borderColor};
  border-radius: 3px;
  margin-bottom: 3.2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Description = styled.div<DescProps>`
  ul {
    list-style: none;
  }

  ul li::before {
    content: '\\2022';
    width: 2rem;
    margin-left: -2rem;
    font-size: 2.5rem;
    display: inline-block;
    color: ${props => props.primaryColor};
    font-weight: bold;
  }

  h3 {
    color: ${props => props.theme.colors.dark[0]};
    margin-bottom: 1.6rem;
  }
`;

const ProjectOverview: React.FC<Props> = ({
  primaryColor,
  secondaryColor,
  tagColor,
  title,
  technologies,
  mainImg,
  children,
}) => {
  return (
    <>
      <Header primaryColor={primaryColor} secondaryColor={secondaryColor}>
        <h1>{title}</h1>
      </Header>

      <ContentContainer>
        <MainImage borderColor={primaryColor}>
          <img src={mainImg} alt={title} />
        </MainImage>
        {technologies && technologies.length && (
          <Techs primaryColor={primaryColor} secondaryColor={secondaryColor} tagColor={tagColor}>
            {technologies.map(tech => (
              <div key={`${tech + Date.now()}`}>{tech}</div>
            ))}
          </Techs>
        )}
        <Description primaryColor={primaryColor}>{children}</Description>
      </ContentContainer>
    </>
  );
};

export default ProjectOverview;

import * as React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, SIDEBAR_WIDTH, NAVBAR_HEIGHT } from '../styles/vars';
import NavigationMenu from '../components/NavigationMenu';
import Section from '../components/Section';

interface Props {
  className?: string;
}

const HeroImage = styled.img`
  width: 100%;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    display: none;
  }
`;

const AppContainer = styled.div`
  margin-left: ${SIDEBAR_WIDTH};

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin-left: 0;
    margin-top: ${NAVBAR_HEIGHT};
  }
`;

const PortfolioPage: React.SFC<Props> = ({ className }) => (
  <div className={className}>
    <NavigationMenu />
    <AppContainer>
      <HeroImage id="main" src="images/hero.jpg" />
      <Section id="about" title="About" />
      <Section id="experience" title="Experience" />
      <Section id="projects" title="Projects" />
      <Section id="skills" title="Skills" />
      <Section id="education" title="Education" />
      <Section id="contact" title="Contact" />
    </AppContainer>
  </div>
);

export default PortfolioPage;

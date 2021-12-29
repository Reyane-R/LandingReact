import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Reyane Remache<br />
          My Portfolio
        </SectionTitle>
        <SectionText>
         A young Developer with a passion for all things tech
        </SectionText>
        <Button onClick={props.handleClick}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
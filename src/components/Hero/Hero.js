import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcom to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Ayub Bodirkhonov. I am a Front-end Web Developer. One of my
        purpose is to build beautiful websites to make Users life easier!
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://www.linkedin.com/in/ayub-bodirkhonov-5b582b149/")
        }
      >
        My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

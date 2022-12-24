import "./skills.styles.scss";
import SkillsLogo from "./skills-logo/skills-logo.component";
import SkillsBar from "./skills-bar/skills-bar.component";
// import { useState } from "react";

const Skills = () => {
  return (
    <div id="skills" className="section-skills">
      <SkillsBar />
      <SkillsLogo />
    </div>
  );
};

export default Skills;

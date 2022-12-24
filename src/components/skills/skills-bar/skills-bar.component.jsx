import "./skills-bar.styles.scss";

const SkillsBar = () => {
  return (
    <div className="skills-text-container">
      <h2>Skills</h2>
      <div className="skills">
        <div className="skill">
          <div className="skill-name">Html</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="80%"
              style={{ maxWidth: "80%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">Css</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="70%"
              style={{ maxWidth: "70%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">JavaScript</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="60%"
              style={{ maxWidth: "60%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">Sass</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="50%"
              style={{ maxWidth: "50%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">React</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="70%"
              style={{ maxWidth: "70%" }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">FireBase</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="40%"
              style={{ maxWidth: "40%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsBar;

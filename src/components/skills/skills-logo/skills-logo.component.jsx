import "./skills-logo.styles.scss";
import { logoUrls } from "../../../assets/documentation/document";
import { Fragment } from "react";
const SkillsLogo = () => {
  return (
    <Fragment>
      {logoUrls.map(
        ({ htmlUrl, cssUrl, jsUrl, sassUrl, firebaseUrl, reactUrl, id }) => (
          <div key={id} className="skills-logo-container">
            <div className="cubespinner">
              <div className="face1">
                <img src={htmlUrl} alt="html" />
              </div>
              <div className="face2">
                <img src={cssUrl} alt="css" />
              </div>
              <div className="face3">
                <img src={jsUrl} alt="js" />
              </div>
              <div className="face4">
                <img src={sassUrl} alt="sass" />
              </div>
              <div className="face5">
                <img src={reactUrl} alt="react" />
              </div>
              <div className="face6">
                <img src={firebaseUrl} alt="firebase" />
              </div>
            </div>
          </div>
        )
      )}
    </Fragment>
  );
};

export default SkillsLogo;

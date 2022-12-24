import Document from "../document/document.component";
import myImage2 from "../../assets/content-img/myImage2.png";
import "./about.styles.scss";

const About = () => {
  return (
    <div className="section-about" id="about">
      <img src={myImage2} className="about-image" alt="myImage2" />
      <Document />
    </div>
  );
};

export default About;

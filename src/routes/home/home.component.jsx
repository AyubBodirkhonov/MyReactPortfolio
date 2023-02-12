import "./home.styles.scss";
import github from "../../assets/content-img/github.png";
import instagram from "../../assets/content-img/instagram.png";
import linkedin from "../../assets/content-img/linkedin.png";
import twitter from "../../assets/content-img/twitter.png";
import gmail from "../../assets/content-img/gmail.png";

const Home = () => {
  return (
    <div className="header" id="home">
      <div className="header-image">
        <div className="header-text-container">
          <h1>
            <span>I'm Ayub</span>
            <span> Frontend Web Developer.</span>
          </h1>
        </div>
      </div>
      <div className="icon-bar">
        <a
          href="https://github.com/AyubBodirkhonov"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="https://www.instagram.com/ayubb_official"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/ayub-bodirkhonov-5b582b149/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://twitter.com/ABodirkhonov"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
        <a
          href="mailto:ayub.bodirkhonov98@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gmail} alt="gmail" />
        </a>
      </div>
    </div>
  );
};

export default Home;

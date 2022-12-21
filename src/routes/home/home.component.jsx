
import DropDownMenu from "../../components/dropdown-menu/dropdown.component";

import "./home.styles.scss";
const Home = () => {
  return (
    <div className="header-container">
      <DropDownMenu />
      <div className="background-image">
        <div className="background-text">
          <h1>I'm Ayub Dev.</h1>
          <p>Front End React Web Developer.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

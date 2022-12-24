import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-scroll";
import { ImHome } from "react-icons/im";
import { RiContactsLine } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";
import { OpenMenuContext } from "../../contexts/open-menu.context";
import MenuIcon from "../../components/menu-icon/menu-icon.component";
import "./navigation.styles.scss";

const Navigation = () => {
  const { isMenuOpen } = useContext(OpenMenuContext);
  return (
    <Fragment>
      <MenuIcon />
      {isMenuOpen && (
        <div className="navigation">
          <div className="myImage"></div>
          <div className="nav-links-container">
            <Link
              className="nav-link"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              <div className="icon-container">
                <ImHome className="icons" />
                <span>Home</span>
              </div>
            </Link>
            <Link
              className="nav-link"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              <div className="icon-container">
                <RiContactsLine className="icons" />
                <span>About</span>
              </div>
            </Link>
            <Link
              className="nav-link"
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              <div className="icon-container">
                <BsTools className="icons" />
                <span>Skills</span>
              </div>
            </Link>
            <Link
              className="nav-link"
              to="work"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              <div className="icon-container">
                <BiTask className="icons" />
                <span>Works</span>
              </div>
            </Link>
            <Link
              className="nav-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              <div className="icon-container">
                <MdContactMail className="icons" />
                <span>Contact</span>
              </div>
            </Link>
          </div>
        </div>
      )}

      <Outlet />
    </Fragment>
  );
};

export default Navigation;

import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { RiContactsLine } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";

import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="myImage"></div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            <div className="icon-container">
              <ImHome className="icons" />
              <span>Home</span>
            </div>
          </Link>
          <Link className="nav-link" to="/about">
            <div className="icon-container">
              <RiContactsLine className="icons" />
              <span>About</span>
            </div>
          </Link>
          <Link className="nav-link" to="/skills">
            <div className="icon-container">
              <BsTools className="icons" />
              <span>Skills</span>
            </div>
          </Link>
          <Link className="nav-link" to="/work">
            <div className="icon-container">
              <BiTask className="icons" />
              <span>Works</span>
            </div>
          </Link>
          <Link className="nav-link" to="/contact">
            <div className="icon-container">
              <MdContactMail className="icons" />
              <span>Contact</span>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

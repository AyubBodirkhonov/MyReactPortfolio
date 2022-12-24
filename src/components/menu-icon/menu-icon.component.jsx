// import { HiOutlineMenu } from "react-icons/hi";
import { OpenMenuContext } from "../../contexts/open-menu.context";
import { useContext } from "react";
import { Spin as Hamburger } from "hamburger-react";
import "./menu-icon.styles.scss";
const MenuIcon = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(OpenMenuContext);
  const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="menu-icon-container" onClick={toggleIsMenuOpen}>
      <Hamburger className="menu-icon" />
    </div>
  );
};

export default MenuIcon;

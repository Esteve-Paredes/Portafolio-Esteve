import { Link } from "react-router-dom";
import "./styles.css";
import { slide as Menu, State } from "react-burger-menu";
import { useState } from "react";

function BurguerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: State) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Menu right isOpen={isOpen} onStateChange={handleStateChange}>
      <Link id="home" to={"/"} onClick={closeMenu}>
        Home
      </Link>
      <Link id="about" to={"/about"} onClick={closeMenu}>
        About
      </Link>
      <Link id="resume" to={"/resume"} onClick={closeMenu}>
        Resume
      </Link>
      <Link id="projects" to={"/projects"} onClick={closeMenu}>
        Projects
      </Link>
    </Menu>
  );
}

export default BurguerMenu;

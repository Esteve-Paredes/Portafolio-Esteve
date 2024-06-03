import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isVisited, setIsVisited] = useState(false);

  const onClick = (event: React.MouseEvent) => {
    console.log(event.currentTarget.id);
    setIsVisited(!isVisited);
  };

  return (
    <nav className="h-full">
      <div className="hidden">
        <button className="text-white">HM</button>
      </div>
      <ul className="flex h-full w-1/2 flex-row xl:w-2/5">
        <li className="flex h-full w-2/5">
          <Link
            id="home"
            to={"/"}
            className={`flex h-full w-full items-center justify-center hover:text-neutral-400 ${isVisited ? "text-custom-bone-main" : "text-white"}`}
            onClick={onClick}
          >
            Home
          </Link>
        </li>
        <li className="flex h-full w-2/5">
          <Link
            id="about"
            to={"/about"}
            className={`flex h-full w-full items-center justify-center hover:text-neutral-400 ${isVisited ? "text-custom-bone-main" : "text-white"}`}
            onClick={onClick}
          >
            About
          </Link>
        </li>
        <li className="flex h-full w-2/5">
          <Link
            id="resume"
            to={"/resume"}
            className={`flex h-full w-full items-center justify-center hover:text-neutral-400 ${isVisited ? "text-custom-bone-main" : "text-white"}`}
            onClick={onClick}
          >
            Resume
          </Link>
        </li>
        <li className="flex h-full w-2/5">
          <Link
            id="projects"
            to={"/projects"}
            className={`flex h-full w-full items-center justify-center hover:text-neutral-400 ${isVisited ? "text-custom-bone-main" : "text-white"}`}
            onClick={onClick}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

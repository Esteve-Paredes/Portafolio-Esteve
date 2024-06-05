import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isVisited, setIsVisited] = useState(false);

  const onClick = (event: React.MouseEvent) => {
    console.log(event.currentTarget.id);
    setIsVisited(!isVisited);
  };

  return (
    <nav className="h-full w-full max-w-[1024px]">
      <div className="hidden">
        <button className="text-white">HM</button>
      </div>
      <ul className="flex h-full flex-row ">
        <li className="flex h-full">
          <Link
            id="home"
            to={"/"}
            className={`flex h-full w-full items-center justify-center hover:text-neutral-400 sm:px-8 ${isVisited ? "text-custom-bone-main" : "text-white"}`}
            onClick={onClick}
          >
            Home
          </Link>
        </li>
        <li className="flex h-full">
          <Link
            id="about"
            to={"/about"}
            className={`flex h-full w-full items-center justify-center hover:text-neutral-400 sm:px-8 ${isVisited ? "text-custom-bone-main" : "text-white"}`}
            onClick={onClick}
          >
            About
          </Link>
        </li>
        <li className="flex h-full">
          <Link
            id="resume"
            to={"/resume"}
            className={`flex h-full w-full items-center justify-center hover:text-neutral-400 sm:px-8 ${isVisited ? "text-custom-bone-main" : "text-white"}`}
            onClick={onClick}
          >
            Resume
          </Link>
        </li>
        <li className="flex h-full">
          <Link
            id="projects"
            to={"/projects"}
            className={`flex h-full w-full items-center justify-center hover:text-neutral-400 sm:px-8 ${isVisited ? "text-custom-bone-main" : "text-white"}`}
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

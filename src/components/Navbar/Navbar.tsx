import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isVisited, setIsVisited] = useState(false);

  const onClick = (event: React.MouseEvent) => {
    console.log(event.currentTarget.id);
    setIsVisited(!isVisited);
  };

  return (
    <nav>
      <ul className="flex flex-row">
        <li className="flex h-12 w-28">
          <Link
            id="home"
            to={"/"}
            className={`flex h-full w-full items-center justify-center hover:text-blue-600 active:text-blue-900 ${isVisited ? "text-blue-500" : "text-white"}`}
            onClick={onClick}
          >
            Home
          </Link>
        </li>
        <li className="flex h-12 w-28">
          <Link
            id="about"
            to={"/about"}
            className={`flex h-full w-full items-center justify-center hover:text-blue-600 active:text-blue-900 ${isVisited ? "text-blue-500" : "text-white"}`}
            onClick={onClick}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

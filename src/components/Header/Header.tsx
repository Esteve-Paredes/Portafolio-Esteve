import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import BurguerMenu from "../BurguerMenu/BurguerMenu";
import Navbar from "../Navbar/Navbar";

function Header() {
  const { width } = useWindowDimensions();
  const isMobile = width !== null && width < 426;

  return (
    <header className="flex min-h-12 justify-center  bg-black sm:min-h-16">
      {isMobile ? <BurguerMenu /> : <Navbar />}
    </header>
  );
}

export default Header;

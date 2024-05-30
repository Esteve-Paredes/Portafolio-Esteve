import { useRef, useState } from "react";
import { Proyect } from "../../constants/proyects";
import iconsDown from "../../assets/line-angle-down-icon.svg";
import CardDetail from "../CardDetail/CardDetail";
import useClickOutside from "../../hooks/useClickOutSide";

interface PropProyect {
  proyect: Proyect;
}

function CardsProyects({ proyect }: PropProyect) {
  const [showDescription, setShowDescription] = useState(false);

  const exeptionRef = useRef<HTMLDivElement>(null);

  const refDetailDropDown = useClickOutside(() => setShowDescription(false));

  const handleToggleDropdown = () => {
    //console.log(exeptionRef.current?.contains(event.target as Node));
    setShowDescription(!showDescription);
  };

  return (
    <div
      className="relative grid grid-cols-1 gap-2 rounded-md "
      onClick={handleToggleDropdown}
      ref={refDetailDropDown}
    >
      <div className="flex cursor-pointer justify-between gap-4 rounded-md bg-stone-300 px-6">
        <img
          src={proyect.icon}
          alt="boardable"
          width={60}
          className=" mx-4 rounded-md"
        />
        <div className="w-full flex-col items-center px-4">
          <div className="py-2 font-poppins text-xl font-bold">
            {proyect.name}
          </div>
          <p className="py-2 font-poppins">{proyect.description}</p>
        </div>
        <div className="flex items-center">
          <img
            className={`${showDescription ? "rotate-90" : "rotate-0"} h-5`}
            src={iconsDown}
            alt="nav"
          />
        </div>
      </div>
      <CardDetail
        proyect={proyect}
        showDescription={showDescription}
        exeptionRef={exeptionRef}
      />
    </div>
  );
}

export default CardsProyects;

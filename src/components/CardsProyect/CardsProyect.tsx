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
      <div className="bg-custom-bone-toCard flex cursor-pointer justify-between gap-4 rounded-md">
        <img
          src={proyect.icon}
          alt="boardable"
          width={60}
          className=" mx-4 rounded-md"
        />
        <div className="my-2 flex w-full flex-col gap-1 px-2">
          <h3 className="font-poppins text-lg font-bold sm:text-xl">
            {proyect.name}
          </h3>
          <p className="font-poppins text-sm sm:text-base">
            {proyect.description}
          </p>
        </div>
        <div className="mx-5 flex items-center">
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

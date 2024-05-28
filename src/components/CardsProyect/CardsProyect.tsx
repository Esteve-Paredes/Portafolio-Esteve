import { useState } from "react";
import { Proyect } from "../../constants/proyects";
import { technologies } from "../../constants/technologies";
import iconsDown from "../../assets/line-angle-down-icon.svg";

interface PropProyect {
  proyect: Proyect;
}

function CardsProyects({ proyect }: PropProyect) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="relative grid grid-cols-1 gap-2 rounded-md "
      onClick={() => {
        setShowDescription(!showDescription);
      }}
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
            className={`${showDescription ? "rotate-0" : "rotate-90"} h-5`}
            src={iconsDown}
            alt="nav"
          />
        </div>
      </div>
      <div
        className={`w-full grid-cols-2 rounded-md bg-white ${showDescription ? "grid" : "hidden"}`}
      >
        <div className="grid grid-cols-1 gap-4 p-4">
          <div>
            <h2 className="font-poppins text-xl font-bold">Git Hub</h2>
            <a
              className="text-lg font-semibold text-blue-800 hover:text-blue-500"
              href={proyect.gitHub}
            >
              {proyect.name}
            </a>
          </div>
          <div>
            <h2 className="font-poppins text-xl font-bold">Link</h2>
            <a
              className="text-lg font-semibold text-blue-800 hover:text-blue-500"
              href={proyect.link}
            >
              {proyect.name}
            </a>
          </div>
        </div>
        <div className="p-4">
          <h2 className="font-poppins text-xl font-bold">Tecnologias</h2>
          <div className="flex gap-4 p-2">
            {proyect.technologies.map((nameTech) => {
              return technologies.map((tech, key) => {
                if (tech.name === nameTech) {
                  return (
                    <img
                      key={key}
                      src={tech.ruta}
                      alt={tech.name}
                      width={tech.withIcons}
                    />
                  );
                }
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsProyects;

import { useState } from "react";
import { Proyect } from "../../constants/proyects";
import { technologies } from "../../constants/technologies";

interface PropProyect {
  proyect: Proyect;
}

function CardsProyects({ proyect }: PropProyect) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative rounded-md"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <a href="#">
        <img src={proyect.imageBG} alt="boardable" className=" rounded-md" />
        <div
          className={`absolute bottom-0  w-full flex-col items-center rounded-b-md bg-black text-white ${isHover ? "flex" : "hidden"}`}
        >
          <div className="py-2 font-poppins text-xl font-bold">
            {proyect.name}
          </div>
          <p className="pb-2 font-poppins">{proyect.description}</p>
        </div>
      </a>
      <div
        className={`absolute left-0 top-0 gap-3 p-2 ${isHover ? "grid" : "hidden"}`}
      >
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
  );
}

export default CardsProyects;

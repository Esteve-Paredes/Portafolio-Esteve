import { Proyect } from "../../constants/proyects";
import { technologies } from "../../constants/technologies";
import LinksToProyect from "../LinksToProyect/LinksToProyect";

type PropCardDetail = {
  proyect: Proyect;
  showDescription: boolean;
};

function CardDetail({ proyect, showDescription }: PropCardDetail) {
  return (
    <div
      className={` grid-cols-2 rounded-md bg-white ${showDescription ? "grid" : "hidden"}`}
    >
      <div className="grid grid-cols-1 gap-4 p-4">
        <LinksToProyect
          name="Github"
          url={proyect.gitHub}
          label={proyect.gitHub}
        />
        <LinksToProyect
          name="Stio web"
          url={proyect.link}
          label={proyect.link}
        />
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
  );
}

export default CardDetail;

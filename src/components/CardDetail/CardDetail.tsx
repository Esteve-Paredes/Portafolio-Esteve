import { Proyect } from "../../constants/proyects";
import { technologies } from "../../constants/technologies";
import LinksToProyect from "../LinksToProyect/LinksToProyect";

type PropCardDetail = {
  proyect: Proyect;
  showDescription: boolean;
  exeptionRef: React.LegacyRef<HTMLDivElement> | undefined;
};

function CardDetail({ proyect, showDescription, exeptionRef }: PropCardDetail) {
  return (
    <div
      ref={exeptionRef}
      className={`grid-cols-2 gap-4 rounded-md bg-white p-4 ${showDescription ? "grid" : "hidden"}`}
    >
      <div className="grid grid-cols-1 gap-4 ">
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
      <div>
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

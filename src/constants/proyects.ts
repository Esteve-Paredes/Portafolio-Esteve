import boardable from "../assets/preview/boardable.png";

export type Proyect = {
  name: string;
  description: string;
  imageBG: string;
  technologies: string[];
};

export const proyects: Proyect[] = [
  {
    name: "Boardable",
    description: "Aplicacion de Registro de notas",
    imageBG: boardable,
    technologies: ["Typescript", "React", "Express", "Postgresql"],
  },
  {
    name: "Auth-Nest-Api",
    description: "Aplicacion de Registro de usuarios",
    imageBG: "",
    technologies: ["Typescript", "Nest", "Mongodb"],
  },
];

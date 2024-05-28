import icons1 from "../assets/icons-cards/web-code-icon.svg";
import icons2 from "../assets/icons-cards/api-icon.svg";
import icons3 from "../assets/icons-cards/web-development-icon.svg";

export type Proyect = {
  name: string;
  description: string;
  icon: string;
  gitHub: string;
  link: string;
  technologies: string[];
};

export const proyects: Proyect[] = [
  {
    name: "Boardable",
    description: "Aplicacion de Registro de notas",
    icon: icons1,
    gitHub: "https://github.com/Esteve-Paredes/boardable-client",
    link: "https://boardable-clien.netlify.app",
    technologies: ["Typescript", "React", "Express", "Postgresql"],
  },
  {
    name: "Auth Api Nest",
    description: "Aplicacion de Registro de usuarios",
    icon: icons2,
    gitHub: "https://github.com/Esteve-Paredes/auth-api-nest",
    link: "https://auth-api-nest-production.up.railway.app/api#/",
    technologies: ["Typescript", "Nest", "Mongodb"],
  },
  {
    name: "Juego Pokemon Vue",
    description: "Juego de adivinar el pokemon",
    icon: icons3,
    gitHub: "https://github.com/Esteve-Paredes/vue-game-poke",
    link: "https://app-game-pokemon-vue.netlify.app/",
    technologies: ["Typescript", "Vue"],
  },
];

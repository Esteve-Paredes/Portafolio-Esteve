import javascript from "../assets/Technologies/javascript.svg";
import typescript from "../assets/Technologies/typescript.svg";
import express from "../assets/Technologies/express.svg";
import golang from "../assets/Technologies/golang.svg";
import mongodb from "../assets/Technologies/mongodb.svg";
import mysql from "../assets/Technologies/mysql.svg";
import nest from "../assets/Technologies/nest-js.svg";
import node from "../assets/Technologies/node-js.svg";
import php from "../assets/Technologies/php.svg";
import postgresql from "../assets/Technologies/postgresql.svg";
import react from "../assets/Technologies/react-js.svg";
import vue from "../assets/Technologies/vue-js.svg";

type Tech = {
  name: string;
  ruta: string;
  with: number;
  withIcons: number;
};

export const technologies: Tech[] = [
  {
    name: "Javascript",
    ruta: javascript,
    with: 40,
    withIcons: 25,
  },
  {
    name: "Typescript",
    ruta: typescript,
    with: 40,
    withIcons: 25,
  },
  {
    name: "Express",
    ruta: express,
    with: 50,
    withIcons: 25,
  },
  {
    name: "Golang",
    ruta: golang,
    with: 70,
    withIcons: 25,
  },
  {
    name: "Mongodb",
    ruta: mongodb,
    with: 20,
    withIcons: 20,
  },
  {
    name: "Mysql",
    ruta: mysql,
    with: 55,
    withIcons: 25,
  },
  {
    name: "Nest",
    ruta: nest,
    with: 40,
    withIcons: 25,
  },
  {
    name: "Node",
    ruta: node,
    with: 40,
    withIcons: 25,
  },
  {
    name: "Php",
    ruta: php,
    with: 50,
    withIcons: 25,
  },
  {
    name: "Postgresql",
    ruta: postgresql,
    with: 40,
    withIcons: 25,
  },
  {
    name: "React",
    ruta: react,
    with: 45,
    withIcons: 25,
  },
  {
    name: "Vue",
    ruta: vue,
    with: 40,
    withIcons: 25,
  },
];

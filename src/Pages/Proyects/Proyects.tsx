import { Proyect, proyects } from "../../constants/proyects";
import CardsProyects from "../../components/CardsProyect/CardsProyect";

function Porjects() {
  return (
    <section className="mx-auto w-full max-w-[1024px] grow px-6 pt-14 sm:px-8">
      <div className="flex flex-col gap-6 sm:gap-12">
        <div className="">
          <h2 className="font-poppins text-3xl font-bold sm:text-4xl 2xl:text-5xl">
            Mis Proyectos
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {proyects.map((proyect: Proyect, key) => {
            return <CardsProyects key={key} proyect={proyect} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Porjects;

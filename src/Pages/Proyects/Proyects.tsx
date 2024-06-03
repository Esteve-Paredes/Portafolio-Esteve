import { Proyect, proyects } from "../../constants/proyects";
import CardsProyects from "../../components/CardsProyect/CardsProyect";

function Porjects() {
  return (
    <section className="grow px-4 xl:px-6">
      <div className="flex flex-col gap-6 sm:gap-12">
        <div className="lg:px-4 ">
          <h2 className="font-poppins text-4xl font-bold sm:text-5xl">
            Mis Proyectos
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:px-4">
          {proyects.map((proyect: Proyect, key) => {
            return <CardsProyects key={key} proyect={proyect} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Porjects;

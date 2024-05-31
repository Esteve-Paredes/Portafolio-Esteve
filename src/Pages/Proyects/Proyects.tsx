import { Proyect, proyects } from "../../constants/proyects";
import CardsProyects from "../../components/CardsProyect/CardsProyect";

function Porjects() {
  return (
    <section className="grow px-6">
      <div className="my-8 font-poppins text-5xl font-bold">Mis Projectos</div>
      <div className="grid grid-cols-1 gap-2">
        {proyects.map((proyect: Proyect, key) => {
          return <CardsProyects key={key} proyect={proyect} />;
        })}
      </div>
    </section>
  );
}

export default Porjects;
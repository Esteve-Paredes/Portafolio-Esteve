import escritorio1 from "../../assets/teclado-fondo.jpg";
import linkedin from "../../assets/linkedin.svg";

function Home() {
  return (
    <section className="relative grid  items-center justify-center ">
      <div className="">
        <img src={escritorio1} alt="escritorio" className="" width="720px" />
      </div>
      <div className="absolute bottom-48 left-12">
        <h1 className="py-3 text-6xl font-thin">
          Esteve <br></br>
          <span className="text-7xl font-bold">Paredes</span>
        </h1>
        <p className="py-3 text-3xl tracking-wide">Desarrollador Web</p>
      </div>
      <div className="absolute bottom-12 left-12">
        <a href="#">
          <img src={linkedin} alt="linkedin" width="25" />
        </a>
      </div>
    </section>
  );
}

export default Home;

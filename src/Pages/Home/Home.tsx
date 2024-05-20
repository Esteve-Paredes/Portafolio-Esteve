import linkedin from "../../assets/linkedin.svg";

function Home() {
  return (
    <section className="bg-home-backgroung flex h-[720px] flex-col justify-end gap-14 bg-cover bg-center px-10">
      <div className="my-10">
        <h1 className="py-3 text-6xl font-thin">
          Esteve <br></br>
          <span className="text-7xl font-bold">Paredes</span>
        </h1>
        <p className="py-3 text-3xl tracking-wide">Desarrollador Web</p>
      </div>
      <div className="my-10">
        <a href="#">
          <img src={linkedin} alt="linkedin" width="25" />
        </a>
      </div>
    </section>
  );
}

export default Home;

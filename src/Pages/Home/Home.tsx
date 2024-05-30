import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github-icon.svg";

function Home() {
  return (
    <section className="flex h-full flex-col justify-between gap-14 bg-home-backgroung bg-cover bg-center px-10">
      <div className="flex justify-center py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-thin">
            Esteve <br></br>
            <span className="text-7xl font-bold">Paredes</span>
          </h1>
          <p className="text-3xl tracking-wide">Desarrollador Web</p>
        </div>
      </div>
      <div className="py-10">
        <div className="flex gap-4">
          <a
            className="hover:scale-105"
            href="https://www.linkedin.com/in/esteve-paredes"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" width="40" />
          </a>
          <a
            className="hover:scale-105"
            href="https://github.com/Esteve-Paredes"
            target="_blank"
          >
            <img src={github} alt="github" width="40" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

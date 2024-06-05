import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github-icon.svg";

function Home() {
  return (
    <section className="grow bg-home-backgroung-movil bg-cover bg-center px-10 sm:bg-home-backgroung md:rounded-b-2xl">
      <div className="flex h-full flex-col justify-between gap-14  ">
        <div className="flex justify-center p-10 2xl:justify-start">
          <div className=" flex flex-col gap-2 2xl:pl-96">
            <h1 className=" text-7xl font-thin lg:text-8xl">
              Esteve <br></br>
              <span className="text-7xl font-bold lg:text-8xl">Paredes</span>
            </h1>
            <p className="text-4xl tracking-wide lg:text-5xl">
              Desarrollador Web
            </p>
          </div>
        </div>
        <div className="py-10">
          <div className="flex justify-center gap-4">
            <a
              className="hover:scale-105"
              href="https://www.linkedin.com/in/esteve-paredes"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" width="48" />
            </a>
            <a
              className="hover:scale-105"
              href="https://github.com/Esteve-Paredes"
              target="_blank"
            >
              <img src={github} alt="github" width="48" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

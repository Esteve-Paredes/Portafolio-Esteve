import personalPhoto from "../../assets/photo.png";

function About() {
  return (
    <section className="my-10 flex max-w-[1400px] grow flex-col gap-4 overflow-auto px-4 lg:flex-row xl:flex-col xl:gap-8 xl:px-10 2xl:mx-auto">
      <div className="flex px-4">
        <div className="flex flex-col gap-4 sm:gap-10">
          <div className="flex flex-col justify-end gap-4">
            <h2 className="text-4xl font-bold sm:text-4xl 2xl:text-5xl">
              About Me
            </h2>
            <p className="font-poppins text-lg sm:text-xl 2xl:text-2xl">
              esteve.paredes.4@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-poppins text-sm sm:text-base 2xl:text-xl">
              Hola, soy Esteve, un apasionado desarrollador de software con un
              año de experiencia en el área de desarrollo. Me especializo tanto
              en backend como en frontend, lo que me permite tener una visión
              completa y detallada de los proyectos en los que trabajo. Mi
              objetivo es crear soluciones eficientes y de alta calidad que
              cumplan con las necesidades de los usuarios y los negocios.
            </p>
            <p className="font-poppins text-sm sm:text-base 2xl:text-xl">
              También soy un apasionado de la lectura fantástica medieval, la
              música y el dibujo. Entre mis libros favoritos tengo a Harry
              Potter y Guardianes Elementales, y mi instrumento favorito es la
              guitarra.
            </p>
          </div>
          <div>
            <p className="font-poppins  text-sm sm:text-base 2xl:text-xl">
              +51 914839975
            </p>
            <p className="flex items-center font-poppins text-sm sm:text-base 2xl:text-xl">
              Perú, Lima
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center px-10">
        <img
          className="w-80 max-w-none rounded-full"
          src={personalPhoto}
          alt="personal-photo"
        />
      </div>
    </section>
  );
}

export default About;

import personalPhoto from "../../assets/photo.png";

function About() {
  return (
    <section className="mx-auto flex max-w-[1024px] grow flex-col gap-10 px-6 pt-14 sm:px-8 xl:gap-16">
      <div className="flex">
        <div className="flex flex-col gap-4 sm:gap-8">
          <div className="flex flex-col justify-end gap-4">
            <h2 className="text-4xl font-bold sm:text-4xl 2xl:text-5xl">
              About Me
            </h2>
            <p className="font-poppins text-lg sm:text-xl 2xl:text-2xl">
              esteve.paredes.4@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-poppins text-sm sm:text-base ">
              Hola, soy Esteve, un apasionado desarrollador de software con un
              año de experiencia en el área de desarrollo. Me especializo tanto
              en backend como en frontend, lo que me permite tener una visión
              completa y detallada de los proyectos en los que trabajo. Mi
              objetivo es crear soluciones eficientes y de alta calidad que
              cumplan con las necesidades de los usuarios y los negocios.
            </p>
            <p className="font-poppins text-sm sm:text-base">
              También soy un apasionado de la lectura fantástica medieval, la
              música y el dibujo. Entre mis libros favoritos tengo a Harry
              Potter y Guardianes Elementales, y mi instrumento favorito es la
              guitarra.
            </p>
          </div>
          <div>
            <p className="font-poppins  text-sm sm:text-base">+51 914839975</p>
            <p className="flex items-center font-poppins text-sm font-bold sm:text-base">
              Perú, Lima
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-10">
        <img
          className="w-48 max-w-none rounded-full sm:w-96"
          src={personalPhoto}
          alt="personal-photo"
        />
      </div>
    </section>
  );
}

export default About;

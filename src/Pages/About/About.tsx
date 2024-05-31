function About() {
  return (
    <section className="grid grow grid-cols-2 justify-end">
      <div className="grid gap-10 px-6">
        <div className="flex flex-col justify-end gap-4">
          <h2 className=" text-5xl font-bold">About Me</h2>
          <p className="font-poppins text-xl">esteve.paredes.4@gmail.com</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-poppins">
            Hola, soy Esteve, un apasionado desarrollador de software con un año
            de experiencia en el área de desarrollo. Me especializo tanto en
            backend como en frontend, lo que me permite tener una visión
            completa y detallada de los proyectos en los que trabajo. Mi
            objetivo es crear soluciones eficientes y de alta calidad que
            cumplan con las necesidades de los usuarios y los negocios.
          </p>
          <p className="font-poppins">
            También soy un apasionado de la lectura fantástica medieval, la
            música y el dibujo. Entre mis libros favoritos tengo a Harry Potter
            y Guardianes Elementales, y mi instrumento favorito es la guitarra.
          </p>
        </div>
        <div>
          <p className="font-poppins">+51 914839975</p>
          <p className="flex items-center font-poppins">Perú, Lima</p>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default About;

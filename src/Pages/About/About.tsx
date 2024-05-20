function About() {
  return (
    <section className="bg-custom-vanilla grid h-[752px] grid-cols-2 justify-end">
      <div className="grid gap-10 px-6">
        <div className="flex flex-col justify-end gap-4">
          <h2 className="text-5xl">About</h2>
          <p className="text-xl">esteve.paredes.4@gmail.com</p>
        </div>
        <p>
          Hola, soy Esteve, un apasionado desarrollador de software con un año
          de experiencia en el are de desarrollo. Me especializo tanto en
          backend como en frontend, lo que me permite tener una visión completa
          y detallada de los proyectos en los que trabajo. Mi objetivo es crear
          soluciones eficientes y de alta calidad que cumplan con las
          necesidades de los usuarios y los negocios. Siempre estoy en la
          busqueda de nuevas maneras de optimizar mi código y mantenerme al día
          con las últimas tendencias tecnológicas.
        </p>
        <p className="flex items-center">Perú, Lima</p>
      </div>
      <div></div>
    </section>
  );
}

export default About;

import "./styles.css";
import { technologies } from "../../utils/technologies";

function Resume() {
  return (
    <section className="flex h-[752px] flex-col bg-custom-vanilla">
      <div className="px-6">
        <h2 className="my-8 text-5xl font-bold">Skills</h2>
        <div className="mx-8 grid grid-cols-4 gap-3">
          {technologies.map((elem, key) => {
            return (
              <div key={key} className="flex flex-col items-center justify-end">
                <img src={elem.ruta} alt={elem.name} width={elem.with} />
                <p className="font-poppins text-lg">{elem.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-6">
        <h2 className="my-8 text-5xl font-bold">Soft Skills</h2>
        <div>
          <ul className="check-bullet px-6">
            <li>Comunicación</li>
            <li>Trabajo en equipo</li>
            <li>Adaptabilidad</li>
            <li>Resolución de problemas</li>
            <li>Liderazgo</li>
            <li>Empatía</li>
            <li>Creatividad</li>
            <li>Manejo de estrés</li>
            <li>Confianza en sí mismo</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;

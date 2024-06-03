import "./styles.css";
import { technologies } from "../../constants/technologies";
import { softSkills } from "../../constants/soft-skills";

function Resume() {
  return (
    <section className="grow md:px-6">
      <div className="flex flex-col gap-4 sm:gap-10">
        <div className="flex flex-col gap-8 lg:px-4">
          <h2 className="flex justify-center text-4xl font-bold sm:block sm:text-5xl">
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {technologies.map((elem, key) => {
              return (
                <div
                  key={key}
                  className="flex flex-col items-center justify-end"
                >
                  <img src={elem.ruta} alt={elem.name} width={elem.with} />
                  <p className="font-poppins text-lg">{elem.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:px-4">
          <h2 className="flex justify-center text-4xl font-bold sm:block sm:text-5xl">
            Soft Skills
          </h2>
          <div>
            <ul className="check-bullet grid px-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {softSkills.map((skill, key) => {
                return <li key={key}>{skill.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

import "./styles.css";
import { technologies } from "../../constants/technologies";
import { softSkills } from "../../constants/soft-skills";

function Resume() {
  return (
    <section className="mt-12 grow md:px-6">
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col gap-4 lg:px-4">
          <h2 className="flex justify-center text-3xl font-bold sm:block sm:text-4xl">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-4 px-4 lg:grid-cols-4">
            {technologies.map((elem, key) => {
              return (
                <div
                  key={key}
                  className="flex flex-col items-center justify-end"
                >
                  <img src={elem.ruta} alt={elem.name} width={elem.with} />
                  <p className="font-poppins text-base sm:text-lg">
                    {elem.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:px-4">
          <h2 className="flex justify-center text-3xl font-bold sm:block sm:text-4xl">
            Soft Skills
          </h2>
          <div>
            <ul className="check-bullet grid px-6 sm:grid-cols-1 md:grid-cols-2 ">
              {softSkills.map((skill, key) => {
                return (
                  <li className="text-sm sm:text-base" key={key}>
                    {skill.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

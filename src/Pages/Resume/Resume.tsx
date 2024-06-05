import "./styles.css";
import { technologies } from "../../constants/technologies";
import { softSkills } from "../../constants/soft-skills";

function Resume() {
  return (
    <section className="mx-auto mt-14 w-full max-w-[1024px] grow px-6 sm:px-8">
      <div className="flex flex-col gap-10 sm:gap-16">
        <div className="flex flex-col gap-4 2xl:gap-12">
          <h2 className="flex text-3xl font-bold sm:text-4xl 2xl:text-5xl">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-4 px-4 lg:grid-cols-4 2xl:gap-8">
            {technologies.map((elem, key) => {
              return (
                <div
                  key={key}
                  className="flex flex-col items-center justify-end"
                >
                  <img src={elem.ruta} alt={elem.name} width={elem.with} />
                  <p className="font-poppins text-base">{elem.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 2xl:gap-12">
          <h2 className="flex text-3xl font-bold sm:text-4xl 2xl:text-5xl">
            Soft Skills
          </h2>
          <div>
            <ul className="check-bullet grid px-6 sm:grid-cols-1 md:grid-cols-2 2xl:gap-4">
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

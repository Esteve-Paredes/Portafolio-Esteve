import "./styles.css";
import { technologies } from "../../constants/technologies";
import { softSkills } from "../../constants/soft-skills";

function Resume() {
  return (
    <section className="mx-auto my-10 w-full max-w-[1400px] grow overflow-auto md:px-6 xl:px-10">
      <div className="flex flex-col gap-4 sm:gap-6 xl:gap-24 2xl:gap-32">
        <div className="flex flex-col gap-4 lg:px-4 2xl:gap-16">
          <h2 className="flex justify-center text-3xl font-bold sm:block sm:text-4xl 2xl:text-5xl">
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
                  <p className="font-poppins text-base sm:text-lg">
                    {elem.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:px-4 2xl:gap-16">
          <h2 className="flex justify-center text-3xl font-bold sm:block sm:text-4xl 2xl:text-5xl">
            Soft Skills
          </h2>
          <div>
            <ul className="check-bullet grid px-6 sm:grid-cols-1 md:grid-cols-2 2xl:gap-4">
              {softSkills.map((skill, key) => {
                return (
                  <li className="text-sm sm:text-base 2xl:text-lg" key={key}>
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

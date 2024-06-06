import "./styles.css";
import { technologies } from "../../constants/technologies";
import { softSkills } from "../../constants/soft-skills";

function Resume() {
  return (
    <section className="mx-auto w-full max-w-[1024px] grow px-6 pt-14 sm:px-8">
      <div className="flex flex-col gap-10 sm:gap-16">
        <div className="flex flex-col gap-4 2xl:gap-12">
          <h2 className="flex text-3xl font-bold sm:text-4xl 2xl:text-5xl">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-normal">
            {technologies.map((elem, key) => {
              return (
                <div
                  key={key}
                  className="flex h-24 w-28 flex-col items-center justify-end rounded-md border-2 border-custom-bone-toCard bg-custom-bone-toCard sm:w-32"
                >
                  <img src={elem.ruta} alt={elem.name} width={elem.with} />
                  <p className="pt-2 font-poppins text-base">{elem.name}</p>
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
            <ul className="check-bullet grid sm:grid-cols-1 md:grid-cols-2 2xl:gap-4">
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

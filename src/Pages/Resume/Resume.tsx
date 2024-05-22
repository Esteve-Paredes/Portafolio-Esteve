import "./styles.css";
import { technologies } from "../../constants/technologies";
import { softSkills } from "../../constants/soft-skills";

function Resume() {
  return (
    <section className="grid h-[752px] bg-custom-vanilla">
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
      <div className=" px-6">
        <h2 className="my-6 text-5xl font-bold">Soft Skills</h2>
        <div>
          <ul className="check-bullet grid grid-cols-2 px-6">
            {softSkills.map((skill, key) => {
              return <li key={key}>{skill.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;

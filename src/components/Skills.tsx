import { skills } from "@/assets/data";
import Title from "./Title";

const Skills = () => {
  return (
    <section id="skills">
      <div className="align-center section-padding">
        <Title title="skills" />
        <ul className="grid sm:grid-cols-2 gap-12 lg:grid-cols-3">
          {skills.map((skill, index) => {
            return (
              <li key={index} className="flex flex-col gap-4 text-center">
                <div>
                  <skill.icon className="h-16 w-16 mx-auto text-primary" />
                </div>
                <h3 className="font-bold text-2xl md:text-3xl">
                  {skill.title}
                </h3>
                <p>{skill.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

import { iconsTitlesSet } from "@/constants/iconstitles";
import { createSvgImage } from "@/utils/createSvgImage";
import { blackLabelFont } from "..";

export default function Skills({ softSkills, hardSkills }) {
  return (
    <section>
      <h2 className={`text-4xl font-bold text-gray-100 mb-6 ${blackLabelFont}`}>
        Habilidades
      </h2>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl text-gray-300 mb-4">Soft Skills</h3>
          <ul className="space-y-2">
            {softSkills.map((skill, index) => (
              <li key={index} className="text-lg text-gray-100">
                • {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl text-gray-300 mb-4">Hard Skills</h3>
          <ul className="space-y-4 flex items-end">
            {hardSkills.map((skill, index) => (
              <li key={index} className="flex items-center">
                {iconsTitlesSet.has(skill)
                  ? createSvgImage(skill, 50, 50)
                  : skill}
                <span className="ml-4 text-lg text-gray-100">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

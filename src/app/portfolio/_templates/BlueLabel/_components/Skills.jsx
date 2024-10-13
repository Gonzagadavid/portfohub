import { iconsTitlesSet } from "@/constants/iconstitles";
import { createSvgImage } from "@/utils/createSvgImage";
import { Badge } from "@/components/ui/badge";

export default function Skills({ softSkills, hardSkills }) {
  return (
    <section>
      <h2 className="text-3xl font-serif font-bold text-blue-100 mb-6">
        Habilidades
      </h2>
      <div className="flex justify-between space-x-12">
        <div className="w-1/2">
          <h3 className="text-2xl mb-4 text-blue-200">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-blue-700 text-blue-100 hover:bg-blue-800 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl mb-4 text-blue-200">Hard Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {hardSkills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                {iconsTitlesSet.has(skill)
                  ? createSvgImage(skill, 50, 50)
                  : skill}
                <span className="text-lg text-blue-100">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

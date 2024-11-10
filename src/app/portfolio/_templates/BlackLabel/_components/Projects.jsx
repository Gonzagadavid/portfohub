import { iconsTitlesSet } from "@/constants/iconstitles";
import { createSvgImage } from "@/utils/createSvgImage";
import { Fragment } from "react";
import { blackLabelFont } from "..";

export default function Projects({ projects  }) {
  return (
    <section>
      <h2 className={`text-4xl font-bold text-gray-100 mb-6 ${blackLabelFont}`}>
        Projetos
      </h2>
      <div className="space-y-10">
        {projects?.map((project, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl text-white">{project.projectName}</h3>
              <div className="flex space-x-2">
                {project.icons.map((icon, idx) => (
                  <Fragment key={idx}>
                    {iconsTitlesSet.has(icon)
                      ? createSvgImage(icon, 50, 50)
                      : icon}
                  </Fragment>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 underline"
            >
              {project.link}
            </a>
            <p className="text-gray-300 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

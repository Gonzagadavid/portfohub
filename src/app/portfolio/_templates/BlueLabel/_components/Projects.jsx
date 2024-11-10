import { iconsTitlesSet } from "@/constants/iconstitles";
import { createSvgImage } from "@/utils/createSvgImage";
import { Fragment } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects({ projects }) {
  return (
    <section>
      <h2 className="text-3xl font-serif font-bold text-blue-100 mb-6">
        Projetos
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects?.map((project, index) => (
          <Card
            key={index}
            className="bg-blue-800 shadow-xl p-6 hover:scale-105 transition-transform"
          >
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold">
                  {project.projectName}
                </CardTitle>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline"
                >
                  {project.link}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                {project.icons.map((icon, idx) => (
                  <Fragment key={idx}>
                    {iconsTitlesSet.has(icon)
                      ? createSvgImage(icon, 50, 50)
                      : icon}
                  </Fragment>
                ))}
              </div>
            </CardHeader>
            <CardContent className="text-blue-200 mt-4">
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

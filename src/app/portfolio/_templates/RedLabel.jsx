"use client";

import React, { Fragment } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { iconsTitlesSet } from "@/constants/iconstitles";
import { createSvgImage } from "@/utils/createSvgImage";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const RedLabel = ({ portfolioData }) => {
  const {
    professional,
    personalData,
    softSkills,
    hardSkills,
    academic,
    projects
  } = portfolioData;

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-black via-red-900 to-red-800 text-white p-8 font-sans">
      {/* Sidebar - Left */}
      <aside className="w-1/3 bg-black p-6 rounded-lg shadow-lg">
        <Avatar className="w-[200px] h-[200px] m-5">
          <AvatarImage
            src={personalData.image ?? "https://github.com/shadcn.png"}
          />
        </Avatar>
        <h1 className="text-5xl font-bold text-white mb-6">
          {personalData.fullName}
        </h1>
        <p className="text-xl text-red-200 italic mb-8">
          {personalData.phrase}
        </p>
        <div className="space-y-4 text-red-300">
          <a
            href={personalData.network}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {personalData.network}
          </a>
          <p>{personalData.email}</p>
          <p>
            {personalData.address.city}, {personalData.address.state}
          </p>
        </div>
      </aside>

      {/* Main Content - Right */}
      <main className="w-2/3 pl-12 space-y-16">
        {/* Professional Section */}
        <section>
          <h2 className="text-4xl font-serif font-bold text-red-100 mb-4">
            Experiência Profissional
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {professional.map((job, index) => (
              <Card
                key={index}
                className="bg-red-900 shadow-lg hover:scale-105 transition-transform"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {job.company}
                  </CardTitle>
                  <p className="text-lg text-red-300 italic">{job.role}</p>
                  <p className="text-sm text-red-400">
                    {job.startDate} - {job.endDate ? job.endDate : "Presente"}
                  </p>
                </CardHeader>
                <CardContent className="text-red-200 mt-4">
                  <p>{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-6 bg-red-700" />

        {/* Skills Section */}
        <section>
          <h2 className="text-4xl font-serif font-bold text-red-100 mb-6">
            Habilidades
          </h2>
          <div className="flex justify-between space-x-12">
            <div className="w-1/2">
              <h3 className="text-2xl mb-4 text-red-200">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-red-700 text-red-100 hover:bg-red-800 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="text-2xl mb-4 text-red-200">Hard Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {hardSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    {iconsTitlesSet.has(skill)
                      ? createSvgImage(skill, 50, 50)
                      : skill}
                    <span className="text-lg text-red-100">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-6 bg-red-700" />

        {/* Projects Section */}
        <section>
          <h2 className="text-4xl font-serif font-bold text-red-100 mb-6">
            Projetos
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-red-800 shadow-xl p-6 hover:scale-105 transition-transform"
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
                      className="text-red-300 underline"
                    >
                      {project.link}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    {project.icons.map((icon, idx) => (
                      <Fragment key={idx}>
                        {iconsTitlesSet.has(icon)
                          ? createSvgImage(icon, 50, 50, true)
                          : icon}
                      </Fragment>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="text-red-200 mt-4">
                  <p>{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default RedLabel;

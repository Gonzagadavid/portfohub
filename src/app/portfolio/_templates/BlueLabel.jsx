"use client";

import React, { useState, Fragment } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { createSvgImage } from "@/utils/createSvgImage";
import { iconsTitlesSet } from "@/constants/iconstitles";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BlueLabel = ({ portfolioData, convertToSVG }) => {
  const { professional, personalData, softSkills, hardSkills, projects } =
    portfolioData;
  const [activeTab, setActiveTab] = useState("professional");

  // Função para renderizar a sessão correspondente ao tab ativo
  const renderContent = () => {
    switch (activeTab) {
      case "professional":
        return (
          <section>
            <h2 className="text-3xl font-serif font-bold text-blue-100 mb-4">
              Experiência Profissional
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {professional.map((job, index) => (
                <Card
                  key={index}
                  className="bg-blue-800 shadow-lg hover:scale-105 transition-transform"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {job.company}
                    </CardTitle>
                    <p className="text-lg text-blue-300 italic">{job.role}</p>
                    <p className="text-sm text-blue-400">
                      {job.startDate} - {job.endDate ? job.endDate : "Presente"}
                    </p>
                  </CardHeader>
                  <CardContent className="text-blue-200 mt-4">
                    <p>{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      case "skills":
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
                      <span className="text-lg text-blue-100">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      case "projects":
        return (
          <section>
            <h2 className="text-3xl font-serif font-bold text-blue-100 mb-6">
              Projetos
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {projects.map((project, index) => (
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
                            ? createSvgImage(icon, 50, 50, true)
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
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white p-8 font-sans">
      {/* Header */}
      <header className="w-full bg-blue-900 p-6 rounded-lg shadow-lg flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="w-[200px] h-[200px] m-5">
            <AvatarImage
              src={personalData.image ?? "https://github.com/shadcn.png"}
            />
          </Avatar>
          <div>
            <h1 className="text-4xl font-bold text-white">
              {personalData.fullName}
            </h1>
            <p className="text-lg text-blue-300 italic">
              {personalData.phrase}
            </p>
          </div>
        </div>
        <div className="text-blue-200 text-right">
          <a
            href={personalData.network}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline block"
          >
            {personalData.network}
          </a>
          <p>{personalData.email}</p>
          <p>
            {personalData.address.city}, {personalData.address.state}
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center space-x-6 my-8">
        <button
          onClick={() => setActiveTab("professional")}
          className={`text-xl p-2 rounded ${
            activeTab === "professional" ? "bg-blue-800" : "hover:bg-blue-700"
          }`}
        >
          Experiência Profissional
        </button>
        <button
          onClick={() => setActiveTab("skills")}
          className={`text-xl p-2 rounded ${
            activeTab === "skills" ? "bg-blue-800" : "hover:bg-blue-700"
          }`}
        >
          Habilidades
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          className={`text-xl p-2 rounded ${
            activeTab === "projects" ? "bg-blue-800" : "hover:bg-blue-700"
          }`}
        >
          Projetos
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-8 bg-blue-800 rounded-lg shadow-lg">
        {renderContent()}
      </main>
    </div>
  );
};

export default BlueLabel;

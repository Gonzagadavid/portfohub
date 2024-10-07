"use client";

import React, { useState, Fragment } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { createSvgImage } from "@/utils/createSvgImage";
import { iconsTitlesSet } from "@/constants/iconstitles";

// Define uma fonte mais geométrica para dar um toque diferente ao tema.
const blackLabelFont = "font-[Inter]";

const PortfolioPageBlack = ({ portfolioData }) => {
  const { professional, personalData, softSkills, hardSkills, projects } =
    portfolioData;
  const [activeTab, setActiveTab] = useState("professional");

  // Função para renderizar o conteúdo ativo
  const renderContent = () => {
    switch (activeTab) {
      case "professional":
        return (
          <section>
            <h2
              className={`text-4xl font-bold text-gray-100 mb-6 ${blackLabelFont}`}
            >
              Experiência Profissional
            </h2>
            <div className="space-y-8">
              {professional.map((job, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {job.company}
                      </h3>
                      <p className="text-lg text-gray-400 italic">{job.role}</p>
                      <p className="text-sm text-gray-500">
                        {job.startDate} -{" "}
                        {job.endDate ? job.endDate : "Presente"}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300">{job.description}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case "skills":
        return (
          <section>
            <h2
              className={`text-4xl font-bold text-gray-100 mb-6 ${blackLabelFont}`}
            >
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
                      <span className="ml-4 text-lg text-gray-100">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      case "projects":
        return (
          <section>
            <h2
              className={`text-4xl font-bold text-gray-100 mb-6 ${blackLabelFont}`}
            >
              Projetos
            </h2>
            <div className="space-y-10">
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl text-white">
                      {project.projectName}
                    </h3>
                    <div className="flex space-x-2">
                      {project.icons.map((icon, idx) => (
                        <Fragment key={idx}>
                          {iconsTitlesSet.has(icon)
                            ? createSvgImage(icon, 50, 50, true)
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
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      {/* Header */}
      <header className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-6">
          <Avatar className="w-[200px] h-[200px] m-5">
            <AvatarImage
              src={personalData.image ?? "https://github.com/shadcn.png"}
            />
          </Avatar>
          <div>
            <h1 className={`text-5xl font-bold text-white ${blackLabelFont}`}>
              {personalData.fullName}
            </h1>
            <p className="text-lg text-gray-400">{personalData.phrase}</p>
          </div>
        </div>
        <div className="text-right">
          <a
            href={personalData.network}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline"
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
      <nav className="flex justify-start space-x-12 mb-8">
        <button
          onClick={() => setActiveTab("professional")}
          className={`text-2xl font-semibold p-2 rounded ${
            activeTab === "professional"
              ? "bg-gray-800 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Experiência
        </button>
        <button
          onClick={() => setActiveTab("skills")}
          className={`text-2xl font-semibold p-2 rounded ${
            activeTab === "skills"
              ? "bg-gray-800 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Habilidades
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          className={`text-2xl font-semibold p-2 rounded ${
            activeTab === "projects"
              ? "bg-gray-800 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Projetos
        </button>
      </nav>

      {/* Main Content */}
      <main>{renderContent()}</main>
    </div>
  );
};

export default PortfolioPageBlack;

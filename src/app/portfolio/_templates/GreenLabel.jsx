"use client";

import React, { useState, Fragment } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { createSvgImage } from "@/utils/createSvgImage";
import { iconsTitlesSet } from "@/constants/iconstitles";

const greenLabelFont = "font-[Poppins]";

const GreenLabel = ({ portfolioData }) => {
  const { professional, personalData, softSkills, hardSkills, projects } =
    portfolioData;
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <section className="flex flex-col items-center space-y-6 text-center">
            <h2
              className={`text-4xl font-semibold text-green-800 ${greenLabelFont}`}
            >
              Sobre Mim
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              {personalData.description}
            </p>
            <div className="mt-6 flex justify-center space-x-8">
              <a
                href={personalData.network}
                className="text-green-700 hover:text-green-900 transition-colors"
              >
                {personalData.network}
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="text-green-700 hover:text-green-900 transition-colors"
              >
                {personalData.email}
              </a>
            </div>
          </section>
        );
      case "professional":
        return (
          <section className="space-y-10">
            <h2
              className={`text-4xl font-semibold text-green-800 ${greenLabelFont}`}
            >
              Experiência Profissional
            </h2>
            {professional.map((job, index) => (
              <div
                key={index}
                className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-green-900">
                      {job.company}
                    </h3>
                    <p className="text-lg text-gray-600">{job.role}</p>
                    <p className="text-sm text-gray-500">
                      {job.startDate} - {job.endDate || "Presente"}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </section>
        );
      case "skills":
        return (
          <section className="grid grid-cols-2 gap-8">
            <div>
              <h2
                className={`text-4xl font-semibold text-green-800 ${greenLabelFont}`}
              >
                Soft Skills
              </h2>
              <ul className="space-y-4 mt-4">
                {softSkills.map((skill, index) => (
                  <li key={index} className="text-lg text-gray-700">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2
                className={`text-4xl font-semibold text-green-800 ${greenLabelFont}`}
              >
                Hard Skills
              </h2>
              <ul className="space-y-4 mt-4 flex items-end">
                {hardSkills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    {iconsTitlesSet.has(skill)
                      ? createSvgImage(skill, 50, 50, true)
                      : skill}
                    <span className="ml-4 text-lg text-gray-700">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      case "projects":
        return (
          <section className="space-y-8">
            <h2
              className={`text-4xl font-semibold text-green-800 ${greenLabelFont}`}
            >
              Projetos
            </h2>
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col"
              >
                <h3 className="text-2xl font-bold text-green-900">
                  {project.projectName}
                </h3>
                {Object.keys(personalData.network).map((key) => {
                  const network = personalData.network[key];
                  return (
                    <a
                      href={network}
                      key={network}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 underline"
                    >
                      {personalData.network}
                    </a>
                  );
                })}
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4 flex space-x-4 justify-end">
                  {project.icons.map((icon, idx) => (
                    <Fragment key={idx}>
                      {iconsTitlesSet.has(icon)
                        ? createSvgImage(icon, 50, 50, true)
                        : icon}
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-gray-800 p-10">
      {/* Header */}
      <header className="flex flex-col items-center space-y-4 mb-12">
        <Avatar className="w-[200px] h-[200px] m-5">
          <AvatarImage
            src={personalData.image ?? "https://github.com/shadcn.png"}
          />
        </Avatar>
        <h1 className={`text-5xl font-bold text-green-900 ${greenLabelFont}`}>
          {personalData.fullName}
        </h1>
        <p className="text-lg text-gray-600 italic">{personalData.phrase}</p>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center space-x-12 mb-8">
        <button
          onClick={() => setActiveTab("about")}
          className={`text-2xl font-semibold p-2 rounded ${
            activeTab === "about"
              ? "text-green-900"
              : "text-gray-500 hover:text-green-900"
          }`}
        >
          Sobre
        </button>
        <button
          onClick={() => setActiveTab("professional")}
          className={`text-2xl font-semibold p-2 rounded ${
            activeTab === "professional"
              ? "text-green-900"
              : "text-gray-500 hover:text-green-900"
          }`}
        >
          Experiência
        </button>
        <button
          onClick={() => setActiveTab("skills")}
          className={`text-2xl font-semibold p-2 rounded ${
            activeTab === "skills"
              ? "text-green-900"
              : "text-gray-500 hover:text-green-900"
          }`}
        >
          Habilidades
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          className={`text-2xl font-semibold p-2 rounded ${
            activeTab === "projects"
              ? "text-green-900"
              : "text-gray-500 hover:text-green-900"
          }`}
        >
          Projetos
        </button>
      </nav>

      {/* Main Content */}
      <main className="bg-white p-10 rounded-lg shadow-lg">
        {renderContent()}
      </main>
    </div>
  );
};

export default GreenLabel;

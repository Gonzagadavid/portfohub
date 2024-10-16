"use client";

import React, { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Professional from "./_components/Professional";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";

const BlueLabel = ({ portfolioData }) => {
  const { professional, personalData, softSkills, hardSkills, projects } =
    portfolioData;
  const [activeTab, setActiveTab] = useState("professional");

  const componentsRender = {
    professional: <Professional professional={professional} />,
    skills: <Skills softSkills={softSkills} hardSkills={hardSkills} />,
    projects: <Projects projects={projects} />
  };

  const renderContent = () => {
    return componentsRender?.[activeTab] ?? null;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white p-8 font-sans">
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
                {network}
              </a>
            );
          })}
          <p>{personalData.email}</p>
          <p>
            {personalData.address.city}, {personalData.address.state}
          </p>
        </div>
      </header>

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

      <main className="flex-grow p-8 bg-blue-800 rounded-lg shadow-lg">
        {renderContent()}
      </main>
    </div>
  );
};

export default BlueLabel;

"use client";

import React, { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Professional from "./_components/Professional";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";

export const blackLabelFont = "font-[Inter]";

const BlackLabel = ({ portfolioData }) => {
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
    <div className="min-h-screen bg-gray-900 text-white p-10">
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
      <main>{renderContent()}</main>
    </div>
  );
};

export default BlackLabel;

"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle
} from "@/components/ui/card";
import Image from "next/image";

export default function BlackLabel({ portfolioData }) {
  const {
    professional,
    personalData,
    softSkills,
    hardSkills,
    academic,
    projects
  } = portfolioData;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-42 m-10">
        <Image
          src="/images/default2.png"
          height={200}
          width={200}
          alt={personalData.fullName}
        />
        <h1 className="text-5xl m-auto">{personalData.fullName}</h1>
        <i>
          {personalData.network.split(" ").map((link) => (
            <a href={link} key={link} className="m-5">
              {link}
            </a>
          ))}
        </i>
        <i className="m-5">{personalData.email}</i>
      </div>
      <div className="text-2xl w-[80%] m-auto">{personalData.description}</div>
      <div className="m-8">
        <i>{`"${personalData.phrase}"`}</i>
      </div>
      <div className="grid grid-cols-2 gap-x-[200px] m-5">
        <div className="flex flex-col items-center w-full mt-10">
          <h2 className="text-4xl">Hard Skills</h2>
          <ul className="grid grid-cols-2 gap-x-[200px] m-5">
            {hardSkills.map((skill) => (
              <li key={skill} className="text-2xl ">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center w-full mt-10">
          <h2 className="text-4xl">Soft Skills</h2>
          <ul className="grid grid-cols-2 gap-x-[200px] m-5">
            {softSkills.map((skill) => (
              <li key={skill} className="text-2xl ">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-4xl mt-10 mb-5 text-center">Formação Academica</h2>
        <ul className="flex">
          {academic.map((degree) => (
            <Card
              key={degree.startDate}
              className="px-10  flex flex-col justify-around h-42 w-[400px] relative m-5"
            >
              <CardTitle className="text-center m-3">
                <p>{degree.institution}</p>
              </CardTitle>
              <CardDescription className="m-10">
                <p>{degree.degree}</p>
              </CardDescription>
              <CardFooter className="flex justify-between">
                <span>{new Date(degree.startDate).toLocaleDateString()}</span>
                <span>{new Date(degree.endDate).toLocaleDateString()}</span>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-4xl mt-10 mb-5 text-center">
          Experiência Profissional
        </h2>
        <ul className="flex">
          {professional.map((job) => (
            <Card
              key={job.company}
              className="px-10  flex flex-col justify-around h-42 w-[400px] relative m-5"
            >
              <CardTitle className="text-center m-3">
                <p>{job.company}</p>
              </CardTitle>
              <CardDescription className="m-10">
                <p>{job.role}</p>
                <p>{job.description}</p>
              </CardDescription>
              <CardFooter className="flex justify-between">
                <span>{new Date(job.startDate).toLocaleDateString()}</span>
                <span>
                  {" "}
                  {job.endDate
                    ? new Date(job.endDate).toLocaleDateString()
                    : "Atual"}
                </span>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
}

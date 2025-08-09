import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "Typescript:Smart Weather Dashboard with Web APIs",
    description: "A modern, responsive weather dashboard that leverages cutting-edge Web APIs to provide users with real-time weather information, intelligent performance optimization, and an exceptional mobile experience..",
    tags: ["React", "Tailwind", "TypeScript"],
    image: "/project1.png",
    github: "https://github.com/SpookyW2003/weather3",
    live: "https://weather3-steel.vercel.app/",
  },
  {
    title: "Live Polling System",
    description: "A real-time interactive polling system that enables teachers to create engaging polls and students to participate with instant feedback. Built with React, Express.js, and Socket.IO for seamless real-time communication.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: "/project2.png",
    github: "https://github.com/SpookyW2003/Live-Polling-System",
    live: "https://live-polling-system-brown.vercel.app/",
  },
  {
    title: "Flutter App",
    description: "A comprehensive full-stack attendance and lunch management system with web application, mobile app, and backend API. Features role-based access control, real-time attendance tracking, automated notifications, and cross-platform mobile support.",
    tags: ["Flutter", "Dart", "Firebase"],
    image: "/project3.png",
    github: "https://github.com/SpookyW2003/Attendance-lunch-Management",
    live: "https://github.com/SpookyW2003/Attendance-lunch-Management/releases/latest/download/app-release.apk",
  },
  {
    title: "ML Project-Heart Disease Prediction App",
    description: "This project is a Streamlit-based web application designed to predict heart disease risk based on various health parameters. The app uses pre-trained machine learning models to provide predictions and health tips. It features a user-friendly interface for inputting health data and receiving instant feedback.",
    tags: ["Python", "StreamLit", "PostgreSQL"],
    image: "/project4.png",
    github: "https://github.com/SpookyW2003/heart-disease-prediction-app-main",
    live: "https://spookyw2003-heart-disease-p-heart-disease-prediction-app-au97kl.streamlit.app/",
  },
];

export const PortfolioProjectsSection = (): JSX.Element => {
  return (
    <section className="px-4 md:px-[168px] py-24 bg-white w-full">
      <h2 className="font-desktop-headline-2 font-[number:var(--desktop-headline-2-font-weight)] text-dark text-[length:var(--desktop-headline-2-font-size)] tracking-[var(--desktop-headline-2-letter-spacing)] leading-[var(--desktop-headline-2-line-height)] mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-transparent border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <CardContent className="flex flex-col gap-4 p-6">
              <h3 className="font-desktop-headline-3 font-[number:var(--desktop-headline-3-font-weight)] text-dark">
                {project.title}
              </h3>
              <p className="font-desktop-paragraph-1 text-gray-700">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <Button
                  variant="outline"
                  className="rounded-[40px] px-4 py-2"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  View Code
                </Button>
                <Button
                  variant="default"
                  className="rounded-[40px] px-4 py-2"
                  onClick={() => window.open(project.live, "_blank")}
                >
                  {project.live.includes(".apk") || project.live.includes("drive.google")
                    ? "Download APK"
                    : "Live Demo"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

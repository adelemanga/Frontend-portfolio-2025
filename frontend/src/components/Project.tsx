import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "my first portfolio",
    img: "https://i.imgur.com/DrcbKCv.png",
    description:
      "An interactive portfolio with smooth animations and transitions.",
    link: "https://adelemanga-portfolio.netlify.app/",
    technologies: ["React", "Node.js", "CSS", "JavaScript", "GitHub"],
  },
  {
    title: "Amicale Sénior de Liebherr",
    img: "https://i.imgur.com/pZq4RUz.png",
    description: "A Worpress app with Laragon and custom Css",
    link: "https://test.amicale-seniors-liebherr.net/",
    technologies: [
      "WordPress",
      "CSS",
      "Plugins",
      "Laragon",
      "FTP",
      "RapidDomaine",
      "Figma",
    ],
  },
  {
    title: "My 2025 portfolio",
    img: "https://i.imgur.com/i1xekKH.png",
    description: "Fluid, animated potfolio.",
    link: "#",
    technologies: [
      "React",
      "Node.js",
      "SQLite",
      "Next.js",
      "Apollo",
      "TypeORM",
      "TypeScript",
      "GitHub",
    ],
  },
  {
    title: "Colmar Airport",
    img: "https://i.imgur.com/L6sUWRE.png",
    description: "Redesign of airport website + Mock-up",
    link: "https://adelemanga-portfolio.netlify.app/",
    technologies: ["WordPress", "CSS", "Plugins", "Laragon", "Figma"],
  },
  {
    title: "Soccer service application",
    img: "https://i.imgur.com/7oLVQV8.png",
    description: "An app for my friend who wants to give lessons.",
    link: "#",
    technologies: [
      "React",
      "Node.js",
      "SQLite",
      "Next.js",
      "Apollo",
      "TypeORM",
      "TypeScript",
      "GitHub",
    ],
  },
  {
    title: "A restaurant in my image",
    img: "https://i.imgur.com/ubNB7Fh.png",
    description: " restaurant invented by me",
    link: "#",
    technologies: [
      "React",
      "Node.js",
      "SQLite",
      "Next.js",
      "Apollo",
      "TypeORM",
      "TypeScript",
      "GitHub",
    ],
  },
  {
    title: "Sports equipment rental application",
    img: "https://i.imgur.com/PjXDVgT.png",
    description: "Application with a reservation system",
    link: "#",
    technologies: [
      "GitHub",
      "Docker",
      "Apollo",
      "TypeORM",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Nginx",
      "TypeGraphQL",
    ],
  },
  {
    title: "Application for managing and viewing works of art",
    img: "https://i.imgur.com/SQdTHLH.png",
    description:
      "Application with an administrator account and a user account on login",
    link: "#",
    technologies: [
      "React",
      "Node.js",
      "GitHub",
      "JavaScript",
      "Postman",
      "MySQL",
      "JavaScript",
    ],
  },
];

function Projects() {
  const getTechIcons = (techList: string[]) => {
    const techIcons: { [key: string]: string } = {
      React: "⚛️React",
      Figma: "Figma",
      "Node.js": "❇️Node.js",
      PostgreSQL: "🟪PostgreSQL",
      Docker: "🐳Docker",
      TypeGraphQL: "🔷TypeGraphQL",
      GitHub: "🐙GitHub",
      Nginx: "🖥️Nginx",
      "Next.js": "⏭️Next.js",
      Apollo: "🚀Apollo",
      "Tailwind CSS": "🌬️Tailwind CSS",
      SCSS: "🎨SCSS",
      CSS: "🎀CSS",
      SQLite: "💾SQLite",
      JavaScript: "🟨JavaScript",
      TypeScript: "🔵TypeScript",
      Postman: "🔵Postman",
      MySQL: "🐬MySQL",
      TypeORM: "📦TypeORM",
      Vite: "⚡Vite",
      WordPress: "📝WordPress",
      Plugins: "🧩Plugins",
      Laragon: "🧰Laragon",
      FTP: "📡FTP",
      RapidDomaine: "🌐RapidDomaine",
    };

    return techList.map((tech) => techIcons[tech] || "🔧").join(" ");
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">🚀 My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="project-img"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

             
              <p className="project-technologies">
                <strong>Technologies used:</strong>{" "}
                {getTechIcons(project.technologies)}
              </p>

              <a href={project.link} target="-blank" className="project-link">
                See the project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

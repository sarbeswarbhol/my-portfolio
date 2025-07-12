import React, { useState } from "react";
import { projects } from "../../constants";

const ProjectCard = ({ project, onClick }) => (
  <div
    onClick={() => onClick(project)}
    className="group border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer transform hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300"
    role="button"
    tabIndex={0}
    onKeyPress={(e) => e.key === "Enter" && onClick(project)}
  >
    <div className="relative w-full aspect-video bg-black rounded-t-2xl overflow-hidden">
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4 pt-2 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-2 py-1"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-auto"
    aria-modal="true"
    role="dialog"
  >
    <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-purple-500 focus:outline-none"
        aria-label="Close modal"
      >
        &times;
      </button>
      <div className="flex flex-col gap-4 p-6 pt-12">
        <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
          <img
            src={project.image}
            alt={`${project.title} enlarged preview`}
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm lg:text-base">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-2 py-1"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 rounded-xl text-sm font-semibold text-center transition"
          >
            View Code
          </a>
          <a
            href={project.webapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-sm font-semibold text-center transition"
          >
            View Live
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          A showcase of the projects I’ve worked on, highlighting my skills and creativity in full-stack development.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Work;

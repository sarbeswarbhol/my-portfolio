
import React, { useEffect, useState } from "react";
import { projects } from "../../constants";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

const ProjectCard = ({ project, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(project);
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onClick(project)}
      onKeyDown={handleKeyDown}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-gray-900/70 shadow-[0_0_20px_rgba(130,69,236,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#8245ec]/60 hover:shadow-[0_10px_35px_rgba(130,69,236,0.2)]"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-[#100b1d]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <FaCode className="text-5xl text-purple-400/50" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#050414]/80 via-transparent to-transparent opacity-70" />

        <span className="absolute bottom-3 left-4 rounded-full border border-purple-400/30 bg-[#100b1d]/80 px-3 py-1 text-xs font-medium text-purple-300 backdrop-blur-md">
          Project #{project.id + 1}
        </span>
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-purple-300">
          {project.title}
        </h3>

        <p className="mb-5 line-clamp-3 flex-1 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full border border-[#8245ec]/20 bg-[#8245ec]/10 px-3 py-1 text-xs font-medium text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Details */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-sm font-semibold text-gray-300">
            View Details
          </span>

          <FaArrowRight className="text-sm text-purple-400 transition-transform group-hover:translate-x-2" />
        </div>
      </div>
    </article>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-[#8245ec]/30 bg-[#100b1d] shadow-[0_0_50px_rgba(130,69,236,0.2)]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:bg-purple-600"
        >
          <FaTimes />
        </button>

        <div className="max-h-[90vh] overflow-y-auto">

          {/* Image */}
          <div className="flex aspect-video items-center justify-center overflow-hidden bg-[#050414]">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-contain"
              />
            ) : (
              <FaCode className="text-6xl text-purple-400/50" />
            )}
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-purple-400">
              Featured Project
            </p>

            <h3
              id="project-modal-title"
              className="mb-5 text-2xl font-bold text-white sm:text-3xl"
            >
              {project.title}
            </h3>

            <p className="text-sm leading-8 text-gray-400 sm:text-base">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-7">
              <h4 className="mb-4 text-sm font-semibold text-white">
                Technologies Used
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-lg border border-[#8245ec]/30 bg-[#8245ec]/10 px-4 py-2 text-xs font-medium text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white transition hover:border-purple-500 hover:bg-purple-500/10"
                >
                  <FaGithub className="text-lg" />
                  View Source Code
                </a>
              )}

              {project.webapp && (
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#8245ec] to-[#a855f7] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition hover:-translate-y-1"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="work"
      className="relative px-[7vw] py-20 font-sans md:px-[7vw] lg:px-[12vw]"
    >
      {/* Heading */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#a78bfa]">
          What I've Built
        </p>

        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Featured Projects
        </h2>

        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#8245ec]" />

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
          A selection of projects showcasing my technical skills,
          development experience, and problem-solving approach.
        </p>
      </div>

      {/* Project count */}
      <div className="mx-auto mb-8 flex max-w-6xl items-center justify-between">
        <p className="text-lg font-semibold text-white">Explore My Work</p>
        <span className="rounded-full border border-[#8245ec]/30 bg-[#8245ec]/10 px-4 py-1.5 text-xs text-purple-300">
          {projects.length} Projects
        </span>
      </div>

      {/* Projects */}
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* Read More / Show Less */}
        {projects.length > 3 && (
          <div className="relative mt-10 flex flex-col items-center">
            {!showAll && (
              <div className="pointer-events-none absolute -top-16 h-16 w-full bg-gradient-to-t from-[#050414] to-transparent" />
            )}

            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#8245ec]/50 bg-[#8245ec]/10 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#8245ec] hover:bg-[#8245ec]/20 hover:shadow-[0_0_25px_rgba(130,69,236,0.25)]"
            >
              {showAll ? "Show Less" : "View All Projects"}

              <span className="transition-transform duration-300 group-hover:translate-y-1">
                {showAll ? "↑" : "↓"}
              </span>
            </button>

            {!showAll && (
              <p className="mt-3 text-xs text-gray-500">
                Showing 3 of {projects.length} projects
              </p>
            )}
          </div>
        )}
      </div>

      {/* Project modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Work;
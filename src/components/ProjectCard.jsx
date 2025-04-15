// src/components/ProjectCard.jsx
import { ExternalLink } from "lucide-react";
import TechBadge from "./TechBadge";

export default function ProjectCard({ project, isReversed }) {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-16`}
    >
      {/* Project Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
          <div className="relative bg-zinc-800 rounded-lg p-4 border border-zinc-700 group-hover:border-orange-500/50 transition-all duration-300">
            <img
              src={project.imageUrl || "/placeholder.svg"}
              alt={`${project.title} mockup`}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-balance">
            {project.title}
          </h3>
          <p className="text-zinc-300 text-lg leading-relaxed text-pretty">
            {project.description}
          </p>
        </div>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} technology={tech} />
          ))}
        </div>

        {/* Live Site Link */}
        <div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors duration-200 group"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
}

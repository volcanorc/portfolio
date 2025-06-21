// src/components/ProjectsSection.jsx
import ProjectCard from "./ProjectCard";

const base = import.meta.env.BASE_URL;

const projects = [
  {
    id: 1,
    title: "Project Not Yet Compiled",
    description: "Description unavailable",
    technologies: ["Unknown", "Unknown", "Unknown"],
    liveUrl: "#",
    imageUrl: `${base}projects-img/compact.png`,
  },
  {
    id: 2,
    title: "Project Not Yet Compiled",
    description: "Description unavailable",
    technologies: ["Unknown", "Unknown", "Unknown"],
    liveUrl: "#",
    imageUrl: `${base}projects-img/compact.png`,
  },
  {
    id: 3,
    title: "Project Not Yet Compiled",
    description: "Description unavailable",
    technologies: ["Unknown", "Unknown", "Unknown"],
    liveUrl: "#",
    imageUrl: `${base}projects-img/compact.png`,
  },
  {
    id: 4,
    title: "Project Not Yet Compiled",
    description: "Description unavailable",
    technologies: ["Unknown", "Unknown", "Unknown"],
    liveUrl: "#",
    imageUrl: `${base}projects-img/compact.png`,
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-brand-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-balance">
          Projects
        </h2>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/ProjectsSection.jsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Return to Normalcy",
    description:
      "A web app that lets users generate and copy random programming jokes with a single click.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    imageUrl: "/compact.png",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, and inventory management.",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    imageUrl: "/compact.png",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["Vue.js", "Firebase", "Tailwind"],
    liveUrl: "#",
    imageUrl: "/compact.png",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides detailed forecasts and weather analytics for multiple locations.",
    technologies: ["React", "API", "Chart.js"],
    liveUrl: "#",
    imageUrl: "/compact.png",
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

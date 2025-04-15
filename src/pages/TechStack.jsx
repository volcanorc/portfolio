// src/components/TechSection.jsx

const techStack = [
  // Frontend / UI
  { name: "HTML", img: "/stack-logo/html.png" },
  { name: "CSS", img: "/stack-logo/css.png" },
  { name: "JavaScript", img: "/stack-logo/javascript.png" },
  { name: "React", img: "/stack-logo/react.png" },
  { name: "Next.js", img: "/stack-logo/nextjs.png" },
  { name: "Tailwind", img: "/stack-logo/tailwindcss.png" },
  { name: "Bootstrap", img: "/stack-logo/bootstrap.png" },

  // Backend / Server
  { name: "Node.js", img: "/stack-logo/nodejs.png" },
  { name: "PHP", img: "/stack-logo/php.png" },
  { name: "Laravel", img: "/stack-logo/laravel.png" },

  // Databases
  { name: "MySQL", img: "/stack-logo/mysql.png" },
  { name: "MongoDB", img: "/stack-logo/mongodb.png" },

  // DevOps / Collaboration Tools
  { name: "Git", img: "/stack-logo/git.png" },
  { name: "Docker", img: "/stack-logo/docker.png" },
  { name: "Slack", img: "/stack-logo/slack.png" },

  // Design / Other Tools
  { name: "Figma", img: "/stack-logo/figma.png" },
  { name: "Canva", img: "/stack-logo/canva.png" },
  { name: "WordPress", img: "/stack-logo/wordpress.png" },
];

export default function TechSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-red-500">Technologies</span> I Use
        </h2>

        {/* Tech Grid */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                {/* Logo */}
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Tech Name */}
                <span className="text-white font-medium text-lg">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

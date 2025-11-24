// =========================
//  Tech Data (Specialized + Grouped)
// =========================
const specializedSkills = [
  { name: "HTML", img: "stack-logo/html.png" },
  { name: "CSS", img: "stack-logo/css.png" },
  { name: "JavaScript", img: "stack-logo/javascript.png" },
  { name: "Tailwind", img: "stack-logo/tailwindcss.png" },
  { name: "Figma", img: "stack-logo/figma.png" },
  { name: "Canva", img: "stack-logo/canva.png" },
];

// Other technologies (grouped)
const techStack = {
  frontend: [
    { name: "React", img: "stack-logo/react.png" },
    { name: "Next.js", img: "stack-logo/nextjs.png" },
    { name: "Bootstrap", img: "stack-logo/bootstrap.png" },
  ],
  backend: [
    { name: "Node.js", img: "stack-logo/nodejs.png" },
    { name: "PHP", img: "stack-logo/php.png" },
    { name: "Laravel", img: "stack-logo/laravel.png" },
  ],
  database: [
    { name: "MySQL", img: "stack-logo/mysql.png" },
    { name: "MongoDB", img: "stack-logo/mongodb.png" },
  ],
  tools: [
    { name: "Git", img: "stack-logo/git.png" },
    { name: "Docker", img: "stack-logo/docker.png" },
    { name: "Slack", img: "stack-logo/slack.png" },
    { name: "WordPress", img: "stack-logo/wordpress.png" },
  ],
};

// =========================
// Mini component for categories
// =========================
function TechCategory({ title, items, base }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4 text-red-400">{title}</h3>

      <div className="grid grid-cols-1">
        {items.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors"
          >
            <div className="w-12 h-12 flex-shrink-0">
              <img
                src={`${base}${tech.img}`}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>

            <span className="text-white font-medium text-lg">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// =========================
// MAIN COMPONENT
// =========================
export default function TechSection() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* ================= SPECIALIZED IN ================= */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-red-500">I Specialized</span> In
        </h2>

        <p className="text-center text-gray-300 mb-10">
          These are the tools and technologies I am most confident and efficient
          at using.
        </p>

        <div className="flex flex-wrap justify-center gap-10 mb-20">
          {specializedSkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="w-20 h-20 mb-3">
                <img
                  src={`${base}${skill.img}`}
                  alt={skill.name}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>

              <span className="text-white font-semibold text-lg">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* ================= OTHER TECHNOLOGIES ================= */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Here Are the <span className="text-red-400">Other Technologies</span>{" "}
          I Use
        </h2>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-4  bg-gray-900/50 rounded-2xl p-8 border border-gray-800 mb-12">
          <TechCategory
            title="Frontend & UI"
            items={techStack.frontend}
            base={base}
          />
          <TechCategory
            title="Backend & Server"
            items={techStack.backend}
            base={base}
          />

          <TechCategory
            title="Databases"
            items={techStack.database}
            base={base}
          />
          <TechCategory
            title="Tools & Other"
            items={techStack.tools}
            base={base}
          />
        </div>
      </div>
    </section>
  );
}

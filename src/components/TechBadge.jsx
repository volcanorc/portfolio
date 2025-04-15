// src/components/TechBadge.jsx
const techIcons = {
  HTML: "🌐",
  CSS: "🎨",
  JavaScript: "⚡",
  React: "⚛️",
  "Node.js": "🟢",
  MongoDB: "🍃",
  "Vue.js": "💚",
  Firebase: "🔥",
  Tailwind: "💨",
  API: "🔌",
  "Chart.js": "📊",
};

export default function TechBadge({ technology }) {
  return (
    <div className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded-full px-4 py-2 text-sm font-medium text-white hover:border-orange-500/50 transition-colors duration-200">
      <span className="text-base">{techIcons[technology] || "🔧"}</span>
      <span>{technology}</span>
    </div>
  );
}

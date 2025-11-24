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
  Unknown: "❓",
};

export default function TechBadge({ technology }) {
  return (
    <div className="flex items-center gap-2 bg-zinc-800 text-white rounded-full px-3 py-1 text-sm font-medium">
      <img src={technology.img} alt={technology.name} className="w-5 h-5" />
      {technology.name}
    </div>
  );
}

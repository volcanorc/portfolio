// src/components/ProjectsSection.jsx
import { useState } from "react";
import ProjectCard from "./ProjectCard";

// Import first project images
import img1 from "/projects-img/project1/img1.png";
import img2 from "/projects-img/project1/img2.png";
import img3 from "/projects-img/project1/img3.png";
import img4 from "/projects-img/project1/img4.png";
import img5 from "/projects-img/project1/img5.png";
import img6 from "/projects-img/project1/img6.png";
import img7 from "/projects-img/project1/img7.png";
import img8 from "/projects-img/project1/img8.png";
import img9 from "/projects-img/project1/img9.png";

const base = import.meta.env.BASE_URL;

const firstProjectImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

const projects = [
  {
    id: 1,
    title: "Centralized Gym Management System",
    description:
      "A system designed to automate manual gym tasks like member check-ins and subscription management, making operations more efficient and error-free.",
    technologies: [
      { name: "Laravel", img: "stack-logo/laravel.png" },
      { name: "Tailwind", img: "stack-logo/tailwindcss.png" },
      { name: "MySQL", img: "stack-logo/mysql.png" },
    ],
    liveUrl: "#",
    imageUrl: img1,
    galleryImages: firstProjectImages,
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
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (images, startIndex = 0) => {
    setCurrentImages(images);
    setCurrentIndex(startIndex);
    setGalleryOpen(true);
  };

  const closeGallery = () => setGalleryOpen(false);

  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length
    );

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);

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
              openGallery={openGallery}
            />
          ))}
        </div>
      </div>

      {/* Gallery Lightbox */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-3xl font-bold"
          >
            &#8592;
          </button>
          <img
            src={currentImages[currentIndex]}
            alt="Project gallery"
            className="max-h-[90%] max-w-[90%] rounded-lg"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-3xl font-bold"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
}
